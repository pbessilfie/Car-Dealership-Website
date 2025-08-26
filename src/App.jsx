import { Outlet } from "react-router";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import CarSearchProvider from "./context/car-search-context";

function App() {
  return (
    <CarSearchProvider>
      <main className=" font-lato overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </CarSearchProvider>
  );
}

export default App;
