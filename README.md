# Product Catalog App

Aplikasi Web Product Catalog interaktif yang dibangun menggunakan React, Vite, dan Axios. Aplikasi ini mengonsumsi data secara _real-time_ dari [Fake Store API](https://fakestoreapi.com/).

## Cara Menjalankan Aplikasi

Pastikan Anda sudah menginstal **Node.js** di komputer Anda. Ikuti langkah-langkah berikut untuk menjalankan aplikasi di mesin lokal Anda:

1. **Buka Terminal/Command Prompt** dan pastikan Anda berada di dalam folder proyek ini (`product-catalog`).

2. **Instal seluruh *dependencies*** yang dibutuhkan:
   ```bash
   npm install
   ```

3. **Jalankan *development server***:
   ```bash
   npm run dev
   ```

4. Buka _browser_ Anda dan akses URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

## Fitur-Fitur yang Diimplementasikan

Aplikasi ini mencakup berbagai fungsionalitas utama dan fitur tambahan berikut:

- **Product List & Responsive Grid:** Menampilkan daftar katalog produk dalam tata letak (*grid*) responsif secara elegan (4 kolom untuk *desktop*, 2 kolom untuk *tablet*, 1 kolom untuk *mobile*).
- **Category Filter:** *Dropdown* interaktif untuk memfilter (menyaring) produk secara cepat berdasarkan daftar kategori yang tersedia dari API.
- **Search Functionality:** Fitur pencarian *real-time* yang dapat menyaring produk berdasarkan judul/nama yang diketikkan pengguna.
- **Sorting Harga (Pengurutan):** Kemampuan untuk mengurutkan daftar produk dari yang termurah (*Ascending*) maupun yang termahal (*Descending*).
- **Product Detail Modal:** Menampilkan pop-up modal bersih berisi informasi detail (gambar ukuran penuh, deskripsi panjang, harga, dan *rating*) ketika sebuah produk atau tombol detail diklik.
- **Add to Cart (Simulasi):** Pengguna dapat berinteraksi dengan tombol *Add to Cart* untuk menambahkan produk ke dalam keranjang, lengkap dengan *toast notification* yang muncul secara _smooth_ dan penghitung jumlah barang (*badge* keranjang).
- **Loading State & Error Handling:** Memberikan pengalaman UX terbaik dengan menampilkan animasi proses *loading* (spinner) selama pengambilan data, serta pesan *error* ramah pengguna apabila permintaan API gagal.
