import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  link?: boolean;
}
function Card({ children, link, style }: CardProps) {
  return (
    <div
      className={`${styles.card} ${link ? styles["card-link"] : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
