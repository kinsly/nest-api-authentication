import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { sign } from 'crypto';

@Controller('auth')
export class AuthController {

  constructor(private authService:AuthService){}


  /**TO do: https://docs.nestjs.com/techniques/validation use DTO */
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signDTO: Record<string, any>)
  {
    return this.authService.signIn(signDTO.username, signDTO.password);
  }
}
