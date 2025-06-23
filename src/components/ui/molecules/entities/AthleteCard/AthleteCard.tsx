import React from "react";
import { AthleteCardProps } from "./AthleteCard.types";
import styles from "./themes/AthleteCard.module.css";

const AthleteCard: React.FC<AthleteCardProps> = ({
  id, name, avatarUrl, club, rank, medals, stats, isActive, onClick
}) => (
  <div className={`${styles.card} ${isActive ? styles.active : ""}`} onClick={onClick} tabIndex={0}>
    <img className={styles.avatar} src={avatarUrl} alt={name} />
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      {club && <div className={styles.club}>{club}</div>}
      {rank && <div className={styles.rank}>{rank}</div>}
      {medals && (
        <div className={styles.medals}>
          🥇{medals.gold} 🥈{medals.silver} 🥉{medals.bronze}
        </div>
      )}
      {stats && (
        <ul className={styles.stats}>
          {Object.entries(stats).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default AthleteCard;
