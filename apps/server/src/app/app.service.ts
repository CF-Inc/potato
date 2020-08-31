import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private data = [];

  addData(newData) {
    this.data.push(newData);
  }

  getData() {
    return this.data;
  }
}
