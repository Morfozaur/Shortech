import "../../scss/main.scss"
import Header from "./Header";
import Content from "./Content";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from "./Login";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase";
import {fetchLog} from "../redux/actions/allFetchers";

function App() {
    const [endIndicator, setEndIndicator] = useState(false);
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.log);
    const isDemo = useSelector(state => state.demo);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {dispatch(fetchLog(true));}
        else {dispatch(fetchLog(false));}
    });


    return (
      <HashRouter>
        <div className="container">
          <Header setEndIndicator={setEndIndicator}/>
          <Switch>
              <Route exact path='/'>
                  <Content endIndicator={endIndicator}
                           setEndIndicator={setEndIndicator}
                           isLogged={isLogged} isDemo={isDemo}/>
              </Route>
              <Route path='/login' component={Login}/>
          </Switch>
        </div>
      </HashRouter>
  );





}

export default App;
