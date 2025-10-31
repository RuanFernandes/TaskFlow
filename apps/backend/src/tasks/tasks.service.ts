import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';

type TaskWithUser = {
    id: string;
    title: string;
    description: string | null;
    status: string;
    dueDate: Date | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        email: string;
        name: string;
    };
};

@Injectable()
export class TasksService {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        createTaskDto: CreateTaskDto,
        userId: string,
    ): Promise<unknown> {
        return (await this.prisma.task.create({
            data: {
                title: createTaskDto.title,
                description: createTaskDto.description || undefined,
                status: createTaskDto.status || 'PENDING',
                dueDate: createTaskDto.dueDate
                    ? new Date(createTaskDto.dueDate)
                    : undefined,
                userId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
            },
        })) as unknown;
    }

    async findAll(userId: string): Promise<unknown> {
        return (await this.prisma.task.findMany({
            where: { userId },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        })) as unknown;
    }

    async findOne(id: string, userId: string): Promise<unknown> {
        const task = (await this.prisma.task.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
            },
        })) as TaskWithUser | null;

        if (!task) {
            throw new NotFoundException(`Task com ID ${id} não encontrada`);
        }

        if (task.userId !== userId) {
            throw new NotFoundException(
                'Task não pertence ao usuário autenticado',
            );
        }

        return task as unknown;
    }

    async update(
        id: string,
        updateTaskDto: UpdateTaskDto,
        userId: string,
    ): Promise<unknown> {
        const task = (await this.prisma.task.findUnique({
            where: { id },
        })) as { userId: string } | null;

        if (!task) {
            throw new NotFoundException(`Task com ID ${id} não encontrada`);
        }

        if (task.userId !== userId) {
            throw new NotFoundException(
                'Task não pertence ao usuário autenticado',
            );
        }

        const updateData: Record<string, unknown> = {};
        if (updateTaskDto.title !== undefined) {
            updateData.title = updateTaskDto.title;
        }
        if (updateTaskDto.description !== undefined) {
            updateData.description = updateTaskDto.description;
        }
        if (updateTaskDto.status !== undefined) {
            updateData.status = updateTaskDto.status as string;
        }
        if (updateTaskDto.dueDate !== undefined) {
            const dateString = updateTaskDto.dueDate as string | undefined;
            updateData.dueDate =
                dateString && dateString.length > 0
                    ? new Date(dateString).toISOString()
                    : null;
        }

        return (await this.prisma.task.update({
            where: { id },
            data: updateData,
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
            },
        })) as unknown;
    }

    async remove(id: string, userId: string): Promise<void> {
        const task = (await this.prisma.task.findUnique({
            where: { id },
        })) as { userId: string } | null;

        if (!task) {
            throw new NotFoundException(`Task com ID ${id} não encontrada`);
        }

        if (task.userId !== userId) {
            throw new NotFoundException(
                'Task não pertence ao usuário autenticado',
            );
        }

        await this.prisma.task.delete({
            where: { id },
        });
    }
}
