const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a new user
//   const user = await prisma.user.create({
//     data: {
//       name: "User",
//       email: "moh@email.com",
//     },
//   });

  const post = await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is my first post",
    authorId: 1
    },
    });
const users = await prisma.user.findMany();
const posts= await prisma.post.findMany();
  console.log(users,posts);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
