import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 👈 This will transform our payload to DTO instance
      forbidNonWhitelisted: true, // 👈Throw errors when whitelisted properties are found
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
