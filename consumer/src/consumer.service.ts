import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

interface User {
  id: number;
  name: string;
  age: number;
}

interface GetFilteredUsersResponse {
  users: User[];
}

@Injectable()
export class ConsumerService implements OnModuleInit {
  private userServiceClient: any;

  constructor(@Inject('UserService') private grpcUserclient: ClientGrpc) { }

  onModuleInit() {
    this.userServiceClient = this.grpcUserclient.getService('UserService')
  }

  async getFilteredUsers(): Promise<void> {
    try {
      const response: GetFilteredUsersResponse = await firstValueFrom(this.userServiceClient.getFilteredUsers({}));
      console.log('Filtered Users:', response.users);
    } catch (error) {
      console.error('Error fetching filtered users:', error);
    }
  }
}
