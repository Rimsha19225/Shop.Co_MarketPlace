"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    profilePic?: {
      asset: {
        url: string;
      };
    };
    gender: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    upiId: string;
    wallet: string;
  } | null>(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editFields, setEditFields] = useState<{
    name: string;
    email: string;
    address: string;
    phone: string;
  }>({ name: "", email: "", address: "", phone: "" });

  const [passwordFields, setPasswordFields] = useState<{
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>({ currentPassword: "", newPassword: "", confirmPassword: "" });

  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);

    const fetchUserData = async (email: string) => {
      try {
        const query = `*[_type == "user" && email == $email][0]`;
        const params = { email };
        const userData = await client.fetch(query, params);
        if (userData) {
          setUser(userData);
          setEditFields({
            name: userData.name,
            email: userData.email,
            address: userData.address,
            phone: userData.phone,
          });
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/login");
      }
    };

    fetchUserData(parsedUser.email);
  } else {
    router.push("/login");
  }
}, [router]);


  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove session
    router.push("/login");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTakePicture = () => {
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();
      setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d")?.drawImage(video, 0, 0);
        setSelectedImage(canvas.toDataURL("image/png"));
        stream.getTracks().forEach((track) => track.stop());
      }, 1000);
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditFields({ ...editFields, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordFields({ ...passwordFields, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    setUser((prev) => (prev ? { ...prev, ...editFields } : prev));
  };

  const handlePasswordUpdate = () => {
    if (passwordFields.newPassword !== passwordFields.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    console.log("Password updated successfully");
  };

  if (!user) {
    return (
      <p className="text-center mt-32 text-gray-500">Redirecting to login...</p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-2 md:p-4 pb-32 md:pb-60">
      <div className="bg-white shadow-lg rounded-lg p-2 md:p-6 w-full max-w-[55rem]">
        {/* Navigation */}
        <div className="flex gap-2 md:gap-0 justify-between md:px-6 border-b pb-3">
          <button
            className={`pb-1 ${activeSection === "dashboard" ? "text-gray-700 font-semibold text-[0.8rem] md:text-[1rem] border-b-1 md:border-b-2 border-gray-700" : "text-gray-500 hover:text-gray-700 text-[0.8rem] md:text-[1rem]"}`}
            onClick={() => setActiveSection("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`pb-1 ${activeSection === "edit-profile" ? "text-gray-700 font-semibold text-[0.8rem] md:text-[1rem] border-b-1 md:border-b-2 border-gray-700" : "text-gray-500 hover:text-gray-700 text-[0.8rem] md:text-[1rem]"}`}
            onClick={() => setActiveSection("edit-profile")}
          >
            Edit Profile
          </button>
          <button
            className={`pb-1 ${activeSection === "edit-password" ? "text-gray-700 font-semibold text-[0.8rem] md:text-[1rem] border-b-1 md:border-b-2 border-gray-700" : "text-gray-500 hover:text-gray-700 text-[0.8rem] md:text-[1rem]"}`}
            onClick={() => setActiveSection("edit-password")}
          >
            Edit Password
          </button>
          <button
            className="text-gray-500 hover:text-red-700 text-[0.8rem] md:text-[1rem] mb-1 md:mb-0"
            onClick={handleLogout}
          >
            User Logout
          </button>
        </div>
        {activeSection === "dashboard" && (
          <div>
            {selectedImage || user.profilePic ? (
              <Image
              src={selectedImage || user.profilePic?.asset.url || "/fallback.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mt-4"
                width={96}
                height={96}
              />
            ) : null}
            <h2 className="text-center mt-4">@ {user.name}</h2>
            <h2 className="text-center">✍ {user.email}</h2>
            <div className="flex space-x-2  m-auto justify-center items-center mt-4">
              <button
                onClick={handleTakePicture}
                className="card px-4 py-2 bg-black text-white rounded"
              >
                Take Picture
              </button>
              <label className="card px-4 py-2 bg-gray-300 text-black rounded cursor-pointer">
                Upload Files
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </label>
            </div>

            <div className="text-[1rem] text-gray-600 mb-4 leading-7">
              <h2 className="text-[1.5rem] text-black font-semibold mb-1 mt-4">
                Personal Information:
              </h2>
              <p>Name: {user.name}</p>
              <p>Date Of Birth: {user.dob}</p>
              <p>Gender: {user.gender}</p>
            </div>
            <hr />
            <div className="text-[1rem] text-gray-600 mb-4 leading-7">
              <h2 className="text-[1.5rem] text-black font-semibold mb-1 mt-4">
                Contact Information:
              </h2>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phone}</p>
            </div>
            <hr />
            <div className="text-[1rem] text-gray-600 mb-4 leading-7">
              <h2 className="text-[1.5rem] text-black font-semibold mb-1 mt-4">
                Address Information:
              </h2>
              <p>Residential Address: {user.address}</p>
              <p>City: {user.city}</p>
              <p>State/Province: {user.state}</p>
              <p>ZIP/Postal Code: {user.zip}</p>
              <p>Country: {user.country}</p>
            </div>
            <hr />
            <div className="text-[1rem] text-gray-600 mb-4 leading-7">
              <h2 className="text-[1.5rem] text-black font-semibold mb-1 mt-4">
                Payment Information:
              </h2>
              <p>Credit/Debit Card Number: {user.cardNumber}</p>
              <p>Card Experience Date: {user.expiryDate}</p>
              <p>CVV: {user.cvv}</p>
              <p>UPI ID: {user.upiId}</p>
              <p>Wallet Information: {user.wallet}</p>
            </div>
          </div>
        )}

        {activeSection === "edit-profile" && (
          <div className="">
            <div className="flex flex-col items-center mt-4">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border"
                  width={96}
                  height={96}
                />
              ) : (
                user.profilePic && (
                  <Image
                    src={user.profilePic.asset.url}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border"
                    width={96}
                    height={96}
                  />
                )
              )}
              <h2>@ {user.name}</h2>
              <h2>✍ {user.email}</h2>
              <div className="flex flex-col mt-10 justify-between w-[100%] md:w-[40rem]">
                <div className="">
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="name"
                      value={editFields.name}
                      onChange={handleEditChange}
                      placeholder="Edit Name"
                      className="w-[15rem] px-2 py-1 mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="email"
                      name="email"
                      value={editFields.email}
                      onChange={handleEditChange}
                      placeholder="Edit Email"
                      className="w-[15rem] px-2 py-1 mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="address"
                      value={editFields.address}
                      onChange={handleEditChange}
                      placeholder="Edit Address"
                      className="px-2 py-1 rounded w-[35rem] mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="phone"
                      value={editFields.phone}
                      onChange={handleEditChange}
                      placeholder="Edit Phone"
                      className="px-2 py-1 rounded w-[15rem] mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                </div>
                <button
                  onClick={handleSaveChanges}
                  className="rounded-2xl py-3 bg-black text-white mt-4"
                >
                  Save Changes
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                You can change your profile Information
              </p>
            </div>
          </div>
        )}

        {activeSection === "edit-password" && (
          <div>
            <div className="flex flex-col items-center mt-4">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border"
                  width={96}
                  height={96}
                />
              ) : (
                user.profilePic && (
                  <Image
                    src={user.profilePic.asset.url}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border"
                    width={96}
                    height={96}
                  />
                )
              )}
              <h2>@ {user.name}</h2>
              <h2>✍ {user.email}</h2>
              <div className="flex flex-col items-center mt-10">
                <div className="w-[100%] md:w-[30rem]">
                  <div className="flex justify-between">
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordFields.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Current Password"
                      className="px-2 py-1 rounded w-[15rem] mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordFields.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="New Password"
                      className="px-2 py-1 rounded w-[15rem] mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordFields.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm New Password"
                      className="px-2 py-1 rounded w-[15rem] mt-1"
                    />
                    <p className="cursor-pointer">🖊</p>
                  </div>
                </div>
                <button
                  onClick={handlePasswordUpdate}
                  className="rounded-2xl py-3 bg-black text-white mt-4 w-[100%]"
                >
                  Update Password
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                You can change your password
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
