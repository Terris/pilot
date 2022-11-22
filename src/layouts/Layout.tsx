import Head from "next/head";
import Link from "next/link";
import { useAuth } from "src/context/AuthContext";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const { currentUser, signOut } = useAuth();
  return (
    <>
      <Head>
        <title>Pilot {pageTitle && `| ${pageTitle}`}</title>
        <meta name="description" content="Pilot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
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
        <hr />
        <main>{children}</main>
      </div>
    </>
  );
}
