import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Landing from "./Landing";

export default function ProtectedRoute({ children }) {
  // const{user} = useAppContext()
  // const MyProtectedComponent = withAuthenticationRequired(children);
  // return MyProtectedComponent;
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  let result;

  isAuthenticated ? (result = children) : (result = <Landing />);
  return result;
}
