import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Addnewflights from "./pages/Addnewflights";
import Orderfuel from "./pages/Orderfuel";
import Vieworders from "./pages/Vieworders";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login}/>
          <Route path="/adminlogin" exact component={AdminLogin}/>
          <Route path="/Signup" exact component={SignUp}/>
          <Route path="/Addnewflights" exact component={Addnewflights}/>
          <Route path="/Orderfuel" exact component={Orderfuel}/>
          <Route path="/Vieworders" exact component={Vieworders}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;