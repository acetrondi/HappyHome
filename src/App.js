import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import { GridLoader } from "react-spinners";
import { css } from "@emotion/react";


const override = css``;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="animation-box">
          <GridLoader
            loading={loading}
            size={30}
            color="#07a5e2"
            css={override}
          />
        </div>
      ) : (
        <div className="main">
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
