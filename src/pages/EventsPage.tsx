import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Search,
  Heart,
  Shield,
  HandHeart,
  GraduationCap,
  Stethoscope,
  TreePine,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sportsActivities from "@/assets/Sports and Leisure Activities.jpeg";
import sportsActivities2 from "@/assets/Sports and Leisure Activities2.jpeg";
import therapySupport from "@/assets/Therapy and Psychosocial Support.jpg";
import therapySupport2 from "@/assets/Therapy and Psychosocial Support2.jpg";

// Event Gallery Images
import awareness1 from "@/assets/events/Awareness creation in schools to address discrimination challenges while promoting Inclusive Education in Nakivale Refugee Settlement..png";
import awareness2 from "@/assets/events/Awareness creation in schools to address discrimination challenges while promoting Inclusive Education in Nakivale Refugee Settlement.-.png";
import awareness3 from "@/assets/events/Awareness creation in schools to address discrimination challenges while promoting Inclusive Education in Nakivale Refugee Settlement.--.png";
import hygiene1 from "@/assets/events/Community sensitization with parents and caregivers of children with disabilities on proper hygiene.png";
import hygiene2 from "@/assets/events/Community sensitization with parents and caregivers of children with disabilities on proper hygiene-.png";
import greenLight1 from "@/assets/events/Evaluation Engagement, The Green Light Project..png";
import greenLight2 from "@/assets/events/Evaluation Engagement, The Green Light Project-1.png";
import greenLight3 from "@/assets/events/Evaluation Engagement, The Green Light Project--1.png";
import greenLight4 from "@/assets/events/SED implementing the Green Light Project in Nakivale, public bins placement across the settlement.png";
import greenLight5 from "@/assets/events/SED implementing the Green Light Project in Nakivale, public bins placement across the settlement7.png";
import greenLight6 from "@/assets/events/SED implementing the Green Light Project in Nakivale, public bins placement across the settlement77.png";
import breadCoat1 from "@/assets/events/The Bread and Coat Campaign Distribution Activities, Edition 5-1.png";
import breadCoat2 from "@/assets/events/Picture.pngThe Bread and Coat Campaign Distribution Activities, Edition 5.png";
import breadCoat3 from "@/assets/events/Picture.pngThe Bread and Coat Campaign Distribution Activities, Edition 5__.png";
import breadCoat4 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Base Camp, Nakivale Refugee Settlement, 2022.png";
import breadCoat5 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Base Camp, Nakivale Refugee Settlement, 2022-.png";
import breadCoat6 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Base Camp, Nakivale Refugee Settlement, 20228.png";
import breadCoat7 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Rubondo, Nakivale Refugee Settlement, 2022---.png";
import breadCoat8 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Rubondo, Nakivale Refugee Settlement, 2022--.png";
import breadCoat9 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Rubondo, Nakivale Refugee Settlement, 2022-.png";
import breadCoat10 from "@/assets/events/The Bread and Coat Campaign Distribution Activity in Rubondo, Nakivale Refugee Settlement, 2022-2.png";
import anniversary1 from "@/assets/events/SEED Members celebrating our 3rd Anniversary.png";
import anniversary2 from "@/assets/events/SEED Members celebrating our 3rd Anniversary4.png";
import treePlanting1 from "@/assets/events/Tree planting Activity during the Bread and Coat Campaign a way for the PWDs community to give back.png";
import treePlanting2 from "@/assets/events/Tree planting Activity during the Bread and Coat Campaign a way for the PWDs community to give back5.png";
import treePlanting3 from "@/assets/events/Tree planting Activity during the Bread and Coat Campaign a way for the PWDs community to give back6.png";
import treePlanting4 from "@/assets/events/Tree planting activities in Mirambira Village-Nakivale Refugee Settlement by the PWDs community.png";
import treePlanting5 from "@/assets/events/Tree planting activities in Mirambira Village-Nakivale Refugee Settlement by the PWDs community-.png";
import treePlanting6 from "@/assets/events/Tree planting activities in Mirambira Village-Nakivale Refugee Settlement by the PWDs community--.png";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showServiceUnavailable, setShowServiceUnavailable] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [sportsActivities2, therapySupport2];

  const events = [
    {
      id: 1,
      title: "Refugee Protection Workshop",
      date: "2026-04-15",
      time: "9:00 AM - 12:00 PM",
      location: "Nakivale Refugee Settlement - Community Center",
      category: "protection",
      description:
        "Essential training on refugee rights, protection protocols, and case management for field officers and community leaders.",
      attendees: 45,
      maxAttendees: 60,
      icon: Shield,
    },
    {
      id: 2,
      title: "Disability Inclusion Training",
      date: "2026-04-20",
      time: "2:00 PM - 5:00 PM",
      location: "SeedMove Training Facility",
      category: "disability",
      description:
        "Comprehensive training on inclusive practices, accessibility standards, and supporting persons with disabilities in humanitarian settings.",
      attendees: 28,
      maxAttendees: 40,
      icon: Heart,
    },
    {
      id: 3,
      title: "Community Health Outreach",
      date: "2026-04-25",
      time: "10:00 AM - 3:00 PM",
      location: "Zone 3 Health Post - Nakivale",
      category: "health",
      description:
        "Free medical screenings, mental health support, and psychosocial services for refugee families and host community members.",
      attendees: 120,
      maxAttendees: 200,
      icon: Stethoscope,
    },
    {
      id: 4,
      title: "Donor Partnership Meeting",
      date: "2026-05-10",
      time: "6:00 PM - 10:00 PM",
      location: "UNHCR Coordination Office",
      category: "partnership",
      description:
        "Strategic partnership development meeting with donor agencies and NGOs to align on program objectives and funding mechanisms.",
      attendees: 85,
      maxAttendees: 150,
      icon: HandHeart,
    },
    {
      id: 5,
      title: "Climate-Smart Agriculture Training",
      date: "2026-05-18",
      time: "8:00 AM - 12:00 PM",
      location: "Agricultural Demonstration Site",
      category: "livelihood",
      description:
        "Training on sustainable farming practices, food security initiatives, and climate-resilient agricultural techniques for refugee farmers.",
      attendees: 32,
      maxAttendees: 100,
      icon: TreePine,
    },
    {
      id: 6,
      title: "Education & Skills Development Workshop",
      date: "2026-05-22",
      time: "1:00 PM - 4:00 PM",
      location: "SeedMove Learning Center",
      category: "education",
      description:
        "Vocational skills training, literacy programs, and educational support for refugee youth and adults seeking economic empowerment.",
      attendees: 18,
      maxAttendees: 30,
      icon: GraduationCap,
    },
  ];

  const categories = [
    { value: "all", label: "All Events" },
    { value: "protection", label: "Protection" },
    { value: "disability", label: "Disability Inclusion" },
    { value: "health", label: "Health" },
    { value: "partnership", label: "Partnership" },
    { value: "livelihood", label: "Livelihood" },
    { value: "education", label: "Education" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      protection: "bg-gray-100 text-gray-800",
      disability: "bg-blue-100 text-blue-800",
      health: "bg-red-100 text-red-800",
      partnership: "bg-purple-100 text-purple-800",
      livelihood: "bg-gray-100 text-gray-800",
      education: "bg-yellow-100 text-yellow-800",
    };

    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleRegisterClick = (event: any) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setShowServiceUnavailable(true);
    setTimeout(() => setShowServiceUnavailable(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-gray-700 flex flex-row">
                  Upcoming Events
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our community events and be part of the positive change
                happening in our area. From volunteer opportunities to
                educational workshops, there&apos;s something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900"
                >
                  <Link to="/join">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/support">
                    Support Events <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="order-first md:order-last relative">
              <div className="relative w-full h-96 md:h-[500px] rounded-lg shadow-lg overflow-hidden bg-gray-100">
                {/* Carousel Images */}
                <div className="relative h-full w-full">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentSlide
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Event Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = sportsActivities2; // Fallback image
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === 0 ? heroImages.length - 1 : prev - 1,
                    )
                  }
                  className="absolute left-4 top-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === heroImages.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="absolute right-4 top-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? "bg-gray-800 scale-110 shadow-xl"
                          : "bg-white/80 hover:bg-white hover:scale-105"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={
                    selectedCategory === category.value
                      ? "bg-gray-600 hover:bg-gray-700"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No events found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                        <event.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <Badge className={getCategoryColor(event.category)}>
                        {categories.find((c) => c.value === event.category)
                          ?.label || event.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-6">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-600" />
                        {formatDate(event.date)}
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-gray-600" />
                        {event.time}
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-gray-600" />
                        {event.location}
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-gray-600" />
                        {event.attendees}/{event.maxAttendees} attending
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div
                        className="bg-gray-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (event.attendees / event.maxAttendees) * 100
                          }%`,
                        }}
                      />
                    </div>

                    <Button
                      className="w-full bg-gray-600 hover:bg-gray-700"
                      onClick={() => handleRegisterClick(event)}
                    >
                      Register for Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recent Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Spring Planting Festival
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Over 200 volunteers came together to plant 1,000 trees across
                  5 community parks.
                </p>
                <div className="text-sm text-gray-600 font-semibold">
                  March 2026 • 200+ volunteers
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Youth Career Fair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connected 150 high school students with local businesses and
                  career opportunities.
                </p>
                <div className="text-sm text-gray-600 font-semibold">
                  February 2026 • 25 companies
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Community Health Screening
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Provided free health screenings to 300 community members,
                  identifying critical health needs.
                </p>
                <div className="text-sm text-gray-600 font-semibold">
                  January 2026 • 300+ screenings
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our recent events through visual stories. From awareness
              campaigns to community celebrations, see how we're making a
              difference together.
            </p>
          </div>

          {/* Inclusive Education Awareness Campaign */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Inclusive Education Awareness Campaign
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Creating awareness in schools to address discrimination
                challenges while promoting inclusive education in Nakivale
                Refugee Settlement. Our team works directly with students and
                teachers to foster an environment of acceptance and equal
                opportunity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={awareness1}
                  alt="Inclusive Education Awareness Session"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    School awareness session in progress
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={awareness2}
                  alt="Students participating in inclusive education"
                  className="w-full h-64 object-contain bg-gray-100"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Students engaged in inclusive activities
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={awareness3}
                  alt="Community education awareness"
                  className="w-full h-64 object-contain bg-gray-100"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Community education awareness campaign
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Hygiene Sensitization */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Community Hygiene Sensitization
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Working with parents and caregivers of children with
                disabilities on proper hygiene practices. These sessions are
                crucial for health promotion and disease prevention in our
                community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={hygiene1}
                  alt="Hygiene sensitization session"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Parents learning proper hygiene techniques
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={hygiene2}
                  alt="Caregivers training session"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Hands-on training for caregivers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Green Light Project */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The Green Light Project
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Environmental conservation initiative funded by UNHCR/Innovation
                Service, led by youth with disabilities tackling environmental
                challenges. From evaluation meetings to public bin placement
                across the settlement.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={greenLight1}
                  alt="Green Light Project evaluation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Project evaluation engagement
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={greenLight2}
                  alt="Green Light Project meeting"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Team planning session</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={greenLight3}
                  alt="Green Light Project discussion"
                  className="w-full h-64 object-contain bg-gray-100"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Community discussion forum
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={greenLight4}
                  alt="Public bins placement"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Public bins placement across settlement
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={greenLight5}
                  alt="Environmental cleanup activity"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Environmental cleanup initiative
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={greenLight6}
                  alt="Green Light Project team"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Project team in action</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bread and Coat Campaign */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Bread and Coat Campaign
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Annual drive providing food, clothing, and basic support to
                people with disabilities during festive seasons. Distribution
                activities across Base Camp and Rubondo zones, bringing dignity
                and care to our community members.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat1}
                  alt="Bread and Coat Campaign Edition 5"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Edition 5 Distribution</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat2}
                  alt="Bread and Coat Distribution"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Community distribution</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat4}
                  alt="Base Camp Distribution 2022"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Base Camp 2022</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat7}
                  alt="Rubondo Distribution 2022 Extended"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Rubondo extended</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat8}
                  alt="Rubondo Distribution 2022"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Rubondo 2022</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat9}
                  alt="Rubondo Distribution Activity"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Rubondo activity</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={breadCoat10}
                  alt="Rubondo Distribution Phase 2"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Phase 2 distribution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tree Planting Activities */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Tree Planting & Environmental Conservation
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Community-led tree planting activities in Mirambira Village and
                during the Bread and Coat Campaign. A way for the PWDs community
                to give back to the environment and promote sustainability.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={treePlanting1}
                  alt="Tree planting during Bread and Coat Campaign"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Community giving back through tree planting
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={treePlanting4}
                  alt="Mirambira Village tree planting"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Mirambira Village tree planting
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={treePlanting6}
                  alt="PWDs community environmental activity"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    PWDs community environmental stewardship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEED Anniversary Celebration */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SEED 3rd Anniversary Celebration
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Celebrating three years of impact, growth, and community
                service. Our team members came together to commemorate our
                journey and renew our commitment to serving persons with
                disabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={anniversary1}
                  alt="SEED 3rd Anniversary Celebration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Celebrating our 3rd anniversary
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={anniversary2}
                  alt="SEED team celebration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Team celebration and recognition
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of Our Next Event
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in making a difference. Whether through participation,
              volunteering, or support, your contribution helps us create
              lasting change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gray-800 hover:bg-gray-900"
              >
                <Link to="/join">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/support">
                  Support Our Work <Heart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Registration Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Register for Event
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900">
                {selectedEvent.title}
              </h3>
              <p className="text-sm text-gray-600">
                {formatDate(selectedEvent.date)} • {selectedEvent.time}
              </p>
              <p className="text-sm text-gray-600">{selectedEvent.location}</p>
            </div>

            <form onSubmit={handleSubmitRegistration} className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="w-full"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="w-full"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  className="w-full"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Organization (Optional)
                </Label>
                <Input
                  id="organization"
                  type="text"
                  className="w-full"
                  placeholder="Your organization or institution"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="message"
                  className="w-full"
                  rows={3}
                  placeholder="Any special requirements or questions"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="flex-1 bg-gray-600 hover:bg-gray-700"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Service Unavailable Popup */}
      {showServiceUnavailable && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center">
            <span>Service not available yet</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
