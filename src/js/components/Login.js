import React from 'react';
import LoginForm from "./elements/LoginForm";
import {useSelector} from "react-redux";

import LoginInfo from "./elements/LoginInfo";

const Login = () => {

    const isLogged = useSelector(state => state.log);
    const isDemo = useSelector(state => state.demo);

    return (
        <div className="login">
            {(isLogged || isDemo) && <LoginInfo isDemo={isDemo}/>}
            {(!isLogged && !isDemo) && <LoginForm/>}
        </div>
    );
}

export default Login;