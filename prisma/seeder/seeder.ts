// prisma/seeder.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const userData = [
    { email: 'john.doe@example.com', senha:'Abc@123' },
    { email: 'jane.doe@example.com', senha:'123@Abc' },
  ];

  for (const user of userData) {
    await prisma.usuario.create({
      data: user,
    });
  }
}

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
