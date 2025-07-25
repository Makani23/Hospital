import { Button } from "@/components/ui/button"
import { Heart, Phone, Calendar, Video } from "lucide-react"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-medical-blue" />
          <span className="text-xl font-bold text-medical-blue">MedSchedule</span>
        </div>
        
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <a href="#" className="text-foreground hover:text-medical-blue transition-colors">
            Find Doctors
          </a>
          <a href="#" className="text-foreground hover:text-medical-blue transition-colors">
            Appointments
          </a>
          <a href="#" className="text-foreground hover:text-medical-blue transition-colors">
            Teleconsult
          </a>
          <a href="#" className="text-foreground hover:text-medical-blue transition-colors">
            Health Records
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="medical_outline" size="sm">
            <Phone className="h-4 w-4 mr-2" />
            Emergency
          </Button>
          <Button variant="medical" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header