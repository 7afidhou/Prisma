# Prisma with MySQL in JavaScript

## 🚀 Installation

### 1️⃣ Install Prisma and MySQL Client
```sh
npm install @prisma/client
npm install --save-dev prisma
```

### 2️⃣ Initialize Prisma
```sh
npx prisma init
```
This creates a `prisma/` folder and a `.env` file.

### 3️⃣ Configure Database
Edit `.env`:
```env
DATABASE_URL="mysql://user:password@localhost:3306/mydatabase"
```

### 4️⃣ Define Schema (`prisma/schema.prisma`)
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String
  authorId Int
  author   User   @relation(fields: [authorId], references: [id])
}
```

### 5️⃣ Migrate Database
```sh
npx prisma migrate dev --name init
npx prisma generate
```

## 📜 Code Execution

### 1️⃣ Create a New User
```javascript
const user = await prisma.user.create({
  data: {
    name: "another user",
    email: "one more email",
  },
});
```

### 2️⃣ Create a New Post
```javascript
const post = await prisma.post.create({
  data: {
    title: "Hello World",
    content: "This is my first post",
    authorId: 1
  },
});
```

### 3️⃣ Read All Users and Posts
```javascript
const users = await prisma.user.findMany();
const posts = await prisma.post.findMany();
console.log(users, posts);
```

### 4️⃣ Find User by Name
```javascript
const user = await prisma.user.findFirst({ where: { name: "User" } });
console.log(user);
```

### 5️⃣ Find User by ID
```javascript
const user = await prisma.user.findUnique({ where: { id: 1 } });
console.log(user);
```

### 6️⃣ Find User by Name and Include Posts
```javascript
const user = await prisma.user.findFirst({ 
  where: { name: "John Doe" }, 
  include: { posts: true } 
});
console.log(user);
```

### 7️⃣ Update User Email by Name
```javascript
const user = await prisma.user.updateMany({
  where: { name: "User" },
  data: { email: "newemail@g.com" }
});
```

### 8️⃣ Update User Name by ID
```javascript
const user = await prisma.user.update({
  where: { id: 2 },
  data: { name: "moha" }
});
```

### 9️⃣ Delete User by Name
```javascript
const user = await prisma.user.deleteMany({ where: { name: "another user" } });
```

### 🔟 Delete User by ID
```javascript
const user = await prisma.user.delete({ where: { id: 5 } });
```

## 🔄 Final Execution
```javascript
main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```

## ✅ Next Steps
- Improve error handling.
- Implement transaction management.
- Add pagination for large datasets.

Happy coding! 🚀

