import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-lg mt-16 text-white py-8">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-orange-700">Sports Equipment Store</h2>
            <p className="mt-2 text-white">
              Your one-stop shop for premium sports equipment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-orange-700">Contact Us</h3>
            <p className="text-white mt-2">59 Sports SM,Mirpur,Dhaka</p>
            <p className="text-white">59 sports@sportshub.com</p>
            <p className="text-white">019*********54</p>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold  text-orange-700">Follow Us</h3>
            <div className="flex space-x-4 justify-center mt-2">
              <a href="#" className="text-white hover:text-orange-700 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-orange-700 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-orange-700 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-orange-700 text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Sports Gear Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
