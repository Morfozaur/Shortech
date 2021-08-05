import "../../scss/main.scss"
import Header from "./Header";
import Content from "./Content";
import {HashRouter, Route, Switch,} from 'react-router-dom';
import Login from "./Login";
import {useState} from "react";

function App() {
    const [endIndicator, setEndIndicator] = useState(false)

    return (
      <HashRouter>
        <div className="container">
          <Header setEndIndicator={setEndIndicator}/>
          <Switch>
              <Route exact path='/'>
                  <Content endIndicator={endIndicator}
                           setEndIndicator={setEndIndicator}/>
              </Route>
              <Route path='/login' component={Login} />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
