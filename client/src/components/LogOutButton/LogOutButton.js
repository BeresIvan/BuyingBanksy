import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    //await axios.get("http://localhost:3000/logout");
     await axios.get(
       "https://buying-banksy.herokuapp.com//logout"
     );
    await getLoggedIn();
    history.push("/Home");
  }

  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;
