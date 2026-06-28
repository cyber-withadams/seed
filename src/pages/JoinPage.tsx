import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Heart,
  Target,
  Award,
  Shield,
  Clock,
  GraduationCap,
  Stethoscope,
  TreePine,
  Building,
  Send,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  User,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import livelihoodTraining from "@/assets/Livelihood and Skills Training.jpg";

const JoinPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    skills: "",
    motivation: "",
    newsletter: false,
  });

  const [showServiceUnavailable, setShowServiceUnavailable] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setShowServiceUnavailable(true);
    setTimeout(() => setShowServiceUnavailable(false), 3000);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      availability: "",
      skills: "",
      motivation: "",
      newsletter: false,
    });
  };

  const opportunities = [
    {
      icon: <Shield className="h-8 w-8 text-gray-600" />,
      title: "Protection Case Worker",
      description:
        "Support refugee protection services, case management, and rights advocacy in Nakivale Refugee Settlement.",
      timeCommitment: "15-20 hours/week",
      skills: [
        "Case Management",
        "Human Rights",
        "Documentation",
        "Cultural Sensitivity",
      ],
      urgent: true,
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Disability Inclusion Assistant",
      description:
        "Assist with disability inclusion programs, accessibility support, and specialized services for persons with disabilities.",
      timeCommitment: "10-15 hours/week",
      skills: [
        "Sign Language",
        "Disability Support",
        "Patience",
        "Communication",
      ],
      urgent: true,
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-gray-600" />,
      title: "Education Program Volunteer",
      description:
        "Support educational programs, literacy classes, and skills training for refugee children and youth.",
      timeCommitment: "8-12 hours/week",
      skills: [
        "Teaching",
        "Mentoring",
        "Curriculum Development",
        "Language Support",
      ],
      urgent: false,
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-red-600" />,
      title: "Health Outreach Assistant",
      description:
        "Assist with health screening, mental health support, and psychosocial services for refugee communities.",
      timeCommitment: "12-16 hours/week",
      skills: ["Health Support", "First Aid", "Counseling", "Community Health"],
      urgent: true,
    },
    {
      icon: <TreePine className="h-8 w-8 text-emerald-600" />,
      title: "Livelihood & Agriculture Support",
      description:
        "Support climate-smart agriculture initiatives, livelihood training, and food security programs.",
      timeCommitment: "10-15 hours/week",
      skills: [
        "Agriculture",
        "Training",
        "Business Development",
        "Sustainability",
      ],
      urgent: false,
    },
    {
      icon: <Building className="h-8 w-8 text-purple-600" />,
      title: "Operations & Logistics Support",
      description:
        "Assist with camp operations, logistics coordination, and administrative support for humanitarian programs.",
      timeCommitment: "15-20 hours/week",
      skills: [
        "Logistics",
        "Administration",
        "Coordination",
        "Problem Solving",
      ],
      urgent: false,
    },
  ];

  const benefits = [
    {
      title: "Make a Real Impact",
      description:
        "See the direct results of your contributions in our community.",
      icon: <Target className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Develop New Skills",
      description:
        "Gain valuable experience and develop new abilities through hands-on work.",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Build Your Network",
      description:
        "Connect with like-minded individuals and community leaders.",
      icon: <Users className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Flexible Scheduling",
      description:
        "Find opportunities that fit your availability and lifestyle.",
      icon: <Clock className="h-6 w-6 text-orange-600" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Education Volunteer",
      message:
        "Volunteering with SeedMove has been incredibly rewarding. I've seen firsthand how our programs are changing lives in our community.",
      duration: "2 years",
    },
    {
      name: "Michael Chen",
      role: "Event Coordinator",
      message:
        "The skills I've gained and the people I've met through SeedMove have been invaluable. It's more than volunteering—it's being part of a movement.",
      duration: "1 year",
    },
    {
      name: "Emily Rodriguez",
      role: "Outreach Volunteer",
      message:
        "SeedMove gave me the opportunity to give back while developing my professional skills. It's a win-win that I'm proud to be part of.",
      duration: "6 months",
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
                <span className="text-gray-700 flex flex-row">Join Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our refugee-led humanitarian team in Nakivale Refugee
                Settlement. Whether you're a professional seeking meaningful
                work or a community member wanting to make a difference, there's
                a place for you in our mission to support persons with
                disabilities and their families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900"
                >
                  <Link to="#volunteer-form">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
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
                src={livelihoodTraining}
                alt="Join Our Team - Livelihood and Skills Training opportunities"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Volunteer With Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Volunteer Opportunities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {opportunity.icon}
                    {opportunity.urgent && (
                      <Badge variant="destructive">Urgent Need</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {opportunity.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      Time Commitment:
                    </div>
                    <div className="text-sm text-gray-600">
                      {opportunity.timeCommitment}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      Skills Needed:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gray-600 hover:bg-gray-700"
                    onClick={() => {
                      const element = document.getElementById("volunteer-form");
                      element?.scrollIntoView({ behavior: "smooth" });
                      setFormData((prev) => ({
                        ...prev,
                        interest: opportunity.title,
                      }));
                    }}
                  >
                    Apply for This Role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Start Your Journey</CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you about next steps
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label>Area of Interest *</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) =>
                      handleSelectChange("interest", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="program">Program Volunteer</SelectItem>
                      <SelectItem value="outreach">
                        Community Outreach
                      </SelectItem>
                      <SelectItem value="events">Event Support</SelectItem>
                      <SelectItem value="professional">
                        Professional Services
                      </SelectItem>
                      <SelectItem value="environment">
                        Environment and Energy
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Availability</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) =>
                      handleSelectChange("availability", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="evenings">Evenings</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="as-needed">As Needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Relevant Skills & Experience</Label>
                  <Textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="Tell us about any skills or experience that might be relevant..."
                  />
                </div>

                <div>
                  <Label htmlFor="motivation">
                    Why do you want to volunteer with SeedMove? *
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    rows={4}
                    required
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Share what motivates you to join our mission..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        newsletter: checked as boolean,
                      }))
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    I'd like to receive updates about SeedMove's work and
                    volunteer opportunities
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gray-600 hover:bg-gray-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Hear From Our Volunteers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.message}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-600">
                      Volunteer for {testimonial.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* SEED Board Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            SEED LIST OF BOARD MEMBERS
          </h2>

          {/* Top Row - Chairperson and Vice Chairperson */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    TUKWASIIBWE MOSES
                  </h3>
                  <p className="text-gray-600 mb-1">Chairperson</p>
                  <p className="text-gray-600">+256-759-476820</p>
                  <p className="text-gray-600">+256-783-756547</p>
                  <p className="text-gray-600 text-sm">
                    mtukwasiibwe@beg.bsu.ac.ug
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    ELISHA BYALUNGWE
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Vice Chairperson & Advocacy Lead
                  </p>
                  <p className="text-gray-600">+1(604)3028091</p>
                  <p className="text-gray-600 text-sm">elishabyal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Board Members - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Debaba Maarifa{" "}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Junior Administration & Partnership Director
                  </p>
                  <p className="text-gray-600">+(256)786539556</p>
                  <p className="text-gray-600 text-sm">
                    juniormaarifa@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Shukuru Bisimwa Alvin
                  </h3>
                  <p className="text-gray-600 mb-1">Secretary</p>
                  <p className="text-gray-600">+(256)775506917</p>
                  <p className="text-gray-600 text-sm">
                    bisimwaalvin@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Alison May Campbell
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Capacity Building & Fundraising Director
                  </p>
                  <p className="text-gray-600">+44 7967 169602</p>
                  <p className="text-gray-600 text-sm">
                    alisontelfer3@btinternet.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Gorreth Ayebale
                  </h3>
                  <p className="text-gray-600 mb-1">Policy & Legal Advisor</p>
                  <p className="text-gray-600">+256 775 768061</p>
                  <p className="text-gray-600 text-sm">
                    gorrethayebale83@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Joseline Nakanwagi
                  </h3>
                  <p className="text-gray-600 mb-1">Program Director</p>
                  <p className="text-gray-600">+256 773 420857</p>
                  <p className="text-gray-600 text-sm">
                    jnakanwagi33@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="h-16 w-16 text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Watimbwa Babingwa Olivier
                  </h3>
                  <p className="text-gray-600 mb-1">Finance Director</p>
                  <p className="text-gray-600">+1 (716) 495-8793</p>
                  <p className="text-gray-600 text-sm">babiwati1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            TESTIMONIALS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">NJ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      NIYOMUHOZA JOSELINE
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Through SEED, I was selected by Windle International to
                  access education. As a girl child with speech and hearing
                  impairment, opportunities are often limited, but SEED's
                  support opened the door for me to continue learning. Today, I
                  feel empowered to pursue my dreams and show other girls with
                  disabilities that education is possible and transformative."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">IY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      IRAJENA YVONNE
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "My name is Irajena Yvonne, a youth with speech and hearing
                  impairment living in Nakivale. Through SEED's Environmental
                  Conservation Initiative on plastic pollution and waste
                  management, I was given the opportunity to participate in
                  meaningful work that benefits our community. This livelihood
                  opportunity has allowed me to sustain myself and support my
                  family, while also contributing to a cleaner, healthier
                  environment. SEED has shown me that inclusion and empowerment
                  can go hand in hand with protecting our surroundings."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">KT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      KANYERE THEREZA
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "My name is Kanyere Thereza, and through SEED's Inclusive
                  Agriculture Program I have been given the opportunity to
                  access land for farming. Using the intercropping approach, we
                  are able to grow diverse crops that help us fight hunger in
                  our households. At the same time, we are planting and
                  maintaining trees within a woodlot established by our group of
                  new arrivals under SEED. This initiative has not only improved
                  food security for our families but also strengthened our
                  commitment to environmental stewardship and community
                  resilience."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">AB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      ASUKULU BILOMBELE
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "My name is Asukulu Bilombele, and as a person with a physical
                  disability I once felt excluded from community decisions. SEED
                  has ignited a powerful movement in the settlement, bringing
                  together people with disabilities to champion inclusion for a
                  better community for all. Through this collective effort, I
                  now participate fully in project planning and community
                  activities. This has given me not only a voice but also the
                  confidence to contribute meaningfully, knowing that our
                  settlement is becoming more inclusive, united, and supportive
                  of every individual's dignity."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="h-full md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">GM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      GILBERT MUSEMBWA NONDO
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "My name is Gilbert Musembwa Nondo. I was housebound for many
                  years due to my disability, unable to move freely or
                  participate in community life. When SEED visited me, they
                  advocated tirelessly until I was able to access a wheelchair.
                  This assistive device has transformed my life, it has given me
                  mobility, dignity, and independence. I can now move around my
                  community, attend church, and reconnect with people. SEED's
                  support has not only restored my freedom but also renewed my
                  sense of belonging and hope."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Visit Our Location
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Card */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-gray-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    Nyarugugu C Village
                    <br />
                    Nakivale Refugee Settlement
                    <br />
                    Isingiro District, SouthWest Uganda
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contacts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+256 775 506 917</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+256 708 666 968</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>bisimwaalvin@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Branches</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building className="h-4 w-4 mr-2 mt-1 text-gray-600" />
                      <div>
                        <div className="font-medium">Main Branch</div>
                        <div className="text-gray-600">Nakivale Base Camp</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="h-4 w-4 mr-2 mt-1 text-gray-600" />
                      <div>
                        <div className="font-medium">Extension Branch</div>
                        <div className="text-gray-600">Rubondo Sub-zone</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.7784,30.9478,-0.7784,30.9478&layer=mapnik&marker=-0.7783813341243302,30.947943527766284"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        Nyarugugu C Village, Nakivale Refugee Settlement,
                        Isingiro District, SouthWest Uganda
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Service Unavailable Popup */}
      {showServiceUnavailable && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center">
            <span>Service not yet implemented</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinPage;
