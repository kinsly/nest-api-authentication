import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDTO, signInDTO } from './dto';

@Controller('auth')
export class AuthController {

  constructor(private authService:AuthService){}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDTO: signInDTO)
  {
    return this.authService.signIn(signInDTO.username, signInDTO.password);
  }

  @Post('register')
  register(@Body() registerDTO: registerDTO)
  {
    return this.authService.register(registerDTO);
  }
}
