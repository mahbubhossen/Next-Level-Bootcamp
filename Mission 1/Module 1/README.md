## 📘 Module 1: Mindset Over Syntax

---

### 🧠 Data Structure
A **data structure** is a way of organizing and storing data so that it can be used efficiently. It helps in managing and accessing data quickly. Common examples include **arrays, linked lists, stacks, and queues**. Each data structure has its own method of organizing data and its own strengths.

By default, the built-in data structures in **JavaScript** are:
- Arrays
- Objects
- Sets
- Maps

---

### ⚙️ Algorithm
An **algorithm** is a step-by-step procedure or a set of rules used to solve a problem or perform a task. Essentially, it is a sequence of instructions that guides you from the starting point to the desired outcome.

---

### ⏱ Time Complexity

#### 🔹 Big O Notation
**Big O notation** describes how the performance of an algorithm changes as the size of the input data increases. It helps us understand how efficient an algorithm is in terms of:
- **Time** (how long it takes to run)
- **Space** (how much memory it uses)

We always consider the **worst-case scenario** in Big O notation.

#### 🔹 Common Big O Notations
- **O(1)** — Constant Time  
- **O(n)** — Linear Time  
- **O(n²)** — Quadratic Time  
- **O(log n)** — Logarithmic Time  
- **O(n log n)** — Linearithmic Time  

---

### 🧩 Examples

If a `for` loop runs **n** times, the time complexity is **O(n)**:

```js
for (let i = 0; i < n; i++) {
  // logic
}
```

The following array methods have **O(n)** time complexity:

* `array.forEach()`
* `array.map()`
* `array.filter()`
* `array.find()`

---

Nested loops result in **O(n²)** time complexity:

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // logic
  }
}
```

➡️ We should avoid nested loops as much as possible and try to use **single-loop (O(n)) solutions**.

---

### ⚡ Constant Time Examples

```js
arr[3] = 10;           // O(1)
obj["name"] = "Alice"; // O(1)
```

---

### 🔁 Sequential Loops

```js
for (let i = 0; i < n; i++) {
  // Loop 1
}

for (let j = 0; j < n; j++) {
  // Loop 2
}
```

➡️ This is **O(n)** because the loops are sequential, not nested (O(n + n) = O(2n) -> O(n)).

---

### 🔢 Fixed Loop Count

```js
for (let i = 0; i < 5; i++) {
  // runs exactly 5 times regardless of input
}
```

➡️ **O(1)** because the loop runs a constant number of times.

---

### 📌 Array Shift & Unshift

`array.shift()` and `array.unshift()` have **O(n)** time complexity. When an element is added or removed from the beginning of an array, all other elements must be shifted. This shifting process takes time proportional to the number of elements.

---

### 🔍 How to Find the Time Complexity of a Code Snippet

See this file:
📄 [index.js](./Mission%201/Module%201/index.js)
📂 `Mission 1 / Module 1 / index.js`

---

### 🧩 Set Function

See this file:
📄 [set.js](./Mission%201/Module%201/set.js)
📂 `Mission 1 / Module 1 / set.js`

---

### 🧹 How to Remove Duplicate Values from an Array

See this file:
📄 [removeDuplicate.js](./Mission%201/Module%201/removeDuplicate.js)
📂 `Mission 1 / Module 1 / removeDuplicate.js`




---