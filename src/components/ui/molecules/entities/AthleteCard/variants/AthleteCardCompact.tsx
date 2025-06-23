import React from "react";
import { AthleteCardCompactProps } from "./AthleteCardCompact.types";
import styles from "../themes/AthleteCardCompact.module.css";

const AthleteCardCompact: React.FC<AthleteCardCompactProps> = ({
  name,
  avatarUrl,
  rank,
  highlight,
  onClick,
}) => (
  <div
    className={`${styles.cardCompact} ${highlight ? styles.highlight : ""}`}
    onClick={onClick}
    tabIndex={0}
  >
    <img className={styles.avatar} src={avatarUrl} alt={name} />
    <div className={styles.info}>
      <span className={styles.name}>{name}</span>
      {rank && <span className={styles.rank}>{rank}</span>}
    </div>
  </div>
);

export default AthleteCardCompact;
