import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        const port = process.env.PORT ?? 3000;

        await app.listen(port);
        console.log(`API rodando em http://localhost:${port}`);
    } catch (error) {
        console.error('Erro ao iniciar API:', error);
        process.exit(1);
    }
}

void bootstrap();
