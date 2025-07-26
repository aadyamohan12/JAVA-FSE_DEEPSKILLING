
# Hands-on 1: My First React App

This project is a simple React application that displays a heading:  
**"welcome to the first session of React"**

## 📁 Project Name
`myfirstreact`

---

## 🛠️ Requirements

- Node.js (v22.x or above)
- npm (v11.x or above)
- Code Editor (e.g. VS Code)

---

## ⚙️ Setup Instructions

### 1. Install Node.js and npm

Download and install from:  
👉 https://nodejs.org/en/download/

Verify the installation:

```bash
node -v
npm -v
```

---

### 2. Create a React App

```bash
npx create-react-app myfirstreact
cd myfirstreact
code .
```

---

### 3. Update `App.js`

Replace the content of `src/App.js` with:

```jsx
function App() {
  return (
    <div>
      <h1>welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```

---

### 4. Run the App

```bash
npm start
```

Open browser and go to:  
📍 `http://localhost:3000`

You should see:

```
welcome to the first session of React
```

---

## 📦 Notes

- Do **not** upload `node_modules/` to GitHub.
- To reinstall dependencies:

```bash
npm install
```

---

## 📄 License

This project is for educational/demo purposes only.
