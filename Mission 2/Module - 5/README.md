
# Module 5: Explore Basic Types of TypeScript

## NVM (Node Version Manager)

Install a specific Node.js version when needed:
```bash
nvm install 24.11.0
````

### Basic NVM Commands

| Command                                    | Description                                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------- |
| `nvm version`                              | Shows the version of NVM installed                                           |
| `nvm list` or `nvm ls`                     | Lists all Node.js versions installed on your system                          |
| `nvm list available` or `nvm ls available` | Shows all Node.js versions you can install                                   |
| `nvm install <version>`                    | Installs a specific Node.js version (e.g. `nvm install 18.17.0`)             |
| `nvm use <version>`                        | Switches to a specific Node.js version (e.g. `nvm use 20.10.0`)              |
| `nvm uninstall <version>`                  | Uninstalls a specific Node.js version                                        |
| `nvm current`                              | Shows which Node.js version is currently active                              |
| `nvm install latest`                       | Installs the latest available Node.js version                                |
| `nvm install lts`                          | Installs the latest **LTS (Long-Term Support)** version                      |
| `nvm use lts`                              | Switches to the latest LTS version                                           |
| `nvm use latest`                           | Switches to the latest installed version                                     |
| `nvm root`                                 | Shows the folder where NVM stores Node.js versions                           |
| `nvm alias <name> <version>`               | Creates a shortcut for a specific version (e.g. `nvm alias default 18.17.0`) |
| `nvm alias default <version>`              | Sets a default Node.js version for all terminals                             |
| `nvm uninstall <version>`                  | Removes a Node.js version you no longer need                                 |

---

### How NVM Is Commonly Used in Real Life 👇

1. **Check NVM version**

```bash
nvm version
```

2. **See installed Node.js versions**

```bash
nvm list
```

3. **Install a new Node.js version**

```bash
nvm install 20
```

4. **Switch to that version**

```bash
nvm use 20
```

5. **Set it as the default for all terminals**

```bash
nvm alias default 20
```

6. **Verify the active version**

```bash
node -v
npm -v
```

---

## TypeScript

* TypeScript files use the `.ts` extension
* Run a TypeScript file directly:

```bash
node test.ts
```

* From Node.js version **22.6.0+**, TypeScript can run directly in Node.js

### Installing TypeScript

```bash
npm install -g typescript
```

### Common TypeScript Commands

* `tsc` → Converts TypeScript to JavaScript

* Convert a file:

```bash
tsc test.ts
```

This will automatically create a JavaScript (`.js`) file

* Initialize TypeScript configuration:

```bash
tsc --init
```

This creates a `tsconfig.json` file

---

### Required Settings in `tsconfig.json`

Enable the following options:

```json
{
  "rootDir": "./src",
  "outDir": "./dist"
}
```

* **rootDir**: Contains all TypeScript (`.ts`) files
* **outDir**: Contains all compiled JavaScript (`.js`) files generated from TypeScript

```

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

