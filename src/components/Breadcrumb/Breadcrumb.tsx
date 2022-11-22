import { ReactNode } from "react";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  children: ReactNode;
}

function Breadcrumb({ children }: BreadcrumbProps) {
  return <div className={styles.breadcrumb}>{children}</div>;
}

export default Breadcrumb;
