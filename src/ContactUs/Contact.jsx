  import React from "react";
 
  import sideimg from "../Images/contact1.webp"
import MapComponent from "./MapComponent";

  const Contact = () => {
    return (
      <div>
        <div>
          {/* <NavBar /> */}
          <div className="pt-[100px] text-center text-[24px] font-bold">
            <div>Quick Contact Address</div>
            
          </div>
          <div className="text-center text-[18px]">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration.
            </div>
          <div className="flex justify-evenly items-center m-10">
            <div className="border shadow-xl p-[80px]">
              <div className="text-[20px] font-bold pb-8">Contact Phone Number</div>
              <div>+444 555 666 777</div>
              <div>+444 555 666 777</div>
            </div>
            <div className="border shadow-xl p-[80px]">
              <div className="text-[20px] font-bold pb-8">Our Email Address</div>
              <div>admin@gmail.com</div>
              <div>example@gmail.com</div>
            </div>
            <div className="border shadow-xl p-[80px]">
              <div className="text-[20px] font-bold pb-8">Our Location</div>
              <div>5678 Bangla Main Road, cities 580</div>
              <div>GBnagla, example 54786</div>
            </div>
          </div>  
          <div className="flex justify-between px-5 mb-5">
              <div className="flex justify-center p-5 border rounded-md shadow-md" ><img  className="rounded-lg hover:translate-x-1" src={sideimg} alt="contactus"/></div>
              <div className="border rounded-md w-[50%] p-[80px]">
                  <div className="text-[24px] font-bold ">Contact Us</div>
                  <div className="pt-3">
                      <div className="mb-2">Your Name</div>
                      <div ><input className="border rounded-md shadow-md w-[400px] h-[40px]"/></div>
                  </div>
                  <div className="pt-3">
                      <div className="mb-2">Email</div>
                      <div ><input className="border rounded-md shadow-md w-[400px] h-[40px]"/></div>
                  </div>
                  <div className="pt-3">
                      <div className="mb-2">Subject</div>
                      <div><input className="border rounded-md shadow-md w-[400px] h-[40px]" /></div>
                  </div>
                  <div className="pt-3">
                      <div className="mb-2">Write Message</div>
                      <div ><textarea className="border w-[400px] shadow-md h-[100px]"/></div>
                  </div>
                  <div className="pt-3">
                      <button className="border p-4 rounded-md bg-[#00a3ff] text-white hover:bg-black ">Send Message</button>
                  </div>
              </div>
          </div>
          <MapComponent/>
          {/* <Footer/> */}
        </div>
        
      </div>
      
    );
  };

  export default Contact;
