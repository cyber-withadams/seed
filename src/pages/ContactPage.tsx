import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Heart,
  Sprout,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import logo from "@/assets/seedmove-logo-new.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const leafletCss = document.createElement("link");
    leafletCss.rel = "stylesheet";
    leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(leafletCss);

    const leafletJs = document.createElement("script");
    leafletJs.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leafletJs.onload = () => {
      if (mapRef.current && window.L) {
        // Initialize the map
        const map = window.L.map(mapRef.current).setView(
          [-0.778687, 30.947681],
          13,
        );

        // Add OpenStreetMap tiles
        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
          },
        ).addTo(map);

        // Add a marker for SEED MOVE location
        window.L.marker([-0.778687, 30.947681])
          .addTo(map)
          .bindPopup(
            "SEED ORGANISATION<br>Nyarugugu C Village<br>Nakivale Refugee Settlement",
          )
          .openPopup();
      }
    };
    document.head.appendChild(leafletJs);

    return () => {
      // Cleanup
      if (leafletCss.parentNode) {
        leafletCss.parentNode.removeChild(leafletCss);
      }
      if (leafletJs.parentNode) {
        leafletJs.parentNode.removeChild(leafletJs);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-gray-700" />,
      title: "Physical Address",
      details: [
        "Nyarugugu C Village",
        "Nakivale Refugee Settlement",
        "Isingiro District, South-West Uganda",
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-gray-700" />,
      title: "Mail Us",
      details: ["info@seedmove.org", "support@seedmove.org"],
    },
    {
      icon: <Phone className="h-6 w-6 text-gray-700" />,
      title: "Contact Information",
      details: [
        "+256 708 666 968",
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with SEED ORGANISATION. We're here to support persons
            with disabilities and their families in the Nakivale Refugee
            Settlement.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-06 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-green-200"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Visit Our Location
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div
                  ref={mapRef}
                  className="bg-gray-200 rounded-lg h-64 mb-4"
                ></div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Nyarugugu C Village</h3>
                  <p className="text-gray-600">Nakivale Refugee Settlement</p>
                  <p className="text-gray-600">
                    Isingiro District, South-West Uganda
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <br />

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Send us a Message
              </CardTitle>
              <p className="text-gray-600 text-center">
                Fill out the form below and we'll respond as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about how you'd like to get involved..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="SEED MOVE Logo" className="h-8 w-8" />
                <span className="font-bold text-xl">SEED </span>
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
                  <a href="/join" className="hover:text-white">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/support" className="hover:text-white">
                    Support Mission
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:text-white">
                    Staff Portal
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Join our community and stay updated on our latest initiatives.
              </p>
              <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                <a href="/join">Get Started</a>
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 SEED ORGANISATION. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
