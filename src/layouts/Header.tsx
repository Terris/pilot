import Link from "next/link";
import { useAuth } from "src/context/AuthContext";
import styles from "./Header.module.scss";

export default function Header() {
  const { currentUser, signOut } = useAuth();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">Pilot</Link>
      </h1>
      <nav className={styles.nav}>
        {currentUser ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/products">Products</Link>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <Link href="/signup">Sign Up</Link>
            <Link href="/signin">Sign In</Link>
          </>
        )}
      </nav>
    </header>
  );
}
