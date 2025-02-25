'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Swal from "sweetalert2";

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const query = `*[_type == "user" && email == $email && password == $password][0]`;
      const user = await client.fetch(query, { email: form.email, password: form.password });

      if (!user) {
        setError("Invalid email or password.");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ name: user.name, email: user.email })); // Store session
      
      Swal.fire({
        title: "Welcome!",
        text: "Login successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/profile"); // Redirect to dashboard
      });

    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don&apos;t have an account? <a href="/signUp" className="text-blue-500 hover:underline-offset-2 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
