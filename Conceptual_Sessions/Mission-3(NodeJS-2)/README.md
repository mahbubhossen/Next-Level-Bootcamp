How to run the server ? 

1. npm init -y
2. then package.json file will be create 
From package.json : 
3. remove this line ["type":"common js"]
4. add this line in the scripts [   "dev": "tsx watch ./src/server.ts",   ]
In the terminal : 
5. npm i typescript express (package-lock.json file will be created)
6. npm i -D tsx @types/express 
7. tsc --init (tsconfig.json file will be create)
In the tsconfig.json file : 
8. comment out these two lines : 
    "rootDir": "./src",
    "outDir": "./dist",
9. Module will be esnext ("module": "esnext",)
10. types will be node . like this [ "types": ["node"], ]
11. after target write this line : "moduleResolution": "bundler",
it will be look like this : 
    "module": "esnext",
    "target": "esnext",
    "moduleResolution": "bundler",
    "types": ["node"],
12. comment these 4 lines : 
    // "sourceMap": true,
    // "declaration": true,
    // "declarationMap": true,
    // "jsx": "react-jsx",
13. change this true to false : "verbatimModuleSyntax": false,

14. now create src folder in the main file
15. crete server.ts file in the src
16. in the server.ts file write this code : 

    import express from 'express'

    const app = express()

    app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
    })

now in the terminal write npm run dev . and server will be run successfully.
17. now add this also : 

    import express, { Request, Response } from "express";

    const app = express();

    app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello, World!",
        path: req.path,
    });
    });

    app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
    });
now form browser . write localhost:3000 and output will be show . 

18. now add middleware 

    import express, { Request, Response } from "express";

    const app = express();

    app.use(express.json());   // add this line

    app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello, World!",
        path: req.path,
    });
    });

    app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
    });

19. now install postgresql  : npm i pg
20. now add this line : 

    import express, { Request, Response } from "express";
    import { Pool } from "pg";

    const app = express();
    app.use(express.json());

    const pool = new Pool;

    app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello, World!",
        path: req.path,
    });
    });

    app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
    });

21. Now add this from neonDB : 

    import express, { Request, Response } from "express";
    import { Pool } from "pg";

    const app = express();
    app.use(express.json());

    const pool = new Pool({
    connectionString:
        "postgresql://neondb_owner:npg_jrvqZmYg1A4K@ep-super-dust-a45v3w8t-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    });

    app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello, World!",
        path: req.path,
    });
    });

    app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
    });

 
22. now add this line after that : 

    const pool = new Pool({
    connectionString:
        "postgresql://neondb_owner:npg_jrvqZmYg1A4K@ep-super-dust-a45v3w8t-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    });


    const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE CHECK (email = LOWER(email)),
        password VARCHAR(255) NOT NULL CHECK (length(password) >= 6),
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(10) NOT NULL CHECK (role IN ('admin','customer'))
    );
    `);
    };

    initDB();





at first : npm init -y then package.json will added
then remove type .
then write this :
"dev": "tsx watch ./src/server.ts", in scripts
then : npm i typescript express
then : npm i -D @types/express
then : npx tsc --init

then tsconfig.json file will create .
now uncomment this :
"rootDir": "./src",
"outDir": "./dist",

then module : esnext
then types : "types": ["node"],
then add this after target:
"moduleResolution": "bundler",

then comment this :
// "sourceMap": true,
// "declaration": true,
// "declarationMap": true,

then comment this :// "jsx": "react-jsx",
then :
"verbatimModuleSyntax": false,

if face error then write : npm install -D tsx

now install postgresql : npm i pg

then install bcrypt for password hashing : npm i bcryptjs
then install jsonwebtoken : npm i jsonwebtoken