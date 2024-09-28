import { IsEmail, IsString } from "class-validator";

export class signInDTO {
  
  @IsString()
  username:string;

  @IsString()
  password:string;
}

export class registerDTO {
  @IsString()
  name:string
  
  @IsString()
  username:string
  
  @IsString()
  password:string
  
  @IsEmail()
  email:string
}