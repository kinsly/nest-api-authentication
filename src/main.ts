import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //This is used to ensure all endpoints are protected from receiving incorrect data
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist:true, //remove undefined values comes with the request object
      transform:true, //Automatically convert receiving javascript objects or values to expected format. 
                      //Useful when creating new db record, string to number like id auto conversion 
      


    }
  ));

  await app.listen(3000);
}
bootstrap();
