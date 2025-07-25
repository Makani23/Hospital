import { Heart, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-medical-blue" />
              <span className="text-xl font-bold">MedSchedule</span>
            </div>
            <p className="text-background/80">
              Your trusted healthcare partner, making quality medical care accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-medical-blue transition-colors">Find Doctors</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Book Appointments</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Teleconsultation</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Health Records</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Emergency Care</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-medical-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>support@medschedule.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>123 Healthcare Ave, Medical District</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-medical-blue/10 rounded-lg">
              <p className="text-sm font-medium mb-2">24/7 Emergency Hotline</p>
              <p className="text-medical-blue font-bold text-lg">911</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 MedSchedule. All rights reserved. Your health, our priority.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer