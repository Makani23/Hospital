import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Video, FileText, Shield, Clock, Users } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description: "Book appointments with your preferred doctors in just a few clicks. Choose your time and get instant confirmation.",
      features: ["Real-time availability", "Instant confirmation", "Reschedule anytime"]
    },
    {
      icon: Video,
      title: "Teleconsultation",
      description: "Consult with doctors from the comfort of your home. Secure video calls with prescription delivery.",
      features: ["HD video calls", "Digital prescriptions", "Follow-up reminders"]
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Maintain digital health records, track your medical history, and share with healthcare providers securely.",
      features: ["Secure storage", "Easy sharing", "Medical history tracking"]
    },
    {
      icon: Shield,
      title: "Verified Healthcare",
      description: "All our doctors are verified professionals with proper credentials and years of experience.",
      features: ["Verified doctors", "Licensed professionals", "Quality assurance"]
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support with immediate doctor consultation for urgent medical needs.",
      features: ["24/7 availability", "Emergency response", "Immediate care"]
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Manage health records for your entire family. Book appointments for family members easily.",
      features: ["Family profiles", "Shared records", "Group appointments"]
    }
  ]

  return (
    <section className="py-16 bg-medical-light/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Experience the future of healthcare with our integrated platform designed for your convenience and well-being
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 group border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-warm-gray mb-4">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-warm-gray">
                          <div className="w-1.5 h-1.5 bg-medical-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection