const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      name: "another user",
      email: "one more email",
    },
  });
  //Create a new post

  const post = await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is my first post",
    authorId: 1
    },
    });

    //Read all users and posts
const users = await prisma.user.findMany();
const posts= await prisma.post.findMany();
  console.log(users,posts);
// Find user by name
const user=await prisma.user.findFirst({where:{name:"User"}});
console.log(user);
// Find user by id
const user=await prisma.user.findUnique({where:{id:1}});
 console.log(user);
// Find user by name and include posts
 const user=await prisma.user.findFirst({where:{name:"John Doe"},include:{posts:true}});
 console.log(user);
//Update user email by name
const user=await prisma.user.updateMany({where:{name:"User"},data:{email:"newemail@g.com"}});
// Update user name by id
const user=await prisma.user.update({where:{id:2},data:{name:"moha"}});
//Delete user by name
const user=await prisma.user.deleteMany({where:{name:"another user"}});
// Delete user by id
const user=await prisma.user.delete({where:{id:5}});



}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
