import React from "react";
import styles from "./Friend.module.css"

const FriendListItem = ({ object }) => {
  console.log(object);

  return (
    <li className={styles.item}>
      <span className={styles.status}>{object.isOnline} </span>
      <img className={styles.avatar} src={object.avatar} alt="" width="48" />
      <p className={styles.name}> {object.name}</p>
    </li>
  );
};

export default FriendListItem;
