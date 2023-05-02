import React from 'react';
import {Route,redirect} from 'react-router-dom';
import { useAuth2 } from './pages/Log_In/auth_context';

export default function PrivateRoute({ component: Component, ...rest}) {
    const {currentUser} = useAuth2();
    return (
        <Route 
            {...rest}
            render = {props =>{
                return currentUser ? <Component {...props} /> : <redirect to = "/login" />
            }}
           
        >

        </Route>
    )
}