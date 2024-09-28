import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/common/constants';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { registerDTO } from 'src/auth/dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject(USER_REPOSITORY) private userRepository: Repository<User>
  ){}

  /**
   * Create new user. registering new user
   * @param registerDTO 
   * @returns user
   */
  async addUser(registerDTO:registerDTO):Promise<registerDTO | undefined | string>
  {
    try{
      const user = this.userRepository.create(registerDTO);
      await this.userRepository.save(user);
      return user;
    }catch(e)
    {
      throw new Error('Failed to save user to the database');
    }
    
  }
  
  /**
   * Find user by user name
   * @param username 
   * @returns user
   */
  async findOne(username:string):Promise<User | undefined>
  {
    const user =  this.userRepository.findOneBy({username});
    return user;
  }


}
