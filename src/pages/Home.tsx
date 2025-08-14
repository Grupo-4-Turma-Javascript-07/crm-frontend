import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogoutClick() {
    handleLogout();
    navigate("/login");
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Home</h1>
      <button
        onClick={handleLogoutClick}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;