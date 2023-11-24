const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-gray-700 my-10 text-white">     
              <p className="text-2xl mt-14 uppercase font-bold italic">SurveyPolling</p>
            <nav>
              <header className="footer-title text-xl font-bold italic">Services</header>
              <a className="link link-hover italic font-bold">Branding</a>
              <a className="link link-hover italic font-bold">Design</a>
              <a className="link link-hover italic font-bold">Marketing</a>
              <a className="link link-hover italic font-bold">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title text-xl font-bold italic">Company</header>
              <a className="link link-hover italic font-bold">About us</a>
              <a className="link link-hover italic font-bold">Contact</a>
              <a className="link link-hover italic font-bold">Jobs</a>
              <a className="link link-hover italic font-bold">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title text-xl font-bold italic">Legal</header>
              <a className="link link-hover italic font-bold">Terms of use</a>
              <a className="link link-hover italic font-bold">Privacy policy</a>
              <a className="link link-hover italic font-bold">Cookie policy</a>
            </nav>
        </footer>
    </div>
  );
};

export default Footer;
