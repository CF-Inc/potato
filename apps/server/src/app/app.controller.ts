import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { HelloWorld } from './DTOs/hello-world.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('Example')
  updateData(@Body() body: HelloWorld) {
    this.appService.addData(body);
    return body;
  }
}
