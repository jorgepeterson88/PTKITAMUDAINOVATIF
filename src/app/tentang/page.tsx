import { Award, Users, Target, Lightbulb, Shield, Globe } from 'lucide-react'

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tentang <span className="text-yellow-300">PT KITA MUDA INOVATIF</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Perusahaan terkemuka di bidang industri barang yang berkomitmen untuk 
              memberikan produk berkualitas tinggi dan solusi inovatif untuk kebutuhan industri modern.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>PT KITA MUDA INOVATIF</strong> didirikan pada tahun 2020 dengan visi 
                  untuk menjadi pemimpin dalam industri barang di Indonesia. Kami percaya bahwa 
                  inovasi adalah kunci untuk masa depan yang lebih baik.
                </p>
                <p>
                  Berlokasi di Jalan Abdul Ghani Raya No. 71, Kel. Kalibaru, Kec. Cilodong, 
                  Kota Depok, kami telah melayani ratusan pelanggan dari berbagai sektor industri 
                  dengan produk-produk berkualitas tinggi.
                </p>
                <p>
                  Dengan tim yang terdiri dari para profesional muda yang bersemangat, kami 
                  terus berinovasi dan mengembangkan produk-produk baru untuk memenuhi kebutuhan 
                  pasar yang terus berkembang.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/team-image.jpg"
                alt="Tim Profesional PT KITA MUDA INOVATIF"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah kami dalam melayani pelanggan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kualitas Utama</h3>
              <p className="text-gray-600">
                Kami selalu mengutamakan kualitas dalam setiap produk yang kami hasilkan, 
                melalui proses quality control yang ketat.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovasi Berkelanjutan</h3>
              <p className="text-gray-600">
                Terus mengembangkan ide-ide baru dan solusi kreatif untuk memenuhi 
                kebutuhan pasar yang dinamis.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integritas</h3>
              <p className="text-gray-600">
                Beroperasi dengan kejujuran, transparansi, dan tanggung jawab dalam 
                setiap aspek bisnis kami.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pelanggan Prioritas</h3>
              <p className="text-gray-600">
                Kepuasan pelanggan adalah fokus utama kami, kami selalu berusaha 
                memberikan layanan terbaik.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tanggung Jawab Sosial</h3>
              <p className="text-gray-600">
                Berkontribusi positif bagi masyarakat dan lingkungan sekitar melalui 
                program-program CSR.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Keunggulan</h3>
              <p className="text-gray-600">
                Selalu berusaha untuk menjadi yang terbaik dalam industri melalui 
                pembelajaran dan peningkatan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Didukung oleh tim yang berpengalaman dan berdedikasi tinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                50+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tim Profesional</h3>
              <p className="text-gray-600">
                Ahli di bidangnya masing-masing dengan pengalaman bertahun-tahun
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                15+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Departemen</h3>
              <p className="text-gray-600">
                Struktur organisasi yang solid dengan divisi-divisi yang fokus
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dukungan</h3>
              <p className="text-gray-600">
                Tim siap membantu kapan saja Anda membutuhkan bantuan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}