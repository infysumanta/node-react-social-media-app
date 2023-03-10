import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ChatPage from "./pages/ChatPage/ChatPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/ProfilePage/MenuContain/PostPage/PostPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/:username" element={<ProfilePage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/chats/:user_id" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/posts/:post_id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
