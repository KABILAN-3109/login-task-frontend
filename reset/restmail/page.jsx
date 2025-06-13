"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function RESET_PASSWORD() {
  const router=useRouter();
  const [email, setEmail] = useState("");
  
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  
  const click = () =>{
    if (!isValidEmail(email)) {
      toast.error('Invalid email format');
      return;
    }
    toast.success('OTP sent to your Registed Email');
    router.push('/reset/restmail/otp');
    }
  return(
    <div className="flex md:flex-row min-h-screen">
    <Toaster /> 
      <div className="md:w-3/4 bg-secondary p-10 flex flex-col"> 
        <h1 className="my-6 text-3xl text-primary">Workcohol</h1>  
        <p className="text-lg  justify-center items-center p-2 m-4">
          Our AI services leverage advanced technologies to drive innovation and efficiency 
          across various industries. From machine learning and natural language processing to computer 
          vision and robotic process automation, we provide tailored solutions that enhance decision-making, 
          automate repetitive tasks, and improve customer engagement. Our expertise includes predictive analytics, 
          AI-powered marketing, cybersecurity enhancements, and more — empowering businesses to harness the full 
          potential of artificial intelligence for sustainable growth and competitive advantage.</p>
      </div>
      <div className="md:w-2/4 w-full bg-white flex justify-center items-center p-6">
        <div className="w-3/4 max-w-md p-8 rounded-xl ">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">Reset Password</h2>
          <input type="email" name="email" placeholder="Enter Your Email" value={email}required className="w-full p-2 border-2 rounded mb-3 focus:border-primary focus:outline-none" 
          onChange={(e) => setEmail(e.target.value)}></input>
          <button type="button" className="mt-2 text-sm text-primary hover:underline" onClick={click}>Reset password</button>
      </div>
    </div>
    </div>
  );
}