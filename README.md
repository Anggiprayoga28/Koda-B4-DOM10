# Survey Perokok

Proyek ini adalah aplikasi web sederhana untuk melakukan survei tentang kebiasaan merokok. Aplikasi dibuat menggunakan **HTML, CSS, dan JavaScript** tanpa backend server, dengan penyimpanan data menggunakan **LocalStorage** di browser.

## Fitur Utama
- Form survei untuk mengisi:
  - Nama
  - Umur
  - Jenis kelamin
  - Status perokok atau bukan
  - Jenis rokok yang pernah dicoba (jika perokok)
- Validasi input (umur, nama hanya huruf, required field).
- Tombol untuk:
  - Mengirim jawaban survei
  - Melihat hasil survei
  - Mengosongkan formulir
- Halaman hasil survei:
  - Menampilkan jumlah data yang masuk
  - Tabel hasil lengkap (nama, umur, jenis kelamin, status perokok, jenis rokok)
  - Pesan apabila belum ada data
- Tampilan responsive (mendukung layar desktop dan mobile).

## Cara Menjalankan
1. Isi survei lalu klik **Kirim** → data akan tersimpan ke **LocalStorage**.
2. Buka halaman **Hasil Submission** (`submission.html`) untuk melihat data yang sudah diisi.

## Teknologi yang Digunakan
- **HTML5** untuk struktur halaman.
- **CSS3** (terpisah untuk form dan hasil) untuk desain dan responsive layout.
- **JavaScript (Vanilla)** untuk:
  - Validasi input
  - Penyimpanan data dengan LocalStorage
  - Manipulasi DOM untuk menampilkan hasil

## Preview
- **Halaman Form Survei**: Input data pengguna dengan beberapa pilihan.
![Form](/assets/form.png)
- **Halaman Submission**: Statistik jumlah data dan tabel hasil survei.
![Tabel](/assets/table.png)

## Pengembangan Selanjutnya
- Export hasil survei ke CSV/Excel.
- Tambahkan filter dan pencarian di tabel hasil.
- Implementasi backend (misalnya Node.js + database) agar data bisa disimpan permanen.
- Tambah fitur analitik visual (grafik perbandingan perokok vs non perokok).
"""

