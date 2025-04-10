
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { CalendarPlus, Clock, Users, UserCircle, Plus } from 'lucide-react';

// Mock data for sessions
const initialSessions = [
  {
    id: 1,
    title: "Motivational Workshop with Gayatri Mam",
    date: "2025-04-15",
    time: "10:00 AM",
    type: "Motivational Speaker",
    location: "Main Hall",
    description: "An inspiring session to motivate and encourage residents."
  },
  {
    id: 2,
    title: "Mental Health Check-in",
    date: "2025-04-18",
    time: "2:00 PM",
    type: "Psychologist",
    location: "Counseling Room",
    description: "Regular mental health check-in with our in-house psychologist."
  },
  {
    id: 3,
    title: "Career Guidance Session",
    date: "2025-04-22",
    time: "11:30 AM",
    type: "Mentor",
    location: "Study Room",
    description: "Guidance on educational and career opportunities."
  }
];

const SchedulePage = () => {
  const [sessions, setSessions] = useState(initialSessions);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSession, setNewSession] = useState({
    title: "",
    date: "",
    time: "",
    type: "",
    location: "",
    description: ""
  });
  const { toast } = useToast();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSession({ ...newSession, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setNewSession({ ...newSession, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSession.title || !newSession.date || !newSession.time || !newSession.type) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    const newId = sessions.length > 0 ? Math.max(...sessions.map(s => s.id)) + 1 : 1;
    
    setSessions([...sessions, { id: newId, ...newSession }]);
    setIsDialogOpen(false);
    setNewSession({
      title: "",
      date: "",
      time: "",
      type: "",
      location: "",
      description: ""
    });
    
    toast({
      title: "Session scheduled",
      description: "The new session has been added to the schedule.",
    });
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Motivational Speaker":
        return <UserCircle className="h-5 w-5 text-yellow-500" />;
      case "Psychologist":
        return <UserCircle className="h-5 w-5 text-blue-500" />;
      case "Mentor":
        return <UserCircle className="h-5 w-5 text-green-500" />;
      default:
        return <UserCircle className="h-5 w-5 text-gray-500" />;
    }
  };
  
  return (
    <div>
      <section className="bg-gradient-to-br from-lovely-blue/30 to-lovely-green/30 py-16">
        <div className="section-container">
          <h1 className="section-title">Session Schedule</h1>
          <p className="section-subtitle">
            Browse upcoming sessions with our motivational speakers, mentors, and psychologists.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Upcoming Sessions</h2>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-lovely-green hover:bg-lovely-green/80 text-gray-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Session
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add New Session</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new session. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        value={newSession.title}
                        onChange={handleInputChange}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Date
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={newSession.date}
                        onChange={handleInputChange}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="time" className="text-right">
                        Time
                      </Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={newSession.time}
                        onChange={handleInputChange}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="type" className="text-right">
                        Type
                      </Label>
                      <Select 
                        value={newSession.type} 
                        onValueChange={(value) => handleSelectChange("type", value)}
                      >
                        <SelectTrigger id="type" className="col-span-3">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Motivational Speaker">Motivational Speaker</SelectItem>
                          <SelectItem value="Psychologist">Psychologist</SelectItem>
                          <SelectItem value="Mentor">Mentor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="location" className="text-right">
                        Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={newSession.location}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Input
                        id="description"
                        name="description"
                        value={newSession.description}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-primary">Save Session</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {sessions.map((session) => (
                  <Card key={session.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-gradient-to-br from-lovely-blue to-lovely-green p-6 flex flex-col justify-center items-center text-center">
                        <CalendarPlus className="h-10 w-10 text-white mb-2" />
                        <h3 className="text-white font-medium">{formatDate(session.date)}</h3>
                        <div className="flex items-center mt-2 text-white/90">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle>{session.title}</CardTitle>
                            {getTypeIcon(session.type)}
                          </div>
                          <CardDescription className="flex items-center">
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs mr-2">
                              {session.type}
                            </span>
                            {session.location && (
                              <span className="text-gray-500 text-sm">
                                Location: {session.location}
                              </span>
                            )}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 py-4">
                          <p className="text-gray-600">{session.description}</p>
                        </CardContent>
                        <CardFooter className="p-0 pt-2">
                          <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                            View Details
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Calendar</CardTitle>
                  <CardDescription>Browse scheduled sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Session Types</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-sm">Motivational Speaker</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Psychologist</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Mentor</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Need a Session?</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      If you'd like to request a specific session or volunteer as a mentor, please contact us.
                    </p>
                    <Button className="w-full" variant="outline">Contact Us</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
