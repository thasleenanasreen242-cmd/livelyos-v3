"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setError("Account not found. Please signup first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email === email &&
      user.password === password
    ) {

      localStorage.setItem(
        "loggedIn",
        "true"
      );

      router.push("/dashboard");

    } else {

      setError("Invalid email or password");

    }

  }


  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-[#2D2D2D] bg-[#171717] p-8">


        <h1 className="text-3xl font-bold text-center text-[#D4AF37]">
          Welcome Back
        </h1>


        <p className="text-center text-gray-400 mt-3">
          Login to your LivelyOS account
        </p>


        {error && (
          <p className="mt-5 text-red-400 text-center">
            {error}
          </p>
        )}


        <form 
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 focus:border-[#D4AF37] outline-none"
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 focus:border-[#D4AF37] outline-none"
          />


          <button
            type="submit"
            className="w-full rounded-xl bg-[#D4AF37] py-3 text-black font-bold hover:opacity-90"
          >
            Login
          </button>


        </form>


        <p className="text-center text-gray-400 mt-6">

          Don't have an account?

          <Link 
            href="/signup"
            className="text-[#D4AF37] ml-2"
          >
            Sign up
          </Link>

        </p>


      </div>

    </main>
  );
}