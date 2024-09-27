import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDTO } from './dto';

@Controller('auth')
export class AuthController {

  constructor(private authService:AuthService){}


  /**TO do: https://docs.nestjs.com/techniques/validation use DTO */
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDTO: signInDTO)
  {
    return this.authService.signIn(signInDTO.username, signInDTO.password);
  }
}
