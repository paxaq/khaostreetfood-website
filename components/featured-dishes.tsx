import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Clock, Flame } from "lucide-react"

const dishes = [
  {
    name: "Pad Thai",
    description: "Classic stir-fried rice noodles with shrimp, tofu, and our signature tamarind sauce",
    price: "$14.99",
    image: "/authentic-pad-thai-with-shrimp-and-bean-sprouts-on.jpg",
    rating: 4.9,
    spiceLevel: 2,
    cookTime: "12 min",
  },
  {
    name: "Tom Yum Goong",
    description: "Spicy and sour soup with fresh shrimp, lemongrass, and lime leaves",
    price: "$12.99",
    image: "/steaming-bowl-of-tom-yum-soup-with-shrimp-and-herb.jpg",
    rating: 4.8,
    spiceLevel: 3,
    cookTime: "15 min",
  },
  {
    name: "Green Curry",
    description: "Aromatic coconut curry with chicken, Thai basil, and vegetables",
    price: "$16.99",
    image: "/green-curry-with-chicken-in-coconut-milk-with-thai.jpg",
    rating: 4.9,
    spiceLevel: 3,
    cookTime: "18 min",
  },
  {
    name: "Mango Sticky Rice",
    description: "Sweet coconut sticky rice topped with fresh mango slices",
    price: "$8.99",
    image: "/mango-sticky-rice-dessert-with-coconut-milk-drizzl.jpg",
    rating: 4.7,
    spiceLevel: 0,
    cookTime: "5 min",
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Signature</span> Dishes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the authentic flavors that have made us a favorite destination for Thai food lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="text-sm font-semibold">{dish.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                </div>

                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{dish.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{dish.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Flame
                          key={i}
                          className={`h-4 w-4 ${i < dish.spiceLevel ? "text-primary" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
