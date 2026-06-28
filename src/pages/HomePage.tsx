import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Users,
  Heart,
  Target,
  Award,
  Eye,
  ArrowRight,
  Brain,
  BookOpen,
  Activity,
  Home,
  GraduationCap,
  Stethoscope,
  TreePine,
  Lightbulb,
  Calendar,
  Building,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/seedmove-logo-new.png";
import protectionSessions from "@/assets/Protection and Sharing Sessions.jpg";
import alightLogo from "@/assets/alight.png";
import unhcrLogo from "@/assets/unhcr.webp";
import danishLogo from "@/assets/danish.png";
import windleLogo from "@/assets/windle.png";
import nsamiziLogo from "@/assets/nsamizi.png";
import opportunityBankLogo from "@/assets/opportunity-bank.png";
import tpoLogo from "@/assets/tpo.jpg";
import tutaponaLogo from "@/assets/tutapona.webp";
import opmLogo from "@/assets/PMO.png";

const HomePage = () => {
  console.log("HomePage: Rendering");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - White */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="flex items-center mb-6"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-gray-700 flex flex-row">
                  Supporting Communities, Changing Lives
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SEED is a refugee-led humanitarian organization dedicated to
                protection, education, livelihood, and health programs for
                persons with disabilities and their families in Nakivale Refugee
                Settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900"
                >
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/join">
                    Join Our Mission <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-first md:order-last">
              <img
                src={protectionSessions}
                alt="Protection and Sharing Sessions - UNHCR supported humanitarian work"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Identity
            </h2>
            <div className="space-y-6 text-lg max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                SEED is more than an organization; it is a movement of
                resilience, dignity, and innovation led by and for persons with
                disabilities, an inclusive platform both for forcibly displaced
                and stateless persons and host communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that every person has potential, and when given
                access to the right opportunities, they can thrive, contribute,
                and inspire change.
              </p>
            </div>
          </div>

          {/* The Story Behind the SEED Logo */}
          <div className="space-y-12 mt-16">
            {/* Design of the Logo */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Design of the Logo
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At the heart of the logo is the letter "S", representing both
                SEED and the human being with a disability leaning on it. This
                design element symbolizes vulnerability and the reality that
                many persons with disabilities live in fragile conditions, often
                requiring support to stand upright and embrace their destiny.
              </p>
            </div>
            {/* Logo Image and Description */}
            <div className="flex flex-col md:flex-row gap-12 items-center px-24">
              {/* Left Side - Logo Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={logo}
                    alt="SEED Logo"
                    className="w-64 h-64 object-contain"
                  />
                  <div className="absolute inset-0 rounded-lg"></div>
                </div>
              </div>

              {/* Right Side - Description */}
              <div className="flex-1">
                <p className="text-xl text-gray-700 leading-relaxed">
                  The SEED logo is not just a symbol; it is a visual narrative
                  of our journey, our vision, and our commitment to building a
                  better world for persons with disabilities. Every detail
                  carries meaning, reflecting both the struggles and the
                  aspirations of the communities we serve.
                </p>
              </div>
            </div>

            {/* Colors of the Logo - 3 Columns */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Colors of the Logo
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-black rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Black
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Represents the protracted marginalization, suffering, and
                    harsh realities that children, youth, adults, and elders
                    with disabilities face daily. It embodies the "dark world"
                    of exclusion and hardship.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Gray
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Signifies resilience and the possibility of change. Like the
                    sky turning gray before rain, it reflects uncertainty that
                    carries promise and transformation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    White
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Represents SEED's vision: a brighter, inclusive world where
                    persons with disabilities live in dignity, equality, and
                    harmony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partnerships and Collaborations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SEED thrives through collaboration. We proudly partner with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={alightLogo}
                  alt="ALIGHT Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    ALIGHT (Formerly known as American Refugee Council)
                  </h3>
                  <p className="text-gray-600">
                    To implement Disability inclusion awareness in schools and
                    communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={unhcrLogo}
                  alt="UNHCR Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    UNHCR / Innovation Services
                  </h3>
                  <p className="text-gray-600">
                    The Green Light Project under the Refugee-Led Innovation
                    Fund.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={windleLogo}
                  alt="Windle International Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Windle International Uganda
                  </h3>
                  <p className="text-gray-600">
                    Joint initiatives in psychosocial support, education,
                    livelihoods, and protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={tutaponaLogo}
                  alt="Tutapona Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    TUTAPONA
                  </h3>
                  <p className="text-gray-600">
                    Joint initiatives under mental health and psychosocial
                    support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={tpoLogo}
                  alt="TPO Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">TPO</h3>
                  <p className="text-gray-600">
                    Joint initiatives under mental health and psychosocial
                    support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={nsamiziLogo}
                  alt="Nsamizi Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    NSAMIZI
                  </h3>
                  <p className="text-gray-600">
                    Joint initiatives under Environment and Livelihood.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={opportunityBankLogo}
                  alt="Opportunity Bank Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Opportunity Bank
                  </h3>
                  <p className="text-gray-600">
                    SEED collaborates with Opportunity Bank to ensure inclusive
                    access to financial services in settlement, enabling persons
                    with disabilities and marginalized households to participate
                    in savings, credit, and broader financial systems that
                    strengthen livelihoods and resilience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={opmLogo}
                  alt="OPM Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    OPM (Office of the Prime Minister)
                  </h3>
                  <p className="text-gray-600">
                    SEED works in close partnership with Office of the Prime
                    Minister (OPM), ensuring that our initiatives are fully
                    coordinated on the ground and aligned with national
                    frameworks, thereby strengthening impact and accountability
                    in the communities we serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={danishLogo}
                  alt="Danish Refugee Council Logo"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    DANISH REFUGEE COUNCIL (DRC)
                  </h3>
                  <p className="text-gray-600">
                    Harmonize the extension of services, especially multipurpose
                    cash assistance and for education to the most
                    socio-economically vulnerable identified households
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Light Gray */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through focused humanitarian programs and community partnerships,
              we create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600 mb-4">
                Providing essential protection and support services to
                communities in need.
              </p>
              <Button asChild variant="outline">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Events & Programs</h3>
              <p className="text-gray-600 mb-4">
                Engaging activities and educational programs for all ages.
              </p>
              <Button asChild variant="outline">
                <Link to="/events">Upcoming Events</Link>
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Involved</h3>
              <p className="text-gray-600 mb-4">
                Join our team and make a real difference.
              </p>
              <Button asChild variant="outline">
                <Link to="/join">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section - White */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services for persons with disabilities and
              their families in Nakivale Refugee Settlement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Protection and Sharing Sessions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Weekly meetings for parents, caregivers, and people with
                  disabilities to learn about safety, rights, and services while
                  building confidence together.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Therapy and Psychosocial Support
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Individual and group therapy (MHPSS) to help people manage
                  emotional stress, rebuild self-worth, and find healing through
                  mental health care.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Literacy and Sign Language Program
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Teaching children and adults with hearing or speech
                  impairments how to read, write, and communicate through sign
                  language.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Livelihood and Skills Training
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Training youth with disabilities in income-generating skills
                  like paper bag making, promoting environmental protection and
                  economic empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Stethoscope className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Sexual and Reproductive Health Education
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Awareness sessions for women and teenage girls with
                  disabilities, helping them understand health, hygiene, and
                  body safety.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Activity className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Sports and Leisure Activities
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Games, marathons, and fitness activities that encourage
                  inclusion, fight stigma, and promote good health among people
                  with disabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Home className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Bread and Coat Campaign
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Annual drive providing food, clothing, and basic support to
                  people with disabilities during festive seasons, bringing
                  dignity and care.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <TreePine className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Inclusive Agriculture Project
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Farming initiative to combat malnutrition among children with
                  disabilities by growing and distributing nutritious food.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">Green Light Project</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Environmental and climate action initiative funded by
                  UNHCR/Innovation Service, led by youth with disabilities
                  tackling environmental challenges within the first
                  displacement setting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section - Light Gray */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our team and make a real difference in the lives of persons
              with disabilities and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Protection Case Worker
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  Support refugee protection services, case management, and
                  rights advocacy in Nakivale Refugee Settlement.
                </p>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to="/join">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Disability Inclusion Assistant
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  Assist with disability inclusion programs, accessibility
                  support, and specialized services for persons with
                  disabilities.
                </p>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to="/join">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Education Program Volunteer
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  Support educational programs, literacy classes, and technical
                  skills training for refugee children and youth.
                </p>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to="/join">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Stethoscope className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">
                    Health Outreach Assistant
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  Assist with health screening, mental health support, and
                  psychosocial services for refugee communities.
                </p>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to="/join">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
