import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "10K+" },
  { icon: Clock, label: "Daily Fresh Dishes", value: "50+" },
  { icon: Heart, label: "Customer Rating", value: "4.9/5" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Passionate</span> Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              We bring street food and Thai culture to your table. Our chefs have traveled across Thailand to master
              authentic recipes passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              From the bustling markets of Bangkok to the coastal flavors of Phuket, every dish tells a story of
              tradition, passion, and authentic Thai hospitality.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/thai-chef-cooking-in-traditional-kitchen-with-wok-.jpg"
                  alt="Thai chef cooking"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Authentic Recipes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
