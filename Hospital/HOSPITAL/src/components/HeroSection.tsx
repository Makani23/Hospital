import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Video, Shield } from "lucide-react"
import hospitalHero from "@/assets/hospital-hero.jpg"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="container px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Your Health,{" "}
                <span className="text-medical-blue">Our Priority</span>
              </h1>
              <p className="text-lg text-warm-gray sm:text-xl">
                Book appointments with top doctors, access teleconsultation, and manage your health records all in one place. Quality healthcare made simple.
              </p>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button variant="medical" size="lg" className="text-base">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="medical_outline" size="lg" className="text-base">
                <Video className="h-5 w-5 mr-2" />
                Start Teleconsult
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-medium border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Search</h3>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-gray" />
                  <Input 
                    placeholder="Search doctors, specialties..." 
                    className="pl-10"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-gray" />
                  <Input 
                    placeholder="Location" 
                    className="pl-10"
                  />
                </div>
                <Button variant="medical">Search</Button>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-warm-gray">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-trust-green" />
                <span>Verified Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-trust-green" />
                <span>Instant Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Video className="h-5 w-5 text-trust-green" />
                <span>Secure Teleconsult</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={hospitalHero}
              alt="Modern Hospital Building"
              className="rounded-lg shadow-strong w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-medical-blue rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-medical-accent rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-trust-green rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold">50K+ Patients</p>
                  <p className="text-xs text-warm-gray">Trust our care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection