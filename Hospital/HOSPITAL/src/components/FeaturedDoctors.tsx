import DoctorCard from "./DoctorCard"
import doctor1 from "@/assets/doctor-1.jpg"
import doctor2 from "@/assets/doctor-2.jpg"
import doctor3 from "@/assets/doctor-3.jpg"

const FeaturedDoctors = () => {
  const doctors = [
    {
      name: "Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 245,
      location: "Central Hospital",
      experience: "12 years",
      availableToday: true,
      consultationFee: 800,
      imageUrl: doctor1,
      nextAvailable: "2:30 PM"
    },
    {
      name: "Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 189,
      location: "City Medical Center",
      experience: "8 years",
      availableToday: true,
      consultationFee: 600,
      imageUrl: doctor2,
      nextAvailable: "4:00 PM"
    },
    {
      name: "David Smith",
      specialty: "Orthopedic Surgeon",
      rating: 4.9,
      reviews: 312,
      location: "Metro Hospital",
      experience: "15 years",
      availableToday: false,
      consultationFee: 1200,
      imageUrl: doctor3,
      nextAvailable: "Tomorrow 10:00 AM"
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Doctors
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Meet our top-rated healthcare professionals, available for both in-person and online consultations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="text-medical-blue font-medium hover:underline">
            View All Doctors →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDoctors