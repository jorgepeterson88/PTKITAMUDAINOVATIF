export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Syarat dan Ketentuan <span className="text-yellow-300">PT KITA MUDA INOVATIF</span>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di website PT KITA MUDA INOVATIF. Dengan mengakses dan menggunakan 
                  website ini, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak 
                  setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh mengakses website kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>PT KITA MUDA INOVATIF</strong> berhak untuk mengubah syarat dan ketentuan ini 
                  kapan saja tanpa pemberitahuan sebelumnya. Perubahan akan berlaku efektif segera setelah 
                  dipublikasikan di website ini.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definisi</h2>
                <div className="space-y-3">
                  <div>
                    <strong>"Perusahaan"</strong> merujuk pada PT KITA MUDA INOVATIF, sebuah perusahaan 
                    yang bergerak di bidang industri barang dengan alamat di Jl. Abdul Ghani Raya No. 71, 
                    Kel. Kalibaru, Kec. Cilodong, Kota Depok, Prov. Jawa Barat 16414.
                  </div>
                  <div>
                    <strong>"Website"</strong> merujuk pada website resmi PT KITA MUDA INOVATIF yang dapat 
                    diakses melalui URL yang disediakan.
                  </div>
                  <div>
                    <strong>"Pengguna"</strong> merujuk pada individu atau entitas yang mengakses atau 
                    menggunakan website kami.
                  </div>
                  <div>
                    <strong>"Produk"</strong> merujuk pada barang dan jasa yang ditawarkan oleh PT KITA MUDA INOVATIF.
                  </div>
                  <div>
                    <strong>"Layanan"</strong> merujuk pada semua layanan yang disediakan melalui website kami.
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Website</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Anda setuju untuk menggunakan website kami hanya untuk tujuan yang sah dan sesuai dengan 
                  hukum yang berlaku. Anda dilarang untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menggunakan website untuk tujuan ilegal atau tidak sah</li>
                  <li>Mengirim atau menyebarkan virus, malware, atau kode berbahaya lainnya</li>
                  <li>Mencoba mendapatkan akses tidak sah ke sistem kami</li>
                  <li>Mengganggu atau merusak fungsi website</li>
                  <li>Mengumpulkan data pengguna lain tanpa izin</li>
                  <li>Melakukan aktivitas spam atau phishing</li>
                  <li>Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Produk dan Layanan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Deskripsi Produk</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kami berusaha untuk menyajikan informasi produk yang akurat dan lengkap. Namun, 
                      kami tidak menjamin bahwa deskripsi, warna, atau informasi produk lainnya akan 
                      akurat, lengkap, andal, atau bebas dari kesalahan.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Harga dan Ketersediaan</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. 
                      Ketersediaan produk tidak dijamin dan dapat berubah. Kami berhak untuk 
                      membatasi jumlah produk yang dapat dibeli.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Pesanan</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Semua pesanan tunduk pada penerimaan dan konfirmasi dari kami. Kami berhak 
                      untuk menolak atau membatalkan pesanan untuk alasan apa pun, termasuk keterbatasan 
                      stok, kesalahan harga, atau kecurigaan penipuan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pembayaran</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pembayaran harus dilakukan sesuai dengan metode yang disediakan</li>
                  <li>Harga yang tercantum belum termasuk biaya pengiriman dan pajak yang berlaku</li>
                  <li>Kami berhak untuk mengubah harga dan biaya kapan saja</li>
                  <li>Pembayaran yang gagal dapat menyebabkan pembatalan pesanan</li>
                  <li>Untuk pembayaran tunai, pembayaran harus dilunasi sesuai kesepakatan</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pengiriman dan Pengembalian</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Pengiriman</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Waktu pengiriman adalah estimasi dan dapat bervariasi tergantung lokasi dan 
                      ketersediaan produk. Kami tidak bertanggung jawab atas keterlambatan pengiriman 
                      yang disebabkan oleh pihak ketiga atau keadaan di luar kendali kami.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.2 Pengembalian</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Produk dapat dikembalikan dalam kondisi asli dan tidak terpakai dalam waktu 
                      7 hari sejak tanggal pembelian. Biaya pengiriman pengembalian ditanggung oleh 
                      pembeli, kecuali jika kesalahan ada pada pihak kami.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kekayaan Intelektual</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua konten di website ini, termasuk namun tidak terbatas pada teks, grafik, logo, 
                  ikon, gambar, klip video, dan software, adalah milik PT KITA MUDA INOVATIF atau 
                  pemberi lisensi kami dan dilindungi oleh hukum kekayaan intelektual Indonesia.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Anda tidak boleh menggunakan, menyalin, mereproduksi, mendistribusikan, atau 
                  membuat karya turunan dari konten kami tanpa izin tertulis dari kami.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privasi Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Privasi Anda penting bagi kami. Penggunaan data pribadi Anda diatur oleh 
                  Kebijakan Privasi kami yang dapat diakses melalui link yang tersedia di website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggunakan website kami, Anda setuju dengan pengumpulan, penggunaan, dan 
                  pembagian data pribadi Anda sebagaimana dijelaskan dalam Kebijakan Privasi kami.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Batasan Tanggung Jawab</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sejauh diizinkan oleh hukum, PT KITA MUDA INOVATIF tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau keuntungan</li>
                  <li>Kerusakan pada perangkat atau software akibat penggunaan website</li>
                  <li>Keterlambatan atau gangguan layanan</li>
                  <li>Konten dari pihak ketiga yang dapat diakses melalui website kami</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Tanggung jawab maksimal kami terbatas pada jumlah yang Anda bayarkan untuk produk atau layanan.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnifikasi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Anda setuju untuk mengganti kerugian, membela, dan membebaskan PT KITA MUDA INOVATIF 
                  dan direksi, karyawan, dan agennya dari dan terhadap semua klaim, kewajiban, kerugian, 
                  biaya, dan pengeluaran (termasuk biaya hukum) yang timbul dari atau sehubungan dengan 
                  pelanggaran Anda terhadap syarat dan ketentuan ini.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Terminasi</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami berhak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakhiri atau menangguhkan akses Anda ke website kapan saja</li>
                  <li>Menghapus atau menonaktifkan akun Anda tanpa pemberitahuan</li>
                  <li>Mengubah atau menghentikan layanan kapan saja</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Setelah terminasi, Anda harus menghentikan semua penggunaan website dan menghapus 
                  semua materi yang diunduh atau diperoleh dari website.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Ganti Rugi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Produk kami dilengkapi dengan garansi sesuai dengan ketentuan yang berlaku. Klaim garansi 
                  akan diproses sesuai dengan prosedur yang telah ditetapkan. Garansi tidak mencakup 
                  kerusakan akibat penggunaan yang tidak tepat, kelalaian, atau modifikasi tidak sah.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Force Majeure</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami tidak bertanggung jawab atas kegagalan atau keterlambatan dalam melaksanakan 
                  kewajiban kami jika kegagalan tersebut disebabkan oleh keadaan di luar kendali 
                  kami yang wajar (force majeure), termasuk namun tidak terbatas pada bencana alam, 
                  perang, terorisme, pemogokan, atau gangguan pemerintah.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Hukum yang Berlaku</h2>
                <p className="text-gray-600 leading-relaxed">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa yang timbul dari atau sehubungan dengan syarat dan ketentuan ini akan 
                  diselesaikan melalui perundingan yang baik. Jika tidak tercapai kesepakatan, sengketa 
                  akan diselesaikan melalui pengadilan yang berwenang di Kota Depok.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Pemisahan Kewajiban</h2>
                <p className="text-gray-600 leading-relaxed">
                  Jika bagian mana pun dari syarat dan ketentuan ini dinyatakan tidak sah atau tidak 
                  dapat dilaksanakan, bagian tersebut akan dipisahkan dan sisanya akan tetap berlaku 
                  dan dapat dilaksanakan sepenuhnya.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Komunikasi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggunakan website kami, Anda setuju untuk menerima komunikasi elektronik 
                  dari kami, termasuk email, pemberitahuan, dan pembaruan. Anda setuju bahwa semua 
                  komunikasi ini memenuhi persyaratan hukum untuk komunikasi tertulis.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Informasi Kontak</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
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
                    Email: legal@kitamudainovatif.com
                  </p>
                  <p className="text-gray-600">
                    Telepon: 0823-8246-6378
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <p className="text-sm text-gray-500 text-center">
                  Dengan menggunakan website PT KITA MUDA INOVATIF, Anda mengakui bahwa Anda telah 
                  membaca, memahami, dan setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}