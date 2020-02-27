import React from "react";
import FriendList from "./Friendlist"
import friends from "../friends.json"



const App = () => {
  return (
    <FriendList friends = {friends}/>
  )

  };

export default App;






