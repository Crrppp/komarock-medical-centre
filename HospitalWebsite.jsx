import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";

export default function HospitalWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Komarock Medical Centre</h1>
          <nav className="space-x-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#doctors" className="hover:underline">Doctors</a>
            <a href="#booking" className="hover:underline">Book</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Accessible, Affordable Healthcare</h2>
          <p className="text-lg mb-6">From the comfort of your home or office.</p>
          <Button>Book a Visit</Button>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Consultation", "Lab Tests", "Vaccination", "Wellness Checks", "Chronic Care", "Pharmacy"].map((service) => (
              <Card key={service} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{service}</h4>
                  <p className="text-sm text-gray-600">High-quality service tailored to your needs.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">Meet Our Doctors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((doc) => (
              <Card key={doc} className="hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
                  <h4 className="text-xl font-semibold">Dr. Jane Doe</h4>
                  <p className="text-sm text-gray-600">General Practitioner</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">Book an Appointment</h3>
          <Tabs defaultValue="home">
            <TabsList className="justify-center mb-4">
              <TabsTrigger value="home">Home Visit</TabsTrigger>
              <TabsTrigger value="clinic">Clinic Visit</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <BookingForm />
            </TabsContent>
            <TabsContent value="clinic">
              <BookingForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">Contact Us</h3>
          <form className="grid grid-cols-1 gap-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} TibuCare. All rights reserved.</p>
      </footer>
    </div>
  );
}

function BookingForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input placeholder="Full Name" required />
      <Input type="email" placeholder="Email Address" required />
      <Input placeholder="Phone Number" required />
      <Calendar mode="single" selected={new Date()} onSelect={() => {}} className="w-full" />
      <Textarea placeholder="Reason for Visit" rows={3} className="md:col-span-2" />
      <Button type="submit" className="md:col-span-2">Confirm Booking</Button>
    </form>
  );
}
