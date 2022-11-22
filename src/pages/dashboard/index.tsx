import { useRouter } from "next/router";
import Layout from "src/layouts/Layout";
import { useAuth } from "src/context/AuthContext";

function DashboardPage() {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <h2>Welcome, {currentUser?.name}!</h2>
    </Layout>
  );
}

export default DashboardPage;
