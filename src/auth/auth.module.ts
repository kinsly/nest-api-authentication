import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../common/constants';

@Module({
  imports:[
    UsersModule,
    JwtModule.register({
      global:true, //This means that we don't need to import the JwtModule anywhere else in our application.
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'600s'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
