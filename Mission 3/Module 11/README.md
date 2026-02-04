# Module 11 : Building Server with Raw Node JS and Typescript

**Postman : Postman** is a popular API development and testing tool.

postman is one kind of client site . we check our backend api end point by postman .

there are some client as like postman which is : **Insomnia , Bruno**

How to use postman ?

click on collections

create new collection

blank collection

rename

for post : body ⇒ raw ⇒ json ⇒

npm init -y (npm initialization) => it will add package.json file
npm install -D typescript ts-node @types/node (typescript installation)
npx tsc --init (for tsconfig.json) 
then :  "rootDir": "./src",
    "outDir": "./dist", 
    uncomment these two lines in tsconfig.json file
npm i dotenv

create .gitignore file and add node_modules/ , .env* in this file

we can check cwd in terminal : 
node
process.cwd()
cwd ⇒ current working directory

npm i -D ts-node-dev (for auto server loading)

**Data comes piece-by-piece (chunks). These chunks are stored in a Buffer.**

✔️ Data comes in pieces

✔️ Those pieces are stored in Buffer

✔️ Buffer = temporary storage of raw binary chunks