import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth/auth.service';

interface JwtPayload {
    sub: string;
    email: string;
    iat?: number;
    exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        const config = {
             
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        };
         
        super(config);
    }

    async validate(payload: JwtPayload) {
        if (!payload.sub || typeof payload.sub !== 'string') {
            throw new Error('Invalid JWT payload');
        }
        return this.authService.validateUser(payload.sub);
    }
}
