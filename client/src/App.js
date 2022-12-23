import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ChatPage from "./pages/ChatPage/ChatPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/:username" element={<ProfilePage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </>
  );
}

export default App;
