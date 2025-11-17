NAMA : FERDI SAPUTRA

NIM : 24090075


GitHub Repository	: uts-FERDI-SAPUTRA-24090075


GitHub Pages :	
Proyek ini adalah implementasi front-end dari desain Figma menjadi sebuah aplikasi dashboard fungsional. Proyek ini menguji kemampuan dasar dalam manipulasi DOM, pengelolaan data dengan array dan object, serta navigasi antar halaman.


WEB terdiri dari tiga halaman utama:

1. Halaman Login (index.html)

Tujuan: Simulasi validasi login tanpa backend.


Spesifikasi: Form berisi input Email (sebagai username) dan Password (diisi dengan NIM).


Validasi: Memastikan Email dan Password tidak boleh kosong.

Akses: Hanya password yang cocok dengan NIM yang diizinkan login.


Hasil: Jika berhasil, menampilkan pesan "Login berhasil" dan redirect ke dashboard.html.

2. Halaman Dashboard (dashboard.html)

Tujuan: Menampilkan ringkasan data utama aplikasi.


Tampilan: Menggunakan Sidebar Menu dan judul "Dashboard".


Card Summary: Menampilkan tiga card utama: Total Produk, Total Penjualan, dan Total Revenue.


Data: Diambil secara dinamis dari object dummy JavaScript (const summary = {...}).


Layout: Card ditata menggunakan Flexbox (atau Grid) untuk tampilan yang rapi dan responsif.


Aksi: Terdapat tombol "Lihat Data Produk" yang mengarahkan ke products.html.

3. Halaman List Data Produk (products.html)

Tujuan: Menampilkan daftar produk dalam format tabel.


Tabel: Memiliki kolom No, Product Name, Price, Stock, dan Aksi.


Data: Diisi secara dinamis dari array of objects JavaScript (const products = [...]) menggunakan forEach().



Kolom Aksi: Setiap baris memiliki ikon Edit (menampilkan alert nama produk) dan Delete (menghapus baris menggunakan remove() method setelah konfirmasi).
