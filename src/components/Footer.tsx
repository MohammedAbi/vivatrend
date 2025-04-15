const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto flex justify-between items-center px-4 text-white">
        {/* Logo */}
        <a href="/">VIVATREND</a>

        {/* Copyright Text */}
        <p className="text-sm md:text-base">
          &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
