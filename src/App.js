import './App.css';
import Navbar from "./navbar";
import Hero from "./hero";
import Analytics from "./analytics";
import Newsletter from "./newsletter";
import Cards from "./cards";
import Footer from "./footer";

function App() {
    return (
        <div className="App overflow-hidden scroll-smooth">
            <Navbar/>
            <Hero/>
            <Analytics/>
            <Newsletter/>
            <Cards/>
            <Footer/>
        </div>
    );
}
export default App;
