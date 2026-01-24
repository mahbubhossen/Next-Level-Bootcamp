**TypeScript** along with **Node Version Manager (NVM)** usage, configuration, and core TypeScript concepts.

---

## 🔹 NVM (Node Version Manager)

NVM allows you to install and manage multiple Node.js versions on the same machine.

Example:
```bash
nvm install 24.11.0   # Install a specific Node.js version when needed
🔹 Basic NVM Commands
Command	Description
nvm version	Shows the installed NVM version
nvm list or nvm ls	Lists all Node.js versions installed on your system
nvm list available or nvm ls available	Shows all Node.js versions available for installation
nvm install <version>	Installs a specific Node.js version (e.g. nvm install 18.17.0)
nvm use <version>	Switches to a specific Node.js version
nvm uninstall <version>	Uninstalls a Node.js version
nvm current	Shows the currently active Node.js version
nvm install latest	Installs the latest Node.js version
nvm install lts	Installs the latest LTS (Long-Term Support) version
nvm use lts	Switches to the latest LTS version
nvm use latest	Switches to the latest installed version
nvm root	Shows where NVM stores Node.js versions
nvm alias <name> <version>	Creates an alias for a Node.js version
nvm alias default <version>	Sets a default Node.js version for all terminals
🔹 Typical NVM Workflow (Real-Life Usage)
Check NVM version

nvm version
See installed Node.js versions

nvm list
Install a new Node.js version

nvm install 20
Switch to that version

nvm use 20
Set it as the default version

nvm alias default 20
Verify the active version

node -v
npm -v
🔹 TypeScript Basics
File extension: .ts

TypeScript can be run directly in Node.js from version 22.6.0+

node test.ts
🔹 Installing TypeScript
npm install -g typescript
🔹 Common TypeScript Commands
tsc → Converts TypeScript to JavaScript

tsc test.ts → Generates a corresponding .js file

tsc --init → Creates a tsconfig.json file

🔹 Recommended tsconfig.json Settings
{
  "rootDir": "./src",   // Contains all TypeScript files
  "outDir": "./dist"    // Contains compiled JavaScript files
}

### 🔹 First ts file 

See this file:  
📄 [test.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/test.ts)

--- 
### 🔹 Primitive types  

See this file:  
📄 [primitive.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/premitive.ts)

--- 
### 🔹 Non Primitive types  

See this file:  
📄 [nonPrimitive.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/nonPrimitive.ts)

--- 
### 🔹 Function

See this file:  
📄 [function.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/function.ts)

--- 
### 🔹 Spread and Rest Operator  

See this file:  
📄 [spreadAndRest.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/spreadAndRest.ts)

--- 
### 🔹 Destructuring

See this file:  
📄 [destructuring.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/destructuring.ts)

--- 
### 🔹 Type Alias

See this file:  
📄 [typeAlias.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/typeAlias.ts)

--- 
### 🔹 Union and Intersection 

See this file:  
📄 [unionAndIntersection.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/unionAndIntersection.ts)

--- 
### 🔹 Ternary , nullish coalescing and optional chaining

See this file:  
📄 [questionMark.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/questionMark.ts)

--- 
### 🔹 Nullable , unknown and never 

See this file:  
📄 [nullableUnknownNever.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/nullableUnknownNever.ts)

--- 

