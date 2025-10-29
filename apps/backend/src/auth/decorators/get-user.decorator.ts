import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
}

export const GetUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return (request as { user: AuthenticatedUser }).user;
    },
);
