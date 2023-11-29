
const AboutUs = () => {
  return (
    <div>
        <div className="hero bg-[url('https://i.ibb.co/DWCLGD9/altumcode-d-C6-Pb2-Jd-Aqs-unsplash.jpg')] h-[500px] bg-cover">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase italic">About Us</h1>
            </div>
          </div>
        </div>

        <div className="mt-10">
            <h2 className="text-5xl font-bold">Company Name: <span className="font-bold uppercase italic text-orange-600">SurveyPolling</span></h2>

            <div className="my-10">
                <h2 className="text-3xl font-bold uppercase italic">Mission Statement:</h2>
                <p className="border-4 p-4"><span className="font-bold uppercase italic">SurveyPolling</span> is dedicated to providing cutting-edge MERN stack development solutions. We aim to empower businesses by leveraging the full potential of MongoDB, Express.js, React.js, and Node.js to create robust and scalable applications.</p>

                <h2 className="text-3xl mt-5 font-bold uppercase italic">Our Team</h2>
                <p className="border-4 p-4">Meet our team of skilled professionals who are passionate about MERN stack development. Our diverse team brings together expertise in backend and frontend technologies to deliver top-notch solutions tailored to your business needs.</p>
            </div>

            <div>
                <h2 className="text-3xl font-bold uppercase italic">Survey Questions</h2>

                <p className="text-xl font-bold italic my-5">How would you rate your familiarity with the MERN stack?</p>
                <div className="">
                    <label className="font-bold uppercase italic">Begineer</label>
                    <input type="checkbox" className="ml-2 mr-2"  />
                    <label className="font-bold uppercase italic">Intermediate</label>
                    <input type="checkbox" className="ml-2 mr-2"  />
                    <label className="font-bold uppercase italic">Advanced</label>
                    <input type="checkbox" className="ml-2 "  />
                </div>

                <p className="text-xl font-bold italic my-5">Which MERN stack component do you find most challenging?</p>
                <div className="">
                    <label className="font-bold uppercase italic">MongoDB</label>
                    <input type="checkbox" className="ml-2 mr-2"  />
                    <label className="font-bold uppercase italic">Express JS</label>
                    <input type="checkbox" className="ml-2 mr-2"  />
                    <label className="font-bold uppercase italic">React JS</label>
                    <input type="checkbox" className="ml-2 "  />
                    <label className="font-bold uppercase italic">Node JS</label>
                    <input type="checkbox" className="ml-2 "  />
                </div>

                <p className="text-xl font-bold italic my-5">Have you worked on any MERN stack projects before?</p>
                <div className="">
                    <label className="font-bold uppercase italic">Yes</label>
                    <input type="checkbox" className="ml-2 mr-2"  />
                    <label className="font-bold uppercase italic">No</label>
                    <input type="checkbox" className="ml-2 mr-2"  />
                </div>

                <p className="text-2xl font-bold italic uppercase my-5">FeedBack</p>
                <div>
                    <p className="font-bold mb-2">How can <span className="font-bold uppercase italic">SurveyPolling</span> assist you in your MERN stack development journey?</p>
                    <div className="form-control">
                        <textarea className="textarea textarea-bordered h-24" placeholder="Make yourself"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
