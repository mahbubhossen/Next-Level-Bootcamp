### Module - 5 : Explore Basic type of TypeScripts

### NVM ( Node Version Manager )  :
nvm install 24.11.0 (when which version need )

**Basic NVM Commands:**

| Command | Description |
| --- | --- |
| `nvm version` | Shows the version of NVM installed |
| `nvm list` or `nvm ls` | Lists all Node.js versions installed on your system |
| `nvm list available` or `nvm ls available` | Shows all Node.js versions you can install |
| `nvm install <version>` | Installs a specific Node.js version (e.g., `nvm install 18.17.0`) |
| `nvm use <version>` | Switches to a specific Node.js version (e.g., `nvm use 20.10.0`) |
| `nvm uninstall <version>` | Uninstalls a specific Node.js version |
| `nvm current` | Shows which Node.js version is currently active |
| `nvm install latest` | Installs the latest available Node.js version |
| `nvm install lts` | Installs the latest **LTS (Long-Term Support)** version |
| `nvm use lts` | Switches to the latest LTS version |
| `nvm use latest` | Switches to the latest version installed |
| `nvm root` | Shows the folder where NVM stores Node versions |
| `nvm alias <name> <version>` | Creates a shortcut for a specific version (e.g., `nvm alias default 18.17.0`) |
| `nvm alias default <version>` | Sets a default Node version for all terminals |
| `nvm uninstall <version>` | Removes a Node.js version you no longer need |

---

### Here’s how you’ll usually use NVM in real life 👇

 1. Check NVM version
nvm version

 2. See what Node versions are installed
nvm list

3. Install a new Node version
nvm install 20

 4. Switch to that version
nvm use 20

 5. Set it as default for all terminals
nvm alias default 20

 6. Verify it’s active
node -v
npm -v



### Typescript :  
.ts extension 
---
for run : node test.ts
---
after 22.6.0 node version typescript run in nodejs . 
---
For installing typescripts : npm install -g typescript 
---
tsc => for typescript to javascript convert
---
tsc test.ts ⇒ create automatic  js file code 
---
tsc —init ⇒ for create tsconfig.json file .
---

### enable this two from tsconfig.json file :  
---
  "rootDir": "./src",  // this for all typescript file
---
  "outDir": "./dist",  // dist for all js file which will convert from ts
---


### 🔹 First ts file 

See this file:  
📄 [test.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/test.ts)

--- 
### 🔹 Primitive types  

See this file:  
📄 [primitive.ts](https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%202/Module%20-%205/TypeScript-learning/src/primitive.ts)

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

