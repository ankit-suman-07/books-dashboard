import { useContext } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/top-bar/TopBar";
import Pagination from "./components/pagination/Pagination";
import Footer from "./components/footer/Footer";

import "./App.css";

import { BookContext } from "./context/booksContext";


function App() {
  const { user } = useContext(BookContext);

  return (
    <>
      {
        user
          ? (
            <div className="App">
              <Navbar />
              <TopBar />
              <Dashboard />
              <Pagination />
              <Footer />
            </div>
          )
          : <div>Log In</div>
      }

    </>
  );
}

export default App;
