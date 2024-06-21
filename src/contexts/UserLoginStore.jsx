import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);
  let [userLoginStatus,setUserLoginStatus]=useState(false)

  //user login
  async function loginUser(userCred) {
    let res = await fetch(
      `https://user-api-k4of.onrender.com/users?username=${userCred.username}&password=${userCred.password}`
    );
    let usersList = await res.json();
    console.log("users list",usersList)
    if (usersList.length === 0) {
      //invalid credentials
      console.log("invalid user")
      setCurrentUser(null)
      setUserLoginStatus(false)
    } else {
      setCurrentUser(usersList[0]);
      setUserLoginStatus(true)
    }
  }

  //user logout
  function logoutUser(){
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false);
  }

  return (
    <userLoginContext.Provider value={{ loginUser,logoutUser,userLoginStatus }}>
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;