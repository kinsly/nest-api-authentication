import { IsString } from "class-validator";

export class signInDTO {
  
  @IsString()
  username:string;

  @IsString()
  password:string;
}
