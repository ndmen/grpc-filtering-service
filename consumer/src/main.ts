import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsumerService } from './consumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const consumerService = app.get(ConsumerService);
  consumerService.getFilteredUsers();
  await app.listen(3000);
}
bootstrap();
