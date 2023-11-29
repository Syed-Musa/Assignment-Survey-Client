import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactUs = () => {
  return (
    <div className="">
        <div className="hero bg-[url('https://i.ibb.co/DWCLGD9/altumcode-d-C6-Pb2-Jd-Aqs-unsplash.jpg')] h-[500px] bg-cover">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase italic">Contact Us</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            <div className="border-2 ">  
                <FaPhone className="bg-orange-600 text-white w-full h-10"></FaPhone>
                <div className="p-10 bg-gray-300">
                    <h2 className="text-3xl font-bold uppercase italic mb-2">Phone</h2>
                    <p className="text-xl font-bold">+38 (012) 34 56 789</p>
                </div>
            </div>
    
            <div className="border-2 ">  
                <SiGmail className="bg-orange-600 text-white w-full h-10"></SiGmail>
                <div className="p-10 bg-gray-300">
                    <h2 className="text-3xl font-bold uppercase italic mb-2">Gmail</h2>
                    <p className="text-xl font-bold">abc123@gmail.com</p>
                </div>
            </div>
        </div>

        <div>
            <form className="bg-gray-300 p-5" action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="your name" className="input input-bordered" required />
                    </div>
    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email address" className="input input-bordered" required />
                    </div>
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" placeholder="Phone Number" className="input input-bordered" required />
                </div>
    
                <h2>Message</h2>
                <textarea className="border-2 rounded-lg" cols="160" rows="10"></textarea>
    
                <div className="flex w-40 bg-orange-500 text-white font-bold p-3 rounded-lg items-center mt-2 ml-[550px]">
                    <FaLocationArrow></FaLocationArrow>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;
