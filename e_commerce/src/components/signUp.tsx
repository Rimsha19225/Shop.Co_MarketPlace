"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    password: '',
    confirmPassword: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    wallet: '',
  });
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'password') {
      checkPasswordStrength(e.target.value);
    }
  };

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) {
      setPasswordStrength('Weak (Use at least 6 characters)');
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setPasswordStrength('Medium (Add uppercase letters and numbers)');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const validateStep = () => {
    let requiredFields: (keyof typeof form)[] = [];

    if (step === 1) requiredFields = ["name", "dob", "gender"];
    if (step === 2) requiredFields = ["email", "phone"];
    if (step === 3) requiredFields = ["address", "city", "state", "zip", "country"];
    if (step === 4) requiredFields = ["password", "confirmPassword"];

    const missingFields = requiredFields.filter((field) => !form[field]);

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return false;
    }

    if (step === 4 && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    setError("");
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      // Check if user already exists
      const query = `*[_type == "user" && email == $email][0]`;
      const existingUser = await client.fetch(query, { email: form.email });

      if (existingUser) {
        setError("Email is already registered. Please log in.");
        return;
      }

      // If user does not exist, create a new one
      await client.create({
        _type: "user",
        name: form.name,
        dob: form.dob,
        gender: form.gender,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        zip: form.zip,
        country: form.country,
        password: form.password, // Ideally, hash this before saving
      });

      Swal.fire({
        title: "Success!",
        text: "Your account has been created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/login");
      });
    } catch (error) {
      console.error("Error saving user data:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue creating your account. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 mt-16 mb-32">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === 'Male'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === 'Female'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={form.gender === 'Other'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Other
                </label>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}
          {step === 3 && (
            <>
              <input
                type="text"
                name="address"
                placeholder="Residential Address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="state"
                placeholder="State/Province"
                value={form.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP/Postal Code"
                value={form.zip}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}
          {step === 4 && (
            <>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {passwordStrength && <p className="text-sm text-red-500">{passwordStrength}</p>}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}
          {step === 5 && (
            <>
              <h3 className="text-lg font-semibold">Payment Information (Optional)</h3>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={form.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date (MM/YY)"
                value={form.expiryDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={form.cvv}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="upiId"
                placeholder="UPI ID (if applicable)"
                value={form.upiId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="wallet"
                placeholder="Wallet (e.g., easypaisa, jazzCash)"
                value={form.wallet}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
                Sign Up
              </button>
            </>
          )}
        </form>
        {step < 5 && (
          <button onClick={handleNext} className="w-full bg-black text-white p-2 mt-4 rounded hover:bg-gray-800">
            Next
          </button>
        )}
      </div>
    </div>
  );
}
