import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold text-secondary mb-4">KHAO</div>
            <p className="text-gray-300 mb-6 text-pretty leading-relaxed">
              Authentic Thai street food experience bringing the vibrant flavors of Thailand to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">205 Richmond road</p>
                  <p className="text-gray-300">Ottawa, K1Z 6W4</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <p className="text-gray-300">(613) 722-6464</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <p className="text-gray-300">info@khaostreetfood.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Monday</span>
                <span className="text-secondary">4:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tuesday - Friday</span>
                <span className="text-secondary">12:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-secondary">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-secondary">11:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-secondary transition-colors">
                Home
              </a>
              <a href="#menu" className="block text-gray-300 hover:text-secondary transition-colors">
                Menu
              </a>
              <a href="#about" className="block text-gray-300 hover:text-secondary transition-colors">
                About
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-secondary transition-colors">
                Contact
              </a>
              <a href="#" className="block text-gray-300 hover:text-secondary transition-colors">
                Order Online
              </a>
              <a href="#" className="block text-gray-300 hover:text-secondary transition-colors">
                Reservations
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">© 2025 Khao Street Food. All rights reserved. | Follow us @khaostreetfood</p>
        </div>
      </div>
    </footer>
  )
}
