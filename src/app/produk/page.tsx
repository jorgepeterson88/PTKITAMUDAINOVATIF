import { Package, Wrench, Cog, Settings, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export default function ProdukPage() {
  const productCategories = [
    {
      icon: Package,
      title: "Produk Konsumen",
      description: "Berbagai macam produk berkualitas tinggi untuk kebutuhan sehari-hari",
      products: [
        "Peralatan Rumah Tangga",
        "Produk Elektronik",
        "Peralatan Dapur",
        "Aksesoris Lifestyle"
      ],
      features: ["Kualitas Terjamin", "Harga Kompetitif", "Garansi Resmi"]
    },
    {
      icon: Wrench,
      title: "Peralatan Industri",
      description: "Peralatan dan mesin industri untuk berbagai sektor produksi",
      products: [
        "Mesin Produksi",
        "Peralatan Workshop",
        "Sistem Konveyor",
        "Peralatan Safety"
      ],
      features: ["Tahan Lama", "Efisiensi Tinggi", "Mudah Maintenance"]
    },
    {
      icon: Cog,
      title: "Komponen Engineering",
      description: "Komponen presisi untuk berbagai aplikasi industri",
      products: [
        "Bearing & Bushing",
        "Gear & Sprocket",
        "Hydraulic Components",
        "Pneumatic Systems"
      ],
      features: ["Presisi Tinggi", "Material Berkualitas", "Standar Internasional"]
    },
    {
      icon: Settings,
      title: "Solusi Kustom",
      description: "Produk kustom sesuai dengan kebutuhan spesifik pelanggan",
      products: [
        "Desain Kustom",
        "Produksi Prototype",
        "Modifikasi Produk",
        "Konsultasi Teknis"
      ],
      features: ["Desain Fleksibel", "Tim Ahli", "Support Penuh"]
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      description: "Semua produk melalui proses quality control yang ketat"
    },
    {
      icon: Zap,
      title: "Pengiriman Cepat",
      description: "Sistem logistik yang efisien untuk pengiriman tepat waktu"
    },
    {
      icon: CheckCircle,
      title: "Garansi Resmi",
      description: "Garansi produk untuk memberikan ketenangan pelanggan"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Produk <span className="text-yellow-300">PT KITA MUDA INOVATIF</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Berbagai macam produk industri berkualitas tinggi yang dirancang untuk 
              memenuhi kebutuhan berbagai sektor dengan standar internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kategori Produk Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk berbagai kebutuhan industri Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <category.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Produk Unggulan:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Produk Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat produk kami menjadi pilihan terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                  <benefit.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Standar Kualitas Internasional
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Di <strong>PT KITA MUDA INOVATIF</strong>, kami berkomitmen untuk 
                  menghasilkan produk dengan standar kualitas tertinggi. Setiap produk 
                  melalui proses quality control yang ketat untuk memastikan kepuasan pelanggan.
                </p>
                <p>
                  Kami menggunakan bahan baku berkualitas premium dan teknologi produksi 
                  modern untuk menghasilkan produk yang tidak hanya berkualitas tinggi 
                  tetapi juga ramah lingkungan.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">ISO 9001</div>
                    <div className="text-sm text-gray-600">Sertifikasi Manajemen Mutu</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Quality Control</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Sertifikasi ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Standar K3 (Keselamatan & Kesehatan Kerja)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Sistem Manajemen Lingkungan ISO 14001</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Proses Produksi HALAL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Garansi Produk 2 Tahun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi tim kami untuk mendapatkan konsultasi gratis dan penawaran terbaik 
            untuk kebutuhan industri Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:082382466378"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Hubungi Sekarang
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}