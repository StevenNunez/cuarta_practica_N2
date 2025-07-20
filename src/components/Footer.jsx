const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-sm px-6 py-8 mt-12">
        <div className="footer-links flex flex-wrap justify-center gap-4 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Collection Statement</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Manage Account</a>
        </div>
        <div className="footer-copy text-center text-xs mb-4">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </div>
        <div className="social-icons flex justify-center gap-4 mb-4">
          <img src="/facebook-white.svg" alt="Download on the App Store" className="h-10" />
          <img src="/twitter-white.svg" alt="Download on the App Store" className="h-10" />
          <img src="/instagram-white.svg" alt="Download on the App Store" className="h-10" />
        </div>
        <div className="store-buttons flex justify-center gap-4">
          <img src="/app-store.svg" alt="Download on the App Store" className="h-10" />
          <img src="/play-store.svg" alt="Get it on Google Play" className="h-10" />
          <img src="/windows-store.svg" alt="Get it from Microsoft" className="h-10" />
        </div>
      </footer>
  );
};

export default Footer;