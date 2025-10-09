import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoadingSpinner from "./Components/LoadingSpinner";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
    <div className=" flex flex-col min-h-screen" >
      <Navbar />
      {loading && <LoadingSpinner />}
      
      {!loading && <div className="flex-1"><Outlet /></div>}
        <div className="mt-auto ">
    <Footer />
  </div>
      <ToastContainer />
      </div>
    </>
  );
}

export default App;
