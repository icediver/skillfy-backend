import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { PrismaService } from './prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  const config = new DocumentBuilder()
    .setTitle('Skillfy API')
    .setDescription('The Skillfy API description')
    .setVersion('1.0')
    .addTag('skillfy')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // writeFileSync('./swagger-spec.json', JSON.stringify(document));

  SwaggerModule.setup('api', app, document);

  await app.listen(4200);
}
bootstrap();
