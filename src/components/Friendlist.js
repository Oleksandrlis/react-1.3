import React from "react";
import FriendListItem from "./FriendListItem"
import styles from "./Friend.module.css"

const FriendList = ({friends}) => {
    console.log(friends);

    return (
        <ul className={styles.friendlist}>
      {friends.map(object => (<FriendListItem key = {object.id}  object = {object}/>
      ))}
      </ul>   
    );
      };

export default FriendList;
