
import React, { useState } from 'react';
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { 
  Music, 
  BookOpen, 
  Award, 
  Brush, 
  Mic, 
  Users, 
  Plus, 
  Search, 
  Filter
} from 'lucide-react';

// Mock data for talent entries
const initialTalents = [
  {
    id: 1,
    name: "Ram",
    skill: "Singer",
    description: "Talented vocalist with a passion for classical music.",
    experience: "5 years",
    icon: "music"
  },
  {
    id: 2,
    name: "Chellatha",
    skill: "Storyteller",
    description: "Captivating storyteller who brings characters to life.",
    experience: "8 years",
    icon: "book"
  },
  {
    id: 3,
    name: "Mariyappan",
    skill: "Self-Defense",
    description: "Expert in teaching practical self-defense techniques.",
    experience: "4 years",
    icon: "award"
  }
];

const TalentPage = () => {
  const [talents, setTalents] = useState(initialTalents);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTalent, setNewTalent] = useState({
    name: "",
    skill: "",
    description: "",
    experience: "",
    icon: "music"
  });
  const { toast } = useToast();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTalent({ ...newTalent, [name]: value });
  };
  
  const handleIconChange = (icon: string) => {
    setNewTalent({ ...newTalent, icon });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTalent.name || !newTalent.skill) {
      toast({
        title: "Missing information",
        description: "Please provide at least a name and skill.",
        variant: "destructive"
      });
      return;
    }
    
    const newId = talents.length > 0 ? Math.max(...talents.map(t => t.id)) + 1 : 1;
    
    setTalents([...talents, { id: newId, ...newTalent }]);
    setIsDialogOpen(false);
    setNewTalent({
      name: "",
      skill: "",
      description: "",
      experience: "",
      icon: "music"
    });
    
    toast({
      title: "Talent added",
      description: `${newTalent.name} has been added to the talent showcase.`,
    });
  };
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "music":
        return <Music className="h-6 w-6" />;
      case "book":
        return <BookOpen className="h-6 w-6" />;
      case "award":
        return <Award className="h-6 w-6" />;
      case "brush":
        return <Brush className="h-6 w-6" />;
      case "mic":
        return <Mic className="h-6 w-6" />;
      default:
        return <Music className="h-6 w-6" />;
    }
  };
  
  const filteredTalents = talents.filter(talent => 
    talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    talent.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <section className="bg-gradient-to-br from-lovely-yellow/30 to-lovely-purple/30 py-16">
        <div className="section-container">
          <h1 className="section-title">Talent Showcase</h1>
          <p className="section-subtitle">
            Discover the amazing talents and skills of residents in our homes and orphanages.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search talents..."
                className="pl-9 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-lovely-purple hover:bg-lovely-purple/80 text-gray-800 flex-1 md:flex-none">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Talent
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Add New Talent</DialogTitle>
                    <DialogDescription>
                      Enter the details of the person and their talent. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={newTalent.name}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="skill" className="text-right">
                          Skill
                        </Label>
                        <Input
                          id="skill"
                          name="skill"
                          value={newTalent.skill}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="experience" className="text-right">
                          Experience
                        </Label>
                        <Input
                          id="experience"
                          name="experience"
                          value={newTalent.experience}
                          onChange={handleInputChange}
                          className="col-span-3"
                          placeholder="e.g., 3 years"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="description" className="text-right pt-2">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={newTalent.description}
                          onChange={handleInputChange}
                          className="col-span-3"
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                          Icon
                        </Label>
                        <div className="col-span-3 flex flex-wrap gap-2">
                          {["music", "book", "award", "brush", "mic"].map((icon) => (
                            <Button
                              key={icon}
                              type="button"
                              variant={newTalent.icon === icon ? "default" : "outline"}
                              size="icon"
                              className={`rounded-full ${newTalent.icon === icon ? "bg-primary" : ""}`}
                              onClick={() => handleIconChange(icon)}
                            >
                              {getIcon(icon)}
                              <span className="sr-only">{icon}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-primary">Save Talent</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {filteredTalents.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No talents found</h3>
              <p className="text-gray-500">Try changing your search or add a new talent.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTalents.map((talent) => (
                <Card key={talent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lovely-peach to-lovely-pink flex items-center justify-center">
                        {getIcon(talent.icon)}
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                        {talent.skill}
                      </div>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl">{talent.name}</CardTitle>
                      {talent.experience && (
                        <CardDescription>Experience: {talent.experience}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="p-0 mb-6">
                      <p className="text-gray-600 mt-2">{talent.description}</p>
                    </CardContent>
                    <CardFooter className="p-0 flex justify-between">
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <section className="section-container bg-lovely-green/20 rounded-lg p-8 mt-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Showcase Your Talent</h2>
          <p className="text-gray-600 mb-6">
            We believe in celebrating the unique skills and talents of every individual.
            If you know someone with a special talent, please help us add them to our showcase.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary" onClick={() => setIsDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Talent Entry
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default TalentPage;
