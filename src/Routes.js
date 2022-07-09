import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/RegisterPage/registerPage";
import ProfilePage from "./pages/ProfilePage/profilePage";
import EditProfilePage from "./pages/EditProfilePage/editProfilePage";
import BrowseEventsPage from "./pages/BrowseEventsPage/browseEventsPage";
import CommunityPage from "./pages/CommunityPage/communityPage";
import FriendsPage from "./pages/FriendsPage/friendsPage";
import HistoryPage from "./pages/HistoryPage/historyPage";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/browse" element={<BrowseEventsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
