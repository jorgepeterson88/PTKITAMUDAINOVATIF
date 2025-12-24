import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Produk', href: '/produk' },
    { name: 'Kontak', href: '/kontak' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="PT KITA MUDA INOVATIF Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  PT KITA MUDA INOVATIF
                </h3>
                <p className="text-sm text-gray-400">Inovasi untuk Masa Depan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Perusahaan terkemuka di bidang industri barang yang berkomitmen untuk memberikan 
              produk berkualitas tinggi dan solusi inovatif untuk kebutuhan industri modern.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Jl. Abdul Ghani Raya No. 71</p>
                  <p>Kel. Kalibaru, Kec. Cilodong</p>
                  <p>Kota Depok, Prov. Jawa Barat</p>
                  <p>Kode Pos: 16414</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">0823-8246-6378</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@kitamudainovatif.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-2 sm:mb-0">
              © {currentYear} PT KITA MUDA INOVATIF. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}