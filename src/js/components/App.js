import "../../scss/main.scss"
import Header from "./Header";
import Content from "./Content";
import {HashRouter, Route, Switch,} from 'react-router-dom';
import Login from "./Login";

function App() {
    return (
      <HashRouter>
        <div className="container">
          <Header/>
          <Switch>
              <Route exact path='/' component={Content} />
              <Route path='/login' component={Login} />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
