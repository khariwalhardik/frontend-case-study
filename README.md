# Frontend Case Study

A responsive and interactive frontend built with React that simulates a simple admin-user interface. The application toggles between a Home view and an Admin Dashboard, leveraging global state management using React Context.

## 🚀 Features
- 🌐 Toggle between Home and Admin Dashboard
- 👤 Global state management with Context API
- 📱 Responsive UI – accessible on mobile via LAN
- � Development-ready setup with Vite

## 📸 Screenshots


## 🛠️ Tech Stack
- React (with JSX)
- Vite (Fast dev server & bundler)
- Context API (for profile management)
- CSS (for styling)

## 🧩 Project Structure
```bash
frontend-case-study/
├── public/
├── src/
│ ├── context/
│ │ └── ProfileContext.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── AdminDashboard.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── index.html
└── package.json
```

## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/khariwalhardik/frontend-case-study.git
cd frontend-case-study
```
2. **Install dependencies**

```bash
npm install
```
3. **Run the development server**

```bash
npm run dev
```
4. **View on Android (Same WiFi)**

- Make sure your PC and Android are connected to the same Wi-Fi network.
- Open the URL shown in your terminal (e.g., `http://192.168.x.x:5173/`) on your Android browser.

  If it doesn't show up:
  - Allow LAN access in your firewall, or
  - Use `vite --host` to specify your IP.

---

## 🙌 Acknowledgements

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Error Boundaries in React](https://react.dev/link/error-boundaries)

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
