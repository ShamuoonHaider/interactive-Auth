import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  username: z.string().min(3, "Username too short"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginForm = z.infer<typeof LoginSchema>;

const LoginPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await loginUser(data.username, data.password);
      setUser(response.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-5 flex  justify-between">
        <h1 className="font-bold text-xl">Login page</h1>
        <Link to="/">
          <Button>
            Home <ArrowRight />
          </Button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center"
      >
        <div className="mx-5  flex-col gap-4 flex items-center justify-center">
          <h2 className="text-2xl font-bold mb-5">Login to your account</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              {...register("username")}
              required
              className="border-2 border-zinc-400 px-2 py-1"
            />
            {errors.username && <p>{errors.username.message}</p>}
            {error && <p>{error}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              required
              className="border-2 border-zinc-400 px-2 py-1"
            />
          </div>
          <button
            className="flex gap-2 justify-center items-center bg-indigo-200 mb-10 text-zinc-600 font-bold px-4 py-2 border-2 border-black  rounded-none transition-all duration-200 hover:shadow-[-4px_4px_0px_0px_rgba(240,65,12,1),-8px_8px_0px_0px_rgba(0,128,0,1)] hover:translate-x-2 hover:-translate-y-2 cursor-pointer max-w-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
