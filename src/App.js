import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import AllCourses from "./Pages/AllCourses";
import Courses from "./Pages/Courses";
import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/courses/:id">
            <Courses />
          </Route>
          <Route exact path="/AllCourses">
            <AllCourses />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
