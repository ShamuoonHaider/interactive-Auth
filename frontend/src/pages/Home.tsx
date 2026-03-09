import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <section className="my-20 flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-10">Welcome Home</h1>
      <Link to="/login">
        <Button>Sign In</Button>
      </Link>
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </section>
  );
};

export default Home;
