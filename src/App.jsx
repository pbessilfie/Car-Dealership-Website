import { Outlet } from "react-router";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

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
