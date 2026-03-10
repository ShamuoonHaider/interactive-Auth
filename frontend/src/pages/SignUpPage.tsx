import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";
import { registerUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await registerUser(username, email, password);
      setUser(data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-5 flex  justify-between">
        <h1 className="font-bold text-xl">Sign up page</h1>
        <Link to="/">
          <Button>
            Home <ArrowRight />
          </Button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <div className="mx-5  flex-col gap-4 flex items-center justify-center">
          <h2 className="text-2xl font-bold mb-5">Create an account</h2>

          {error && <p className="text-red-500 font-medium">{error}</p>}

          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-2 border-zinc-400 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-zinc-400 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-zinc-400 px-2 py-1"
            />
          </div>
          <button
            className="flex gap-2 justify-center items-center bg-indigo-200 mb-10 text-zinc-600 font-bold px-4 py-2 border-2 border-black  rounded-none transition-all duration-200 hover:shadow-[-4px_4px_0px_0px_rgba(240,65,12,1),-8px_8px_0px_0px_rgba(0,128,0,1)] hover:translate-x-2 hover:-translate-y-2 cursor-pointer max-w-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
