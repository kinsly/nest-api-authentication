import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { registerDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService:UsersService,
    private jwtService:JwtService
  ){}

  async signIn(username:string, pass:string):Promise<any>
  {
    const user = await this.usersService.findOne(username);

    //Unauthorized if passwords does not match
    if(user?.password !== pass){
      throw new UnauthorizedException;
    }
    
    const payload = {sub:user.id, username:user.username};

    return {
      access_token: await this.jwtService.signAsync(payload)
    }

  }

  async register(registerDTO:registerDTO)
  {
    return this.usersService.addUser(registerDTO);
  }

}
