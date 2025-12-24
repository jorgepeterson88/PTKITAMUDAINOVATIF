'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      content: "0823-8246-6378",
      description: "Senin - Jumat, 08:00 - 17:00"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kitamudainovatif.com",
      description: "Respon dalam 24 jam"
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Abdul Ghani Raya No. 71, Kel. Kalibaru, Kec. Cilodong, Kota Depok, Prov. Jawa Barat 16414",
      description: "Kunjungi kantor kami"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:00",
      description: "Sabtu: 08:00 - 12:00"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hubungi <span className="text-yellow-300">PT KITA MUDA INOVATIF</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kami siap membantu Anda dengan solusi industri terbaik. Jangan ragu untuk 
              menghubungi kami untuk konsultasi gratis atau informasi produk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full">
                    <info.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                </div>
                <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-600">Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0812-3456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="PT Example"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="informasi-produk">Informasi Produk</option>
                      <option value="penawaran-harga">Penawaran Harga</option>
                      <option value="kerjasama">Kerjasama Bisnis</option>
                      <option value="dukungan-teknis">Dukungan Teknis</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tuliskan pesan Anda di sini..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Address */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Lokasi Kami</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Jl. Abdul Ghani Raya No. 71<br />
                        Kel. Kalibaru, Kec. Cilodong<br />
                        Kota Depok, Prov. Jawa Barat<br />
                        Kode Pos: 16414
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 17:00<br />
                        Sabtu: 08:00 - 12:00<br />
                        Minggu & Hari Libur: Tutup
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="mt-6">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                      <p className="text-gray-500">Peta Lokasi</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Koordinat: -6.4486, 106.8644
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Butuh Bantuan Segera?</h3>
                <p className="text-blue-100 mb-6">
                  Tim customer service kami siap membantu Anda 24/7 untuk kebutuhan mendesak.
                </p>
                <a
                  href="tel:082382466378"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <Phone className="mr-2" size={20} />
                  Hubungi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}