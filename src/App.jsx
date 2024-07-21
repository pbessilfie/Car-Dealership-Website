import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <main
      className=" font-lato
    "
    >
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
