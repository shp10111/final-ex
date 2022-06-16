import {Component, AppRouter} from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";


function AppRouter(props){
    return(
        <div>안녕하세요 {props.name}</div>    
   )
}
       


export default AppRouter;