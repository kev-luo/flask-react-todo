import "./App.css";
import TodoPage from "./Pages/TodoPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <TodoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
