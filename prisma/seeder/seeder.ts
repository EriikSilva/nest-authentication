// prisma/seeder.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  const userData = [
    { email: 'john.doe@example.com', senha: 'Abc@123' },
    { email: 'jane.doe@example.com', senha: '123@Abc' },
  ];

  const saltRounds = 10;

  for (const user of userData) {
    const data = {
      ...user,
      senha: await bcrypt.hash(user.senha, saltRounds),
    };

    await prisma.usuario.create({ data });
  }
  
}

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
