"use client"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "react-phone-input-2/lib/style.css";

export default function Register_Page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) =>
    password.length >= 8;
 

  const handleRegister = () => {
    if (!isValidEmail(email)) {
      toast.error('Invalid email format');
      return;
    }
    if (!isValidPassword(password)) {
      toast.error('Password must be at least 8 characters');
      return;
    }
       
    toast.success('Registration valid! Redirecting to OTP…');
    router.push(`/otp`);
  };

  return (
    <div className="flex md:flex-row min-h-screen">
      <Toaster />     
      <div className="md:w-3/4 bg-secondary text-black p-10 flex flex-col"> 
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
        <div className="w-3/4 max-w-md p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Register</h2>
          <div className="flex flex-col gap-4 text-black">

            <input type="text" name="name"  placeholder="Name" value={name} className="w-full p-3 border-2 rounded focus:border-primary focus:outline-none"
              onChange={(e) => setName(e.target.value)}></input>

            <input type="email"name="email"placeholder="Email"value={email}className="w-full p-3 border-2 rounded focus:border-primary focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}></input>
            
            <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password"placeholder="Password"value={password}className="w-full p-3 border-2 rounded focus:border-primary focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}></input>
              <button type="button" onClick={() => setShowPassword((p) => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-primary">
               {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} 
              </button>
            </div>
            
            <PhoneInput country="in" value={phone} onChange={(val) => setPhone(val)} placeholder="Mobile Number"
             
            containerClass="!w-full" inputClass="!w-full !h-12 !bg-secondary !border-2 !border-black !rounded   "buttonClass="!border-2 !bg-secondary !border-black !rounded-l"></PhoneInput>

            <button onClick={handleRegister}
              className="w-full text-white font-semibold py-2 rounded bg-primary">
              Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
