
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Home,
  Clock,
  Send
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message sent",
      description: "Thank you for your message. We'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div>
      <section className="bg-gradient-to-br from-lovely-peach/30 to-lovely-purple/30 py-16">
        <div className="section-container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            We're here to listen and help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lovely-blue/30 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        8438386610
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        9080558409
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        7539954582
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        9600630208
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        9360877990
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lovely-green/30 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      lovelyhome010@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lovely-yellow/30 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Office Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lovely-pink/30 p-3 rounded-full mr-4">
                    <Home className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Our Mission</h3>
                    <p className="text-gray-600 italic">
                      "We are here to hear." - This simple phrase guides everything we do at Lovely Home.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Card className="bg-lovely-purple/10 border-lovely-purple/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-purple-500" />
                      How Can We Help?
                    </CardTitle>
                    <CardDescription>
                      Here are some common ways we can assist you:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mt-1 bg-lovely-green rounded-full p-1 mr-2">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span>Information about our homes and facilities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-lovely-green rounded-full p-1 mr-2">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span>Donation and support inquiries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-lovely-green rounded-full p-1 mr-2">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span>Volunteering and mentorship opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-lovely-green rounded-full p-1 mr-2">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span>Schedule visits and sessions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is your message about?" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Type your message here..." 
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button className="mt-6 w-full btn-primary-lovely" type="submit">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container bg-lovely-blue/10 rounded-lg p-8 mt-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect and Make a Difference</h2>
          <p className="text-gray-600 mb-6">
            Your support, ideas, and involvement are crucial to our mission. 
            Whether you want to contribute, volunteer, or simply learn more about what we do, 
            we're here to listen and collaborate.
          </p>
          <div className="inline-flex items-center space-x-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Serving communities across India</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
