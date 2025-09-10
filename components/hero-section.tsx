import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {(() => {
          const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
          return (
            <img
              src={`${prefix}/bustling-thai-street-food-market-with-colorful-sta.jpg`}
              alt="Thai street food market"
              className="w-full h-full object-cover"
            />
          )
        })()}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          {/* <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-secondary font-semibold">4.9/5 Rating</span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            A TASTE OF
            <span className="text-secondary block">THAILAND</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
            Dive into Thai gastronomy with authentic street food flavors. Experience the vibrant tastes of Bangkok right
            here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
