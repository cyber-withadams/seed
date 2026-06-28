import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/seedmove-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="SEED MOVE Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">SEED</span>
            </div>
            <p className="text-gray-400">
              SEED to Build a Better World - Supporting persons with
              disabilities and their families in Nakivale Refugee Settlement.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white">
                  Support the Mission
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/support" className="hover:text-white">
                  Support Mission
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-white">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white">
                  Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Join our community and stay updated on our latest initiatives.
            </p>
            <Button
              className="w-full bg-gray-700 hover:bg-gray-600 text-white"
              asChild
            >
              <Link to="/join">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 SEED ORGANISATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
