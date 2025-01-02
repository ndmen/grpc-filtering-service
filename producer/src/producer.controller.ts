import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) { }

  @GrpcMethod('UserService', 'GetFilteredUsers')
  async getUsers(): Promise<any> {
    return this.producerService.getFilteredUsers();
  }
}
