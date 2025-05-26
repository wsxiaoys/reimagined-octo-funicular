"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Code2, 
  Zap, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Star, 
  Users, 
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Brain,
  Rocket,
  Target,
  Globe
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to your backend
    console.log("Waitlist signup:", email);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-800/20 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Tabby AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation AI Assistant
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Code Smarter with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tabby AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your development workflow with intelligent code completion, 
            real-time suggestions, and AI-powered debugging that understands your codebase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16"
        >
          <img 
            src="https://picsum.photos/1200/600?random=1" 
            alt="Tabby AI Interface"
            className="rounded-2xl shadow-2xl mx-auto border border-purple-500/20"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of coding with AI-powered tools designed to enhance your productivity
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Intelligent Code Completion",
              description: "AI-powered suggestions that understand context and predict your next lines of code with remarkable accuracy."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Real-time Error Detection",
              description: "Catch bugs before they happen with advanced static analysis and intelligent error prediction."
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Smart Refactoring",
              description: "Automatically improve code quality with AI-suggested refactoring patterns and optimizations."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Security Scanning",
              description: "Built-in security analysis that identifies vulnerabilities and suggests secure coding practices."
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Performance Optimization",
              description: "AI-driven performance insights and suggestions to make your code faster and more efficient."
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Multi-Language Support",
              description: "Support for 50+ programming languages with specialized AI models for each language."
            }
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "500K+", label: "Developers" },
            { number: "2M+", label: "Lines of Code Generated" },
            { number: "85%", label: "Faster Development" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what developers are saying about Tabby AI
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Sarah Chen",
              role: "Senior Full Stack Developer",
              company: "TechCorp",
              content: "Tabby AI has revolutionized my coding workflow. The intelligent suggestions are incredibly accurate and have reduced my development time by 40%.",
              avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=8b5cf6&color=fff"
            },
            {
              name: "Marcus Rodriguez",
              role: "Lead DevOps Engineer",
              company: "CloudScale",
              content: "The security scanning feature caught vulnerabilities I would have missed. It's like having a senior security engineer reviewing my code 24/7.",
              avatar: "https://ui-avatars.com/api/?name=Marcus+Rodriguez&background=ec4899&color=fff"
            },
            {
              name: "Emily Watson",
              role: "Frontend Architect",
              company: "DesignLab",
              content: "The multi-language support is phenomenal. Whether I'm working in React, Python, or Go, Tabby AI understands the context perfectly.",
              avatar: "https://ui-avatars.com/api/?name=Emily+Watson&background=06b6d4&color=fff"
            }
          ].map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-slate-800/50 border-purple-500/20 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your development needs
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              name: "Free",
              price: "$0",
              period: "forever",
              description: "Perfect for getting started",
              features: [
                "Basic code completion",
                "5 AI suggestions per day",
                "Community support",
                "Single project"
              ],
              popular: false
            },
            {
              name: "Pro",
              price: "$29",
              period: "per month",
              description: "For professional developers",
              features: [
                "Advanced AI completion",
                "Unlimited suggestions",
                "Real-time error detection",
                "Security scanning",
                "Priority support",
                "Unlimited projects"
              ],
              popular: true
            },
            {
              name: "Team",
              price: "$99",
              period: "per month",
              description: "For development teams",
              features: [
                "Everything in Pro",
                "Team collaboration",
                "Shared code insights",
                "Admin dashboard",
                "Custom integrations",
                "Dedicated support"
              ],
              popular: false
            }
          ].map((plan, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className={`relative h-full ${plan.popular ? 'border-purple-500 bg-slate-800/70' : 'bg-slate-800/50 border-purple-500/20'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : 'bg-slate-700 hover:bg-slate-600'} text-white`}
                  >
                    {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Waitlist Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 text-center border border-purple-500/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of AI-powered development. 
            Get early access and exclusive updates.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400"
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
              >
                Join Waitlist
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-300">
                <Check className="w-6 h-6 mx-auto mb-2" />
                <p>Thank you! You've been added to our waitlist.</p>
              </div>
            </div>
          )}
          
          <p className="text-sm text-gray-400 mt-4">
            Join over 50,000 developers already on the waitlist
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/20 bg-slate-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Tabby AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering developers with intelligent AI assistance for faster, smarter coding.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-purple-800/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2025 Tabby AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
