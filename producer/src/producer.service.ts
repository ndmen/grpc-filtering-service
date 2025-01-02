import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProducerService {
  getFilteredUsers() {
    const filePath = path.resolve(__dirname, 'data', 'users.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    return { users: users.filter((user: { age: number }) => user.age > 18) };
  }
}