
import React, { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";
import { 
  Building, 
  Users, 
  User, 
  Plus, 
  Search, 
  FileText, 
  Calendar, 
  HeartPulse,
  Clock,
  FileEdit
} from 'lucide-react';

// Mock data for homes/facilities
const initialFacilities = [
  {
    id: 1,
    name: "Sunshine Orphanage",
    location: "Chennai",
    type: "Orphanage",
    capacity: 75,
    contactPerson: "Rajesh Kumar",
    contactNumber: "9876543210"
  },
  {
    id: 2,
    name: "Golden Years Home",
    location: "Coimbatore",
    type: "Old Age Home",
    capacity: 50,
    contactPerson: "Anita Sharma",
    contactNumber: "8765432109"
  }
];

// Mock data for people/residents
const initialResidents = [
  {
    id: 1,
    facilityId: 1,
    name: "Ajay Patel",
    age: 12,
    medicalCondition: "Asthma",
    checkupFrequency: "Monthly",
    lastCheckup: "2025-03-15",
    notes: "Needs regular inhaler"
  },
  {
    id: 2,
    facilityId: 2,
    name: "Lakshmi Devi",
    age: 68,
    medicalCondition: "Diabetes",
    checkupFrequency: "Bi-weekly",
    lastCheckup: "2025-04-02",
    notes: "Blood sugar monitoring"
  },
  {
    id: 3,
    facilityId: 1,
    name: "Rahul Singh",
    age: 9,
    medicalCondition: "None",
    checkupFrequency: "Quarterly",
    lastCheckup: "2025-02-20",
    notes: "Regular growth monitoring"
  }
];

const DatabasePage = () => {
  const [facilities, setFacilities] = useState(initialFacilities);
  const [residents, setResidents] = useState(initialResidents);
  const [isAddFacilityOpen, setIsAddFacilityOpen] = useState(false);
  const [isAddResidentOpen, setIsAddResidentOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newFacility, setNewFacility] = useState({
    name: "",
    location: "",
    type: "Orphanage",
    capacity: "",
    contactPerson: "",
    contactNumber: ""
  });
  const [newResident, setNewResident] = useState({
    facilityId: "",
    name: "",
    age: "",
    medicalCondition: "",
    checkupFrequency: "Monthly",
    lastCheckup: "",
    notes: ""
  });
  const { toast } = useToast();
  
  const handleFacilityInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewFacility({ ...newFacility, [name]: value });
  };
  
  const handleResidentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewResident({ ...newResident, [name]: value });
  };
  
  const handleFacilitySelectChange = (name: string, value: string) => {
    setNewFacility({ ...newFacility, [name]: value });
  };
  
  const handleResidentSelectChange = (name: string, value: string) => {
    setNewResident({ ...newResident, [name]: value });
  };
  
  const handleAddFacility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFacility.name || !newFacility.location) {
      toast({
        title: "Missing information",
        description: "Please provide at least a name and location.",
        variant: "destructive"
      });
      return;
    }
    
    const newId = facilities.length > 0 ? Math.max(...facilities.map(f => f.id)) + 1 : 1;
    
    setFacilities([...facilities, { 
      id: newId, 
      ...newFacility,
      capacity: parseInt(newFacility.capacity) || 0
    }]);
    setIsAddFacilityOpen(false);
    setNewFacility({
      name: "",
      location: "",
      type: "Orphanage",
      capacity: "",
      contactPerson: "",
      contactNumber: ""
    });
    
    toast({
      title: "Facility added",
      description: `${newFacility.name} has been added to the database.`,
    });
  };
  
  const handleAddResident = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResident.name || !newResident.facilityId) {
      toast({
        title: "Missing information",
        description: "Please provide at least a name and select a facility.",
        variant: "destructive"
      });
      return;
    }
    
    const newId = residents.length > 0 ? Math.max(...residents.map(r => r.id)) + 1 : 1;
    
    setResidents([...residents, { 
      id: newId, 
      ...newResident,
      facilityId: parseInt(newResident.facilityId),
      age: parseInt(newResident.age) || 0
    }]);
    setIsAddResidentOpen(false);
    setNewResident({
      facilityId: "",
      name: "",
      age: "",
      medicalCondition: "",
      checkupFrequency: "Monthly",
      lastCheckup: "",
      notes: ""
    });
    
    toast({
      title: "Resident added",
      description: `${newResident.name} has been added to the database.`,
    });
  };
  
  const filteredFacilities = facilities.filter(facility => 
    facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    facility.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredResidents = selectedFacility 
    ? residents.filter(resident => resident.facilityId === selectedFacility)
    : residents.filter(resident => 
        resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facilities.find(f => f.id === resident.facilityId)?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  const formatDate = (dateString: string) => {
    if (!dateString) return "Not recorded";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div>
      <section className="bg-gradient-to-br from-lovely-blue/30 to-lovely-purple/30 py-16">
        <div className="section-container">
          <h1 className="section-title">Database Management</h1>
          <p className="section-subtitle">
            Secure admin-only database for managing homes, orphanages, and residents.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="facilities" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="facilities" className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Facilities
                </TabsTrigger>
                <TabsTrigger value="residents" className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Residents
                </TabsTrigger>
              </TabsList>
              
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search..."
                    className="pl-9 w-full md:w-60"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Dialog open={isAddFacilityOpen} onOpenChange={setIsAddFacilityOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-lovely-blue hover:bg-lovely-blue/80 text-gray-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Facility
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add New Facility</DialogTitle>
                      <DialogDescription>
                        Enter the details of the orphanage or old age home.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddFacility}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="facility-name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="facility-name"
                            name="name"
                            value={newFacility.name}
                            onChange={handleFacilityInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="facility-location" className="text-right">
                            Location
                          </Label>
                          <Input
                            id="facility-location"
                            name="location"
                            value={newFacility.location}
                            onChange={handleFacilityInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="facility-type" className="text-right">
                            Type
                          </Label>
                          <Select 
                            value={newFacility.type} 
                            onValueChange={(value) => handleFacilitySelectChange("type", value)}
                          >
                            <SelectTrigger id="facility-type" className="col-span-3">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Orphanage">Orphanage</SelectItem>
                              <SelectItem value="Old Age Home">Old Age Home</SelectItem>
                              <SelectItem value="Mixed">Mixed Facility</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="facility-capacity" className="text-right">
                            Capacity
                          </Label>
                          <Input
                            id="facility-capacity"
                            name="capacity"
                            type="number"
                            value={newFacility.capacity}
                            onChange={handleFacilityInputChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="facility-contact-person" className="text-right">
                            Contact Person
                          </Label>
                          <Input
                            id="facility-contact-person"
                            name="contactPerson"
                            value={newFacility.contactPerson}
                            onChange={handleFacilityInputChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="facility-contact-number" className="text-right">
                            Contact Number
                          </Label>
                          <Input
                            id="facility-contact-number"
                            name="contactNumber"
                            value={newFacility.contactNumber}
                            onChange={handleFacilityInputChange}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-primary">Save Facility</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
                
                <Dialog open={isAddResidentOpen} onOpenChange={setIsAddResidentOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-lovely-green hover:bg-lovely-green/80 text-gray-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Resident
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Add New Resident</DialogTitle>
                      <DialogDescription>
                        Enter the details of the resident.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddResident}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resident-facility" className="text-right">
                            Facility
                          </Label>
                          <Select 
                            value={newResident.facilityId} 
                            onValueChange={(value) => handleResidentSelectChange("facilityId", value)}
                          >
                            <SelectTrigger id="resident-facility" className="col-span-3">
                              <SelectValue placeholder="Select facility" />
                            </SelectTrigger>
                            <SelectContent>
                              {facilities.map(facility => (
                                <SelectItem key={facility.id} value={facility.id.toString()}>
                                  {facility.name} ({facility.location})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resident-name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="resident-name"
                            name="name"
                            value={newResident.name}
                            onChange={handleResidentInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resident-age" className="text-right">
                            Age
                          </Label>
                          <Input
                            id="resident-age"
                            name="age"
                            type="number"
                            value={newResident.age}
                            onChange={handleResidentInputChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resident-medical" className="text-right">
                            Medical Condition
                          </Label>
                          <Input
                            id="resident-medical"
                            name="medicalCondition"
                            value={newResident.medicalCondition}
                            onChange={handleResidentInputChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resident-checkup" className="text-right">
                            Checkup Frequency
                          </Label>
                          <Select 
                            value={newResident.checkupFrequency} 
                            onValueChange={(value) => handleResidentSelectChange("checkupFrequency", value)}
                          >
                            <SelectTrigger id="resident-checkup" className="col-span-3">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Weekly">Weekly</SelectItem>
                              <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                              <SelectItem value="Monthly">Monthly</SelectItem>
                              <SelectItem value="Quarterly">Quarterly</SelectItem>
                              <SelectItem value="Semi-annually">Semi-annually</SelectItem>
                              <SelectItem value="Annually">Annually</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resident-last-checkup" className="text-right">
                            Last Checkup
                          </Label>
                          <Input
                            id="resident-last-checkup"
                            name="lastCheckup"
                            type="date"
                            value={newResident.lastCheckup}
                            onChange={handleResidentInputChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-start gap-4">
                          <Label htmlFor="resident-notes" className="text-right pt-2">
                            Notes
                          </Label>
                          <Textarea
                            id="resident-notes"
                            name="notes"
                            value={newResident.notes}
                            onChange={handleResidentInputChange}
                            className="col-span-3"
                            rows={3}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-primary">Save Resident</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <TabsContent value="facilities" className="mt-6">
              {filteredFacilities.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow border">
                  <Building className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No facilities found</h3>
                  <p className="text-gray-500 mb-6">Add your first facility to get started.</p>
                  <Button className="bg-primary" onClick={() => setIsAddFacilityOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Facility
                  </Button>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Capacity</TableHead>
                          <TableHead>Contact Person</TableHead>
                          <TableHead>Contact Number</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredFacilities.map((facility) => (
                          <TableRow key={facility.id}>
                            <TableCell className="font-medium">{facility.name}</TableCell>
                            <TableCell>{facility.location}</TableCell>
                            <TableCell>{facility.type}</TableCell>
                            <TableCell>{facility.capacity}</TableCell>
                            <TableCell>{facility.contactPerson || "—"}</TableCell>
                            <TableCell>{facility.contactNumber || "—"}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedFacility(facility.id)}
                                >
                                  <Users className="h-4 w-4 mr-1" />
                                  View Residents
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <FileEdit className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="residents" className="mt-6">
              {selectedFacility && (
                <div className="mb-4 p-3 bg-lovely-blue/10 rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-medium">
                      Showing residents for: {facilities.find(f => f.id === selectedFacility)?.name}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedFacility(null)}>
                    Clear Filter
                  </Button>
                </div>
              )}
              
              {filteredResidents.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow border">
                  <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No residents found</h3>
                  <p className="text-gray-500 mb-6">
                    {selectedFacility 
                      ? "This facility has no residents yet." 
                      : "Add your first resident to get started."}
                  </p>
                  <Button className="bg-primary" onClick={() => setIsAddResidentOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Resident
                  </Button>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Facility</TableHead>
                          <TableHead>Age</TableHead>
                          <TableHead>Medical Condition</TableHead>
                          <TableHead>
                            <div className="flex items-center">
                              <HeartPulse className="h-4 w-4 mr-1" />
                              Checkup Frequency
                            </div>
                          </TableHead>
                          <TableHead>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Last Checkup
                            </div>
                          </TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredResidents.map((resident) => {
                          const facility = facilities.find(f => f.id === resident.facilityId);
                          return (
                            <TableRow key={resident.id}>
                              <TableCell className="font-medium">{resident.name}</TableCell>
                              <TableCell>{facility?.name || "—"}</TableCell>
                              <TableCell>{resident.age}</TableCell>
                              <TableCell>{resident.medicalCondition || "None"}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-blue-500" />
                                  {resident.checkupFrequency}
                                </div>
                              </TableCell>
                              <TableCell>{formatDate(resident.lastCheckup)}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm">
                                    <FileText className="h-4 w-4 mr-1" />
                                    Details
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <FileEdit className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 bg-lovely-yellow/20 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Admin-Only Database</h2>
            <p className="text-gray-600">
              This database is restricted to authorized personnel only. All data is securely stored 
              and access is monitored. Please handle all information with care and confidentiality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabasePage;
