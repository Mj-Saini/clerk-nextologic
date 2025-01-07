import "./App.css";
import UserLogin from "./routes/main-routes/UserLogin";
import AdminDashboard from "./routes/admin-routes/AdminDashboard";

function App() {
  return (
    <>
      <UserLogin />
      <AdminDashboard />
    </>
  );
}

export default App;
