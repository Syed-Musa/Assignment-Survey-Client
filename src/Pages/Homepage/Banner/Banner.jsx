const Banner = () => {
  return (
    <div>
      <div className="hero h-[500px] bg-[url('https://i.ibb.co/DWCLGD9/altumcode-d-C6-Pb2-Jd-Aqs-unsplash.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="mr-60">
          <div className="text-start text-white">
            <h1 className="mb-5 text-5xl font-bold italic">Hello Developers</h1>
            <p className="mb-5 italic">
            Explore the ever-evolving landscape of software development with our comprehensive Developer Survey.  <br /> Gain valuable insights into the latest trends, technologies, and challenges shaping the industry. <br /> Join the global developer community in sharing your experiences, preferences, and expertise. <br /> Together, lets uncover the pulse of development and pave the way for the future of coding. <br /> Your input matters—be part of the conversation that shapes the next generation of software innovation</p>
            <button className="btn bg-orange-700 italic text-white font-bold">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
