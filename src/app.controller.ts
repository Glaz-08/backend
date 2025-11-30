import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('nueva-cadena')
  getNuevaCadena(): string {
    return 'Esta es una nueva cadena de texto';
  }
}
