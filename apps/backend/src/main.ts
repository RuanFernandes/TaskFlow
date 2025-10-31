import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        app.enableCors({
            origin: [
                'http://localhost:5173',
                'https://taskflow.ruanfergui.com.br',
            ],
            credentials: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'Content-Type,Authorization',
        });

        const port = process.env.PORT ?? 3000;

        await app.listen(port);
        console.log(`API rodando em http://localhost:${port}`);
    } catch (error) {
        console.error('Erro ao iniciar API:', error);
        process.exit(1);
    }
}

void bootstrap();
