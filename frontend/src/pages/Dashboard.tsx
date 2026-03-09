import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="mx-5 mb-5">
        <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
