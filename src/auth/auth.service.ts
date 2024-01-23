import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateUser(email:string, senha:string){
        throw new Error("Method Not IMplemented")
    }
}
