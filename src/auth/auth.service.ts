import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {

  constructor(private readonly userService:UserService){}

  async validateUser(email: string, senha: string) {
    const user = await this.userService.findByEmail(email)

    if(user){
      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if(isPasswordValid){
        return {
          ...user,
          senha:undefined
        }
      }

      throw new Error('Email ou Senha incorretas');
    }
  }
  
}
