import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
