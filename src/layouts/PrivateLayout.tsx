import { ReactNode } from "react";
import Head from "next/head";
import usePrivateRoute from "src/hooks/usePrivateRoute";
import Header from "./Header";
import styles from "./Layout.module.scss";

interface PrivateLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export default function PrivateLayout({
  children,
  pageTitle,
}: PrivateLayoutProps) {
  const _ = usePrivateRoute();

  return (
    <>
      <Head>
        <title>Pilot {pageTitle && `| ${pageTitle}`}</title>
        <meta name="description" content="Pilot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <hr />
        <main>{children}</main>
      </div>
    </>
  );
}
