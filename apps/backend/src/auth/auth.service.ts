import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginUser } from '../types/LoginUser.type';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async register(
        email: string,
        password: string,
        name: string,
    ): Promise<LoginUser> {
        const userExists = await this.prisma.user.findUnique({
            where: { email },
        });

        if (userExists) {
            throw new BadRequestException('Email já cadastrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        const token = this.jwtService.sign({ sub: user.id, email: user.email });

        return {
            access_token: token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        };
    }

    async login(email: string, password: string): Promise<LoginUser> {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new UnauthorizedException('Email ou senha inválidos');
        }

        if (!user.password) {
            throw new UnauthorizedException('Email ou senha inválidos');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedException('Email ou senha inválidos');
        }

        const token = this.jwtService.sign({ sub: user.id, email: user.email });

        return {
            access_token: token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        };
    }

    async validateUser(
        userId: string,
    ): Promise<{ id: string; email: string; name: string }> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
            },
        });

        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }

        return user as { id: string; email: string; name: string };
    }

    async authenticateMe(userId: string): Promise<LoginUser> {
        const user = await this.validateUser(userId);
        const token = this.jwtService.sign({ sub: user.id, email: user.email });

        return {
            access_token: token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        };
    }
}
