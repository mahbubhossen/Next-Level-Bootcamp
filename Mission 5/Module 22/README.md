first go to prisma website , then find postgresql from docs
then copy this
npm init
npm install typescript tsx @types/node --save-dev
npx tsc --init
then paste in the terminal

then
package-lock.json
package.json
tsconfig.json
file will create

then create .gitignore file
and write this
node_modules
dist
build
.env
.DS_Store

then install this
npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv

then ,
copy this form docs
{
"compilerOptions": {
"module": "ESNext",
"moduleResolution": "bundler",
"target": "ES2023",
"strict": true,
"esModuleInterop": true,
"ignoreDeprecations": "6.0"
}
}

and paste it into tsconfig.json ,
delete before code then paste it

Update package.json to enable ESM:

package.json

{
"type": "module"
}

then copy this and paste in the terminal

npx prisma init --datasource-provider postgresql --output ../generated/prisma

prisma folder will create

then
copy this
model User {
id Int @id @default(autoincrement())
email String @unique
name String?
posts Post[]
}
model Post {
id Int @id @default(autoincrement())
title String
content String?
published Boolean @default(false)
author User @relation(fields: [authorId], references: [id])
authorId Int
}

and paste into the schema.prisma

now
in the .env
update this
DATABASE_URL="postgresql://postgres:1234@localhost:5432/learn-prisma-orm?schema=public"

and open postgresql server

then run this
npx prisma migrate dev

then write
init

then write this
npx prisma generate

now
create this
lib/prisma.ts
and paste this
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };


then create 
script.ts
and paste the code from docs

and then run this 
npx tsx script.ts



then write in the console 
npx prisma studio
and go to browser and write localhost:51212 


now go to schema.prisma
delete previous model

now write your own model 
model means table creation

install prisma extension 
search on name "Prisma"
then install


