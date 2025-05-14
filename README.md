# Frontend Case Study

A responsive and interactive frontend built with React that simulates a simple admin-user interface. The application toggles between a Home view and an Admin Dashboard, leveraging global state management using React Context.

## 🚀 Features
- 🌐 Toggle between Home and Admin Dashboard
- 👤 Global state management with Context API
- 📱 Responsive UI – accessible on mobile via LAN
- � Development-ready setup with Vite

## 📸 Screenshots

### Mobile UI
Here are some screenshots of the UI on mobile:

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4be99eef-9a5c-4e0f-9d98-917a1350c8e1" width="200"/>
      <br>
      <strong>Home Page (Mobile)</strong><br>
      Main navigation and user profile
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/f3282c1e-ad78-4dae-96a4-984a437f1ff6" width="200"/>
      <br>
      <strong>Admin Page (Mobile)</strong><br>
      User data management
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/dee055f5-c8b9-4558-b687-20bf273123fa" width="200"/>
      <br>
      <strong>Edit Profile (Mobile)</strong><br>
      Profile information editing
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/53c41c55-3e9d-449d-9487-db8354312a73" width="200"/>
      <br>
      <strong>Summary with Map (Mobile)</strong><br>
      User data visualization
    </td>
  </tr>
</table>





## 🖥️ Desktop UI

<table>
  <tr>
    <td align="center" width="25%">
      <img src="https://github.com/user-attachments/assets/4b4749d8-6f61-4b49-bec9-b19e6d57c51b" alt="Home Page Desktop" style="width: 100%; max-width: 300px;">
      <p><strong>Home Page (Desktop)</strong><br>Responsive layout for larger screens</p>
    </td>
    <td align="center" width="25%">
      <img src="https://github.com/user-attachments/assets/1c4029f6-169c-4711-a44b-45df0a4e5d3c" alt="Admin Page Desktop" style="width: 100%; max-width: 300px;">
      <p><strong>Admin Page (Desktop)</strong><br>Comprehensive admin controls</p>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center" width="25%">
      <img src="https://github.com/user-attachments/assets/163a9c56-fe97-4ac5-af84-f634b655ed1b" alt="Edit Profile Desktop" style="width: 100%; max-width: 300px;">
      <p><strong>Edit Profile (Desktop)</strong><br>Clean profile editing interface</p>
    </td>
    <td align="center" width="25%">
      <img src="https://github.com/user-attachments/assets/82833de3-8b6c-4d58-af84-c3910c0d5110" alt="Summary with Map Desktop" style="width: 100%; max-width: 300px;">
      <p><strong>Summary with Map (Desktop)</strong><br>Data visualization with map integration</p>
    </td>
  </tr>
</table>
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
