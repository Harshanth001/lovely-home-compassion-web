
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heart, CreditCard, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DonatePage = () => {
  const [amount, setAmount] = useState<string>('500');
  const [currency, setCurrency] = useState<string>('INR');
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const { toast } = useToast();
  
  const currencySymbols: Record<string, string> = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
  };
  
  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: `Your ${currencySymbols[currency]}${amount} donation will make a difference.`,
      duration: 5000,
    });
  };
  
  return (
    <div>
      <section className="bg-gradient-to-br from-lovely-peach/30 to-lovely-yellow/30 py-16">
        <div className="section-container">
          <h1 className="section-title">Make a Donation</h1>
          <p className="section-subtitle">
            Your contribution helps us provide care, resources, and support to individuals in homes and orphanages.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Donation Helps</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-lovely-green rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Essential Supplies</h3>
                    <p className="text-gray-600 text-sm">Provide food, clothing, and hygiene products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-lovely-green rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Healthcare Support</h3>
                    <p className="text-gray-600 text-sm">Medical check-ups and health treatments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-lovely-green rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Educational Resources</h3>
                    <p className="text-gray-600 text-sm">Books, learning materials, and skill development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-lovely-green rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Professional Mentorship</h3>
                    <p className="text-gray-600 text-sm">Access to psychologists and motivational speakers</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Card className="bg-lovely-blue/10 border-lovely-blue/30">
                  <CardHeader>
                    <CardTitle className="text-xl">Donation Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">₹500</span>
                      <span>Essential supplies for 1 person for a week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">₹1,000</span>
                      <span>Medical checkup for 2 residents</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">₹2,500</span>
                      <span>Educational materials for 5 children</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">₹5,000</span>
                      <span>Sponsor a mentorship session</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Donation Form
                  </CardTitle>
                  <CardDescription>
                    All contributions, big or small, make a difference.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDonation}>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="donation-amount">Donation Amount</Label>
                        <div className="mt-2">
                          <div className="flex space-x-3 mb-3">
                            {['500', '1000', '2500', '5000'].map((preset) => (
                              <Button
                                key={preset}
                                type="button"
                                variant={amount === preset ? "default" : "outline"}
                                className={amount === preset ? "bg-primary" : "border-lovely-peach"}
                                onClick={() => setAmount(preset)}
                              >
                                {currencySymbols[currency]}{preset}
                              </Button>
                            ))}
                          </div>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-gray-500">
                              {currencySymbols[currency]}
                            </span>
                            <Input
                              id="donation-amount"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="rounded-l-none"
                              placeholder="Other amount"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger id="currency" className="mt-2">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                            <SelectItem value="USD">US Dollar ($)</SelectItem>
                            <SelectItem value="EUR">Euro (€)</SelectItem>
                            <SelectItem value="GBP">British Pound (£)</SelectItem>
                            <SelectItem value="JPY">Japanese Yen (¥)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Payment Method</Label>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi">UPI</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="netbanking" id="netbanking" />
                            <Label htmlFor="netbanking">Net Banking</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full btn-primary-lovely" onClick={handleDonation}>
                    Donate {currencySymbols[currency]}{amount}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank You For Your Support</h2>
          <p className="text-gray-600">
            Your generous donations help us continue our mission of supporting individuals in homes and orphanages.
            We are committed to transparency and will use your contributions responsibly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
