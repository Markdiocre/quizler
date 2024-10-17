import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const admin = await prisma.user.create({
        data:{
            email: 'admin@gmail.com',
            password: '$2b$10$pkVrk6aSxlxbLnIR5WMWRuxZe5qJ8yQ9sblwOz.8xfdEPcNTQ6mYq',
            is_superuser: true
        }
    })
}

main()