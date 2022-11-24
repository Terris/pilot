import { useRouter } from "next/router";
import PrivateLayout from "src/layouts/PrivateLayout";
import { useAuth } from "src/context/AuthContext";

function DashboardPage() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <PrivateLayout pageTitle="Dashboard">
      <h2>Dashboard</h2>
    </PrivateLayout>
  );
}

export default DashboardPage;
