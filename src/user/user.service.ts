import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService {
 

  constructor(private readonly prisma:PrismaService){}

  async getAll() {
    return this.prisma.usuario.findMany();
  }

  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10

     const data = {
      ...createUserDto,
      senha:await bcrypt.hash(createUserDto.senha, saltRounds)
     }

    const createdUser = await this.prisma.usuario.create({data})

     return {...createdUser, senha:undefined};
  }

  findByEmail(email: string) {
    return this.prisma.usuario.findUnique({where:{email}})
  }
}
