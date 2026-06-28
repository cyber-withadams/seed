import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Target,
  Users,
  Star,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Award,
  Shield,
  HandHeart,
  Gift,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import breadCoat from "@/assets/bread.jpg";

const SupportPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState("");

  const presetAmounts = ["25", "50", "100", "250", "500", "1000"];

  const donationTiers = [
    {
      name: "Protection Supporter",
      amount: "$25+",
      benefits: [
        "Monthly impact updates",
        "Refugee protection reports",
        "Community recognition",
      ],
      icon: <Shield className="h-8 w-8 text-gray-600" />,
    },
    {
      name: "Education Champion",
      amount: "$100+",
      benefits: [
        "All Protection Supporter benefits",
        "Education program updates",
        "Student success stories",
        "Annual impact report",
      ],
      icon: <Target className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "Livelihood Partner",
      amount: "$500+",
      benefits: [
        "All Education Champion benefits",
        "Livelihood program insights",
        "Economic empowerment metrics",
        "Recognition on impact dashboard",
      ],
      icon: <TrendingUp className="h-8 w-8 text-gray-600" />,
    },
    {
      name: "Humanitarian Visionary",
      amount: "$1000+",
      benefits: [
        "All Livelihood Partner benefits",
        "Quarterly impact calls",
        "Program visit opportunities",
        "Custom impact reporting",
      ],
      icon: <HandHeart className="h-8 w-8 text-purple-600" />,
    },
  ];

  const impactMetrics = [
    {
      value: "$25",
      impact: "Provides protection case management for one refugee family",
    },
    {
      value: "$50",
      impact:
        "Supports disability inclusion services for one person with disabilities",
    },
    {
      value: "$100",
      impact: "Funds educational materials for 10 refugee children",
    },
    {
      value: "$250",
      impact: "Sponsors livelihood training for 5 refugee youth",
    },
    {
      value: "$500",
      impact:
        "Provides health screening and psychosocial support for 25 refugees",
    },
    {
      value: "$1000",
      impact:
        "Funds climate-smart agriculture initiative for one refugee community",
    },
  ];

  const handleDonation = () => {
    const amount = selectedAmount || donationAmount;
    if (amount) {
      alert(`Thank you for your ${donationType} donation of $${amount}!`);
      setDonationAmount("");
      setSelectedAmount("");
    }
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
                  Support Our Mission
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your investment supports refugee-led humanitarian operations in
                Nakivale Refugee Settlement. Every contribution drives
                protection, education, livelihood, and health programs for
                persons with disabilities and their families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900"
                >
                  <Link to="#donation-form">
                    Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/join">
                    Other Ways to Help <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-first md:order-last">
              <img
                src={breadCoat}
                alt="Support Our Mission - Bread and Coat Campaign"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
              <p className="text-gray-600">
                Choose how you'd like to support our work
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label>Donation Type</Label>
                  <Select value={donationType} onValueChange={setDonationType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">
                        One-Time Donation
                      </SelectItem>
                      <SelectItem value="monthly">Monthly Donation</SelectItem>
                      <SelectItem value="annual">Annual Donation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Quick Select Amount</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2">
                    {presetAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={
                          selectedAmount === amount ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setDonationAmount("");
                        }}
                        className={
                          selectedAmount === amount
                            ? "bg-gray-600 hover:bg-gray-700"
                            : ""
                        }
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter custom amount"
                    value={donationAmount}
                    onChange={(e) => {
                      setDonationAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    min="1"
                  />
                </div>

                {(selectedAmount || donationAmount) && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-gray-600 mr-2" />
                      <span className="font-semibold text-gray-800">
                        Your Impact
                      </span>
                    </div>
                    <p className="text-gray-700">
                      {impactMetrics.find(
                        (m) =>
                          m.value === `$${selectedAmount || donationAmount}`,
                      )?.impact ||
                        `Your donation of $${selectedAmount || donationAmount} will help us continue our mission of growing stronger communities.`}
                    </p>
                  </div>
                )}

                <Button
                  onClick={handleDonation}
                  size="lg"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                  disabled={!selectedAmount && !donationAmount}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Donate{" "}
                  {donationType === "monthly"
                    ? "Monthly"
                    : donationType === "annual"
                      ? "Annually"
                      : "Now"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Giving Levels & Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  index === 3 ? "border-yellow-400 border-2" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{tier.icon}</div>
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {tier.amount}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Other Ways to Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Gift className="h-6 w-6 mr-2 text-blue-600" />
                  In-Kind Donations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Donate goods and services that directly support our programs
                  and operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• School supplies and books</li>
                  <li>• Office equipment</li>
                  <li>• Professional services</li>
                  <li>• Food and household items</li>
                </ul>
                <Button variant="outline" className="w-full">
                  View Wishlist
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="h-6 w-6 mr-2 text-gray-600" />
                  Volunteer Your Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Share your skills and time to make a direct impact in our
                  community programs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Program assistance</li>
                  <li>• Event support</li>
                  <li>• Professional mentoring</li>
                  <li>• Administrative help</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/join">Become a Volunteer</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Target className="h-6 w-6 mr-2 text-purple-600" />
                  Corporate Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Partner with us through corporate giving programs and employee
                  engagement.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Corporate matching gifts</li>
                  <li>• Employee volunteer programs</li>
                  <li>• Event sponsorships</li>
                  <li>• Strategic partnerships</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn About Partnerships
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Impact at Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 items-center">
                <DollarSign className="h-8 w-8 text-gray-600" />
                <div className="text-4xl font-bold text-gray-600 mb-0">92%</div>
              </div>
              <div className="text-gray-600">of donations go to programs</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 items-center">
                <TrendingUp className="h-8 w-8 text-gray-600" />
                <div className="text-4xl font-bold text-gray-600 mb-0">
                  10,000+
                </div>
              </div>
              <div className="text-gray-600">lives impacted annually</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 items-center">
                <Award className="h-8 w-8 text-gray-600" />
                <div className="text-4xl font-bold text-gray-600 mb-0">
                  4.8/5
                </div>
              </div>
              <div className="text-gray-600">community satisfaction rating</div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Recent Accomplishments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">
                      Community Garden Expansion
                    </div>
                    <div className="text-gray-600 text-sm">
                      Added 5 new garden plots serving 50 additional families
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">
                      Youth Scholarship Program
                    </div>
                    <div className="text-gray-600 text-sm">
                      Awarded 25 scholarships for higher education
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">
                      Health Initiative Success
                    </div>
                    <div className="text-gray-600 text-sm">
                      Provided 1,000+ free health screenings this year
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;
