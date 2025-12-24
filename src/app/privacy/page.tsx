export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kebijakan Privasi <span className="text-yellow-300">PT KITA MUDA INOVATIF</span>
            </p>
            <p className="text-blue-200 mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di kebijakan privasi PT KITA MUDA INOVATIF. Kebijakan ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                  Anda ketika Anda mengunjungi website kami atau menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>PT KITA MUDA INOVATIF</strong> berkomitmen untuk melindungi privasi dan 
                  keamanan data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Informasi yang Anda Berikan</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Nama lengkap dan informasi identitas</li>
                      <li>Alamat email dan nomor telepon</li>
                      <li>Alamat perusahaan dan informasi kontak</li>
                      <li>Informasi pembayaran dan faktur</li>
                      <li>Pesan dan komunikasi dengan kami</li>
                      <li>Informasi yang Anda berikan melalui formulir kontak</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Informasi yang Kami Kumpulkan Otomatis</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Alamat IP dan informasi geografis</li>
                      <li>Jenis browser dan perangkat yang digunakan</li>
                      <li>Informasi tentang kunjungan Anda ke website kami</li>
                      <li>Cookies dan data tracking lainnya</li>
                      <li>Waktu akses dan durasi kunjungan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami menggunakan informasi yang kami kumpulkan untuk tujuan-tujuan berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan dan meningkatkan layanan kami</li>
                  <li>Memproses permintaan dan transaksi Anda</li>
                  <li>Mengirimkan informasi produk dan penawaran</li>
                  <li>Memberikan dukungan pelanggan</li>
                  <li>Melakukan analisis dan penelitian pasar</li>
                  <li>Memastikan keamanan dan mencegah penipuan</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pembagian Informasi</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                  Kami hanya membagikan informasi Anda dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan Anda yang eksplisit</li>
                  <li>Kepada mitra bisnis tepercaya untuk penyediaan layanan</li>
                  <li>Untuk memenuhi kewajiban hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li>Kepada penasihat profesional dalam kondisi kerahasiaan</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PT KITA MUDA INOVATIF mengimplementasikan berbagai langkah keamanan untuk melindungi 
                  informasi pribadi Anda, termasuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>System monitoring dan deteksi intrusi</li>
                  <li>Backup data secara teratur</li>
                  <li>Training staf tentang keamanan data</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik 
                  yang 100% aman.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah 
                  file teks kecil yang disimpan di browser Anda. Kami menggunakan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Mengumpulkan informasi tentang penggunaan website</li>
                  <li><strong>Cookies Fungsionalitas:</strong> Mengingat preferensi Anda</li>
                  <li><strong>Cookies Targeting:</strong> Untuk menampilkan iklan yang relevan</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Anda dapat mengatur browser untuk menolak cookies atau memberi tahu saat cookies dikirim.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak Anda</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai UU ITE dan peraturan Perlindungan Data Pribadi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Hak untuk mengetahui data pribadi Anda yang kami proses</li>
                  <li>Hak untuk mengakses dan memperoleh salinan data Anda</li>
                  <li>Hak untuk memperbaiki data yang tidak akurat</li>
                  <li>Hak untuk menghapus data pribadi Anda</li>
                  <li>Hak untuk membatasi pemrosesan data Anda</li>
                  <li>Hak untuk menarik persetujuan pemrosesan data</li>
                  <li>Hak untuk memindahkan data Anda ke layanan lain</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Penyimpanan Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami menyimpan data pribadi Anda selama diperlukan untuk tujuan yang telah disebutkan, 
                  kecuali periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kriteria yang kami gunakan untuk menentukan periode penyimpanan meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Nature dan tujuan pengumpulan data</li>
                  <li>Kebutuhan hukum dan peraturan</li>
                  <li>Kebutuhan operasional bisnis kami</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Link ke Pihak Ketiga</h2>
                <p className="text-gray-600 leading-relaxed">
                  Website kami mungkin berisi link ke website pihak ketiga. Kami tidak bertanggung jawab 
                  atas praktik privasi website tersebut. Kami menyarankan Anda untuk membaca kebijakan 
                  privasi dari setiap website yang Anda kunjungi.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Anak di Bawah Umur</h2>
                <p className="text-gray-600 leading-relaxed">
                  Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja 
                  mengumpulkan informasi pribadi dari anak di bawah umur. Jika kami mengetahui bahwa 
                  kami telah mengumpulkan informasi dari anak di bawah umur, kami akan menghapus informasi tersebut.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Kebijakan Privasi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                  dipublikasikan di halaman ini dengan tanggal "Terakhir diperbarui". Kami akan 
                  memberitahu Anda tentang perubahan material melalui email atau pemberitahuan di website kami.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontak Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan 
                  hak-hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>PT KITA MUDA INOVATIF</strong>
                  </p>
                  <p className="text-gray-600 mb-1">
                    Jl. Abdul Ghani Raya No. 71, Kel. Kalibaru, Kec. Cilodong
                  </p>
                  <p className="text-gray-600 mb-1">
                    Kota Depok, Prov. Jawa Barat 16414
                  </p>
                  <p className="text-gray-600 mb-1">
                    Email: privacy@kitamudainovatif.com
                  </p>
                  <p className="text-gray-600">
                    Telepon: 0823-8246-6378
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <p className="text-sm text-gray-500 text-center">
                  Kebijakan Privasi ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })} 
                  dan merupakan bagian dari Syarat dan Ketentuan layanan PT KITA MUDA INOVATIF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}