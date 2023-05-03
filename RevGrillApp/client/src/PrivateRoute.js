import React from 'react';
import {Route,Navigate,Outlet} from 'react-router-dom';
import { useAuth2 } from './pages/Log_In/auth_context';
import { Manager_Inventory } from "./pages/Manager_Side/Manager_Inventory";


export default function PrivateRoute({ component: Component, ...rest}) {
    const {currentUser} = useAuth2();
    return currentUser ? <Outlet/> :<Navigate to = "/login"/>;
}