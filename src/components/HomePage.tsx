import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Target } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="mr-2" size={16} />
                Industri Terpercaya Sejak 2020
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  PT KITA MUDA INOVATIF
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-700">
                  Inovasi untuk Masa Depan
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Perusahaan terkemuka di bidang industri barang yang berkomitmen untuk 
                memberikan produk berkualitas tinggi dan solusi inovatif untuk kebutuhan 
                industri modern di Indonesia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produk"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Lihat Produk Kami
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <img
                  src="/hero-image.jpg"
                  alt="PT KITA MUDA INOVATIF - Industrial Manufacturing"
                  className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">PT KITA MUDA INOVATIF</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berdedikasi untuk memberikan solusi terbaik dengan standar kualitas tertinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Produk kami melalui proses quality control yang ketat untuk memastikan 
                standar kualitas tertinggi terpenuhi.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovasi Berkelanjutan</h3>
              <p className="text-gray-600">
                Terus mengembangkan produk dan layanan inovatif untuk memenuhi 
                kebutuhan industri yang terus berkembang.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Layanan Pelanggan</h3>
              <p className="text-gray-600">
                Tim profesional siap membantu dan memberikan solusi terbaik untuk 
                setiap kebutuhan pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap untuk Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ratusan perusahaan yang telah mempercayakan kebutuhan 
            industri barang mereka kepada PT KITA MUDA INOVATIF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Produk Variatif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Dukungan Teknis</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}