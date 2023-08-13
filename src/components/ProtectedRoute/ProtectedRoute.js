import React from "react";
import { Navigate } from "react-router-dom";
import {Marking} from "../Marking/Marking";

export const ProtectedRoute = ({ element: Component, ...props }) => {
  return (
    props.loggedIn
  ?<Marking loggedIn={props.loggedIn}>
    <Component {...props}/>
    </Marking>
    
    :<Navigate to='/' replace/>
  )}