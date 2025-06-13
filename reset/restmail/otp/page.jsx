"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import OtpInput from 'react-otp-input';

export default function NEW_PASSWORD_OTP_PAGE() {
  const router = useRouter(); 
  const [otp, setOtp] = useState('');
  

  const isvalidotp = (otp) => otp ==='1234';
  const handleclick = () => {
    if (!isvalidotp(otp)) {
      toast.error('Invalid OTP');
      return;
    }
    toast.success('OTP is valid');
    router.push(`/reset/restmail/newpass`);
  };
    const ResendOTP = () => {   
    toast.success('OTP resent successfully');
  };

  
  return (
    <div className="flex md:flex-row min-h-screen">
      <Toaster />
      <div className="md:w-3/4 bg-secondary p-10 flex flex-col"> 
         <h1 className="my-6 text-3xl text-primary">workcohol</h1>  
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
          <h2 className="text-xl font-bold mb-4  text-center text-primary">Verify Your OTP</h2>
          <OtpInput value={otp} onChange={setOtp} numInputs={4} inputType="tel" renderInput={(props, idx) => (
            <input {...props} className="w-10 h-10 text-center text-xl border-2 border-gray-400 rounded focus:border-primary focus:outline-none" style={{ margin: '0 12px' }}>
            </input>)}></OtpInput>
          <button className="w-full text-sm text-white rounded p-2 mt-4 ml-1 bg-primary" onClick={handleclick}>
          Verify OTP
          </button>
          <button className=" mt-4 text-sm text-primary hover:underline ml-22"onClick={ResendOTP}>
          Resend OTP
          </button>   
        </div>
      </div>
    </div>   
  );
}