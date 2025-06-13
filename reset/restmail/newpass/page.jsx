"use client";

import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SET_NEW_PASSWORD() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("OTP sucessfull");
    router.push(`/login`);
  };

  return (
    <div className="flex md:flex-row min-h-screen">
      <Toaster />
      <div className="md:w-3/4 bg-secondary p-10 flex flex-col">
        <h1 className="my-6 text-3xl text-primary">workcohol</h1>
        <p className="text-lg justify-center items-center p-2 m-4">
          Our AI services leverage advanced technologies to drive innovation and efficiency across
          various industries. From machine learning and natural language processing to computer vision
          and robotic process automation, we provide tailored solutions that enhance decision-making,
          automate repetitive tasks, and improve customer engagement .Our expertise includes predictive analytics, 
          AI-powered marketing, cybersecurity enhancements, and more — empowering businesses to harness the full 
          potential of artificial intelligence for sustainable growth and competitive advantage.
        </p>
      </div>

      <div className="md:w-2/4 w-full bg-white flex justify-center items-center p-6">
        <div className="w-3/4 max-w-md p-8 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-center text-primary">Set New Password</h2>       
          <div className="relative mb-4">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="New Password" value={password}
              className="w-full p-3 border-2 rounded focus:border-primary focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="button" onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-primary">
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

         
          <div className="relative mb-4">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={confirmPassword}
              className="w-full p-3 border-2 rounded focus:border-primary focus:outline-none"
              onChange={(e) => setConfirmPassword(e.target.value)}>
            </input>
            <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-primary">
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          
          <button onClick={handleSubmit}className="w-full bg-primary text-white font-semibold py-2 rounded hover:opacity-90 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
