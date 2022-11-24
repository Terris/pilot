import { useRouter } from "next/router";
import Layout from "src/layouts/Layout";
import { useAuth } from "src/context/AuthContext";

function DashboardPage() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Layout>
      <h2>Dashboard</h2>
    </Layout>
  );
}

export default DashboardPage;
