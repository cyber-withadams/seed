import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Users,
  Target,
  Award,
  Eye,
  ArrowRight,
  Calendar,
  TrendingUp,
  Shield,
  Users2,
  Building2,
  Handshake,
  TreePine,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/seedmove-logo-new.png";
import literacyProgram from "@/assets/Literacy and Sign Language Program.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-gray-600" />,
      title: "Inclusion",
      description:
        "We believe every person, regardless of ability or background, deserves equal opportunity & dignity.",
    },
    {
      icon: <Users className="h-8 w-8 text-gray-600" />,
      title: "Integrity",
      description:
        "We uphold honesty, transparency, and accountability in all our actions.",
    },
    {
      icon: <Target className="h-8 w-8 text-gray-600" />,
      title: "Service",
      description:
        "We exist to serve our community with strong dedication, compassion, & humility.",
    },
    {
      icon: <Award className="h-8 w-8 text-gray-600" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in our programs, partnerships, and impact.",
    },
    {
      icon: <Users className="h-8 w-8 text-gray-600" />,
      title: "Teamwork",
      description:
        "We work collaboratively, valuing strengths and contributions of every individual.",
    },
  ];

  const stats = [
    {
      number: "1,000+",
      label: "Lives Impacted",
      icon: <Users2 className="h-8 w-8 text-gray-600" />,
    },
    {
      number: "50+",
      label: "Community Programs",
      icon: <Building2 className="h-8 w-8 text-gray-600" />,
    },
    {
      number: "500+",
      label: "Active Volunteers",
      icon: <Heart className="h-8 w-8 text-gray-600" />,
    },
    {
      number: "20+",
      label: "Partner Organizations",
      icon: <Handshake className="h-8 w-8 text-gray-600" />,
    },
  ];

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
                <span className="text-gray-700 flex flex-row">About SEED</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SEED is more than an organization; it is a movement of
                resilience, dignity, and innovation led by and for persons with
                disabilities, an inclusive platform both for forcibly displaced
                and stateless persons and host communities.
                <br />
                <br />
                We believe that every person has potential, and when given
                access to the right opportunities, they can thrive, contribute,
                and inspire change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900"
                >
                  <Link to="/services">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/join">
                    Join Our Team <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-first md:order-last">
              <img
                src={literacyProgram}
                alt="About SeedMove - Our literacy and education programs"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="SEED MOVE Logo" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Motto
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
                SEED to build a better world
              </p>
              <p className="text-md  leading-relaxed  text-gray-700 italic mb-6">
                "For the active inclusion of persons with disabilities, we
                strive!"
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="SEED MOVE Logo" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To empower persons with disabilities to achieve their
                Educational, Professional, and Socio-economic goals in a more
                inclusive and safer environment.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="SEED MOVE Logo" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To build the most reliable and inclusive community network for
                persons with and without disabilities, regardless of origin,
                towards a dynamic and resilient society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The journey of SEED from a small group of volunteers to a
              comprehensive humanitarian organization.
            </p>
          </div>

          {/* Story Paragraphs with Icons */}
          <div className="space-y-12">
            {/* First Paragraph - Icon on Left */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-1/3 md:w-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mx-auto md:mx-0">
                  <Calendar className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  SEED started as a group of forcibly displaced and stateless
                  persons with disabilities in 2020 in Nakivale Refugee
                  Settlement, in the middle of the pandemic. What began as a
                  simple idea—that small, intentional actions could create
                  lasting change—has grown into a comprehensive humanitarian
                  organization addressing multiple facets of community
                  development.
                </p>
              </div>
            </div>

            {/* Second Paragraph - Icon on Right */}
            <div className="flex items-center gap-8 flex-row-reverse">
              <div className="flex-shrink-0 w-1/3 md:w-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mx-auto md:mx-0">
                  <Award className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Officially registered in 2022, SEED has grown into a trusted
                  community-based organization with disability inclusion at the
                  heart of everything we do. Over the years, we've learned that
                  true sustainable change happens when we empower community
                  members to become agents of their own transformation.
                </p>
              </div>
            </div>

            {/* Third Paragraph - Icon on Left */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-1/3 md:w-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mx-auto md:mx-0">
                  <Heart className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We champion inclusive education, ensuring children and
                  teenagers with disabilities find their way to school. We
                  provide psychosocial support to parents and caregivers, and we
                  pioneer safe spaces for persons with speech and hearing
                  impairments to worship, learn, and socialize with dignity.
                </p>
              </div>
            </div>

            {/* Fourth Paragraph - Icon on Right */}
            <div className="flex items-center gap-8 flex-row-reverse">
              <div className="flex-shrink-0 w-1/3 md:w-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mx-auto md:mx-0">
                  <TreePine className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  SEED is also leading the way in environmental innovation.
                  Through the Green Light Project, funded by UNHCR's Refugee-Led
                  Innovation Fund, youth with disabilities are tackling plastic
                  pollution with paper bag production, recycling, solid waste
                  management, and tree planting.
                </p>
              </div>
            </div>

            {/* Fifth Paragraph - Icon on Left */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-1/3 md:w-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mx-auto md:mx-0">
                  <Shield className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Every year, our Bread and Coat Campaign brings communities
                  together to support persons with disabilities during the
                  festive season with food, clothing, and other essentials.
                  Today, SEED continues to grow, but our core mission remains
                  the same: to plant seeds of hope, nurture them with care, and
                  watch as communities flourish and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from program development
              to community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Aims Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Aims
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategic objectives drive our mission and guide our programs
              to create lasting positive change in displacement communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Safe & Inclusive Spaces
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Create safe and inclusive spaces for persons with disabilities
                in forced displacement settings.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Peaceful Coexistence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Foster peaceful coexistence among diverse communities and
                minority groups.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Innovation & Opportunity
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Promote innovative projects that generate inclusive job
                opportunities for youth with disabilities.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Equality & Advocacy
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Advocate for equality, fairness, and access to quality education
                and decent work for forcibly displaced and stateless persons
                with disabilities.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Career Development
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Provide career guidance, mentorship, and motivational programs
                to help young people with disabilities reach their full
                potential.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Skills & Self-Reliance
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Deliver hard and soft skills trainings to support self-reliance
                and socio-economic inclusion for displaced and stateless
                persons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our team and make a real difference in the lives of persons
              with disabilities and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Protection Case Worker
              </h3>
              <p className="text-gray-600 mb-6">
                Support refugee protection services, case management, and rights
                advocacy in Nakivale Refugee Settlement.
              </p>
              <Button className="bg-gray-600 hover:bg-gray-700">
                Apply Now
              </Button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Disability Inclusion Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Assist with disability inclusion programs, accessibility
                support, and specialized services for persons with disabilities.
              </p>
              <Button className="bg-gray-600 hover:bg-gray-700">
                Apply Now
              </Button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Education Program Volunteer
              </h3>
              <p className="text-gray-600 mb-6">
                Support educational programs, literacy classes, and technical
                skills training for refugee children and youth.
              </p>
              <Button className="bg-gray-600 hover:bg-gray-700">
                Apply Now
              </Button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Health Outreach Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Assist with health screening, mental health support, and
                psychosocial services for refugee communities.
              </p>
              <Button className="bg-gray-600 hover:bg-gray-700">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
