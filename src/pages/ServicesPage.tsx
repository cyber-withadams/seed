import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Heart,
  Shield,
  Target,
  BookOpen,
  Activity,
  Home,
  Brain,
  GraduationCap,
  Stethoscope,
  TreePine,
  Lightbulb,
  ArrowRight,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/seedmove-logo-new.png";
import protectionSessions from "@/assets/Protection and Sharing Sessions.jpg";
import therapySupport from "@/assets/Therapy and Psychosocial Support.jpg";
import literacyProgram from "@/assets/Literacy and Sign Language Program.jpg";
import livelihoodTraining from "@/assets/Livelihood and Skills Training.jpg";
import healthEducation from "@/assets/Sexual and Reproductive Health Education.jpeg";
import sportsActivities from "@/assets/Sports and Leisure Activities.jpeg";
import breadCoat from "@/assets/bread.jpg";
import agricultureProject from "@/assets/Inclusive Agriculture Project.jpeg";
import greenLightProject from "@/assets/greenlight.jpg";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const services = [
    {
      image: protectionSessions,
      title: "Protection and Sharing Sessions",
      description:
        "Weekly meetings for parents, caregivers, and people with disabilities to learn about safety, rights, and services while building confidence together.",
      icon: <Shield className="h-6 w-6 text-gray-600" />,
      category: "Protection",
      fullDescription:
        "SEED organizes weekly meetings for parents, caregivers, and people with disabilities. These sessions help families learn about safety, rights, and access to services while sharing experiences and building confidence together. Our protection sessions create safe spaces where community members can discuss challenges, share solutions, and access vital support services. These meetings are essential for building community resilience and ensuring that persons with disabilities receive the protection and support they need to thrive in the refugee settlement.",
    },
    {
      image: therapySupport,
      title: "Therapy and Psychosocial Support",
      description:
        "Individual and group therapy (MHPSS) to help people manage emotional stress, rebuild self-worth, and find healing through mental health care.",
      icon: <Brain className="h-6 w-6 text-gray-600" />,
      category: "Health",
      fullDescription:
        "Also known as MHPSS - They offer individual and group therapy to help people manage emotional stress, rebuild self-worth, and find healing. This includes mental health care and support for both children and adults. Our psychosocial support services are designed to address the unique mental health challenges faced by refugees, particularly those with disabilities. We provide a safe, confidential environment where individuals can process trauma, develop coping strategies, and build the emotional resilience needed to navigate their circumstances.",
    },
    {
      image: literacyProgram,
      title: "Literacy and Sign Language Program",
      description:
        "Teaching children and adults with hearing or speech impairments how to read, write, and communicate through sign language.",
      icon: <BookOpen className="h-6 w-6 text-gray-600" />,
      category: "Education",
      fullDescription:
        "This program teaches children and adults with hearing or speech impairments how to read, write, and communicate through sign language, especially for those who missed school opportunities in their countries of origin. Our inclusive education approach ensures that persons with disabilities have equal access to learning opportunities. We provide individualized instruction, adaptive learning materials, and a supportive environment that celebrates diverse communication methods and empowers participants to fully engage in their communities.",
    },
    {
      image: livelihoodTraining,
      title: "Livelihood and Skills Training",
      description:
        "Training youth with disabilities in income-generating skills like paper bag making, promoting environmental protection and economic empowerment.",
      icon: <GraduationCap className="h-6 w-6 text-gray-600" />,
      category: "Skills",
      fullDescription:
        "Youth with disabilities are trained in income-generating skills such as paper bag making, which also promotes environmental protection by reducing plastic waste. Our livelihood program addresses economic exclusion by providing practical skills training, business development support, and market access opportunities. Participants learn sustainable trades that not only generate income but also contribute to environmental conservation, creating a dual impact that benefits both individuals and the broader community.",
    },
    {
      image: healthEducation,
      title: "Sexual and Reproductive Health Education",
      description:
        "Awareness sessions for women and teenage girls with disabilities, helping them understand health, hygiene, and body safety.",
      icon: <Stethoscope className="h-6 w-6 text-gray-600" />,
      category: "Health",
      fullDescription:
        "SEED runs awareness sessions for women and teenage girls with disabilities, helping them understand health, hygiene, and body safety for their lives. These culturally sensitive programs address the specific health education needs of women and girls with disabilities, covering topics often overlooked in traditional health education. We create safe, inclusive spaces where participants can ask questions, share concerns, and receive accurate information about their health and rights.",
    },
    {
      image: sportsActivities,
      title: "Sports and Leisure Activities",
      description:
        "Games, marathons, and fitness activities that encourage inclusion, fight stigma, and promote good health among people with disabilities.",
      icon: <Activity className="h-6 w-6 text-gray-600" />,
      category: "Activities",
      fullDescription:
        "They organize games, marathons, and fitness activities that encourage inclusion, fight stigma, and promote good health among people with disabilities. Our sports and leisure programs are designed to break down barriers and challenge misconceptions about disability. Through adaptive sports, inclusive games, and community fitness activities, we create opportunities for persons with disabilities to showcase their abilities, build confidence, and foster social inclusion while improving physical and mental health.",
    },
    {
      image: breadCoat,
      title: "Bread and Coat Campaign",
      description:
        "Annual drive providing food, clothing, and basic support to people with disabilities during festive seasons, bringing dignity and care.",
      icon: <Home className="h-6 w-6 text-gray-600" />,
      category: "Support",
      fullDescription:
        "An annual drive providing food, clothing, and basic support to people with disabilities during festive seasons, bringing dignity and care to those most in need. This campaign addresses the heightened vulnerability of persons with disabilities during holiday periods when basic needs become more challenging to meet. We provide essential supplies, warm meals, and emotional support, ensuring that community members can celebrate with dignity and feel the warmth of community care during important cultural and religious celebrations.",
    },
    {
      image: agricultureProject,
      title: "Inclusive Agriculture Project",
      description:
        "Farming initiative to combat malnutrition among children with disabilities by growing and distributing nutritious food.",
      icon: <TreePine className="h-6 w-6 text-gray-600" />,
      category: "Agriculture",
      fullDescription:
        "A farming initiative to combat malnutrition among children with disabilities by growing and distributing nutritious food. Our inclusive agriculture project empowers persons with disabilities to participate in food production while addressing critical nutrition needs in the community. We provide adaptive farming tools, accessible growing spaces, and training in sustainable agriculture techniques, enabling participants to grow their own food and contribute to community food security.",
    },
    {
      image: greenLightProject,
      title: "Green Light Project",
      description:
        "Environmental and climate action initiative funded by UNHCR/Innovation Service, led by youth with disabilities tackling environmental challenges.",
      icon: <Lightbulb className="h-6 w-6 text-gray-600" />,
      category: "Environment",
      fullDescription:
        "The Green Light Project is an environmental and climate action initiative funded by UNHCR/Innovation Service. Led by youth with disabilities, tackling environmental challenges within forced displacement settings while creating livelihood opportunities. By combining innovation with inclusion, the project delivers both social and environmental impact, proving that youth with disabilities can lead the way in building a greener, more resilient future. This groundbreaking initiative demonstrates the leadership potential of persons with disabilities in addressing global challenges.",
    },
    {
      image: therapySupport,
      title: "All Our Services",
      description:
        "Comprehensive support programs designed to empower persons with disabilities and their families.",
      icon: <Heart className="h-6 w-6 text-gray-600" />,
      category: "All",
      fullDescription:
        "SEED provides comprehensive support programs designed to empower persons with disabilities and their families. Our integrated approach addresses protection, health, education, livelihood, and environmental needs while promoting dignity, inclusion, and self-reliance. Through our diverse services, we create opportunities for persons with disabilities to thrive, contribute to their communities, and build fulfilling lives with the support they need to reach their full potential.",
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
                <span className="text-gray-700 flex flex-row">
                  Our Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SEED delivers comprehensive programs across Education,
                Livelihood, Protection, Health, and Environment. We provide
                inclusive education and literacy programs, skills training for
                economic empowerment, protection services for vulnerable
                populations, health and psychosocial support, and environmental
                sustainability initiatives. Through these integrated programs,
                we create opportunities for persons with disabilities to thrive
                and contribute meaningfully to their communities.
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
                  <Link to="/about">
                    Learn More <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-first md:order-last">
              <img
                src={therapySupport}
                alt="Our Services - Therapy and Psychosocial Support"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service - Green Light Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Featured Initiative
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Green Light Project
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An environmental and climate action initiative funded by
                  UNHCR/Innovation Service. Led by youth with disabilities,
                  tackling environmental challenges within forced displacement
                  settings while creating livelihood opportunities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Environmental Action
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Youth Leadership
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    UNHCR Funded
                  </span>
                </div>
                <Button
                  className="bg-gray-800 hover:bg-gray-900"
                  onClick={() => setSelectedService(services[8])}
                >
                  Learn More About This Project
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src={greenLightProject}
                  alt="Green Light Project - Environmental Initiative"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Our Services Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We begin by understanding your unique needs and circumstances
                through personalized consultations.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">
                Program Matching
              </h3>
              <p className="text-gray-600 text-sm">
                Our team connects you with the most appropriate programs and
                resources based on your goals.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">
                Implementation
              </h3>
              <p className="text-gray-600 text-sm">
                We provide hands-on support and guidance as you participate in
                our programs and services.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">
                Success & Growth
              </h3>
              <p className="text-gray-600 text-sm">
                We celebrate your achievements and continue to support your
                ongoing development and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support programs designed to empower persons with
              disabilities and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 9).map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Close Button */}
            <div className="relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedService.title}
                </h2>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                  {selectedService.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gray-800 hover:bg-gray-900"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to="/join">Get Involved</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to="/support">Support This Program</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
