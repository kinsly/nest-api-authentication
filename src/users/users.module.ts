import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProviders } from 'src/users/user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [
    ...UserProviders,
    UsersService
  ],
  exports:[UsersService]
})
export class UsersModule {}
