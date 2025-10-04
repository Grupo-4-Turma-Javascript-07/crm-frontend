import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navinicio"; // navbar pública
import Footer from "../footer/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
