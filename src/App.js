import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/top-bar/TopBar";
import Pagination from "./components/pagination/Pagination";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBar />
      <Dashboard />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
