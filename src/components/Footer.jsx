function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-7 mt-4">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-center mb-6">
          Brandon Barrantes Portfolio
        </h3>

        {/* Description Text */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
          Frontend Developer passionate about creating amazing web experiences.
        </p>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {year} Brandon Barrantes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
