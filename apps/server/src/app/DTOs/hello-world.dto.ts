import { IsString } from 'class-validator';

export class HelloWorld {
  @IsString()
  hello: string;
}
