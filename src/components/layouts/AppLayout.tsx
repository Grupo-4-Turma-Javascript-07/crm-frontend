import { Outlet } from "react-router-dom";
import AppNavbar from "../navbar/Navbar";
import FooterSistema from "../footer/FooterSistema";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNavbar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <FooterSistema />
    </div>
  );
}

