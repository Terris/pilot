import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const title = ["Pilot", pageTitle ? ` - ${pageTitle}` : ""].join("");
  return (
    <>
      <Head>
        <title>{title}</title>
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
