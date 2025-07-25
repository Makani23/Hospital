import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, Video, Clock } from "lucide-react"

interface DoctorCardProps {
  name: string
  specialty: string
  rating: number
  reviews: number
  location: string
  experience: string
  availableToday: boolean
  consultationFee: number
  imageUrl: string
  nextAvailable: string
}

const DoctorCard = ({
  name,
  specialty,
  rating,
  reviews,
  location,
  experience,
  availableToday,
  consultationFee,
  imageUrl,
  nextAvailable
}: DoctorCardProps) => {
  return (
    <Card className="hover:shadow-medium transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={imageUrl}
              alt={name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            {availableToday && (
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-trust-green rounded-full border-2 border-white"></div>
            )}
          </div>
          
          <div className="flex-1 space-y-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-medical-blue transition-colors">
                Dr. {name}
              </h3>
              <p className="text-warm-gray">{specialty}</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-warm-gray">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
                <span>({reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <Badge variant="secondary">{experience} exp</Badge>
              {availableToday && (
                <Badge variant="outline" className="text-trust-green border-trust-green">
                  Available Today
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-sm text-warm-gray">Consultation Fee</p>
                <p className="text-lg font-semibold text-medical-blue">₹{consultationFee}</p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-warm-gray">
                <Clock className="h-4 w-4" />
                <span>Next: {nextAvailable}</span>
              </div>
            </div>
            
            <div className="flex space-x-2 pt-4">
              <Button variant="medical" size="sm" className="flex-1">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
              <Button variant="medical_outline" size="sm" className="flex-1">
                <Video className="h-4 w-4 mr-2" />
                Video Consult
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DoctorCard