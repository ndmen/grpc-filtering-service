import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'UserService',
        transport: Transport.GRPC,
        options: {
          url: 'producer:5001',
          package: 'user',
          protoPath: join(__dirname, 'proto/users.proto'),
        },
      },
    ]),
  ],
  providers: [ConsumerService],
})
export class AppModule {}
