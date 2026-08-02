"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");


  function handleSignup(e: React.FormEvent) {

    e.preventDefault();


    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }


    const user = {
      name,
      email,
      password
    };


    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );


    setMessage("Account created successfully");


    setTimeout(()=>{

      router.push("/login");

    },1000);


  }


  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">


      <div className="w-full max-w-md rounded-3xl border border-[#2D2D2D] bg-[#171717] p-8">


        <h1 className="text-3xl font-bold text-center text-[#D4AF37]">
          Create Account
        </h1>


        <p className="text-center text-gray-400 mt-3">
          Start your LivelyOS journey
        </p>


        {message && (

          <p className="text-center text-green-400 mt-5">
            {message}
          </p>

        )}



        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-5"
        >


          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none focus:border-[#D4AF37]"
          />


          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none focus:border-[#D4AF37]"
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none focus:border-[#D4AF37]"
          />



          <button
            type="submit"
            className="w-full rounded-xl bg-[#D4AF37] py-3 text-black font-bold"
          >
            Create Account
          </button>


        </form>



        <p className="text-center text-gray-400 mt-6">

          Already have an account?

          <Link
            href="/login"
            className="text-[#D4AF37] ml-2"
          >
            Login
          </Link>

        </p>


      </div>


    </main>

  );
}