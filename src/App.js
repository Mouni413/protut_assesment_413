import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import HeroSectionOne from "./components/HeroSectionOne";
import HeroSectionTwo from "./components/HeroSectionTwo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <HeroSectionOne />
      <HeroSectionTwo />
      <Footer />
    </div>
  );
}

export default App;
