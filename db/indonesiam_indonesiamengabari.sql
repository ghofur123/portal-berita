-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 16 Jul 2022 pada 12.40
-- Versi server: 10.3.34-MariaDB-cll-lve
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `indonesiam_indonesiamengabari`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

CREATE TABLE `berita` (
  `id_berita` int(11) NOT NULL,
  `uniq_berita` varchar(200) NOT NULL,
  `user_id` varchar(200) DEFAULT '0',
  `tgl` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` varchar(200) CHARACTER SET utf8 DEFAULT '0',
  `kategori_id` varchar(200) DEFAULT '0',
  `editor` varchar(200) DEFAULT '0',
  `kontributor` varchar(200) DEFAULT '0',
  `status_publikasi` varchar(200) DEFAULT '0',
  `fokus_berita_id` varchar(200) DEFAULT '0',
  `tags_id` varchar(200) DEFAULT '0',
  `content` varchar(50) DEFAULT '0',
  `gambar` varchar(200) DEFAULT '0',
  `deskripsi` text CHARACTER SET utf8 DEFAULT NULL,
  `komentar_reaksi` varchar(200) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`id_berita`, `uniq_berita`, `user_id`, `tgl`, `title`, `kategori_id`, `editor`, `kontributor`, `status_publikasi`, `fokus_berita_id`, `tags_id`, `content`, `gambar`, `deskripsi`, `komentar_reaksi`) VALUES
(40, '1654993334124', '1649371573677', '2022-06-14 02:24:56', 'Calon Jamaah Haji Sebanyak 344 di Blitar, Bupati Blitar Berpesan Agar Jaga Kesehatan', '1650179715189', '1650078292994', '1654412330062', 'aktif', '1654995284235', 'Blitar; belitar berbudaya;', 'top', 'indonesia-mengabari-com1654993334124.jpg', '<p>Bupati Blitar <strong>Rini Syarifah</strong> secara langsung menghadiri acara pemberangkatan calon jamaah haji di halaman Kantor Pemkab Kanigoro, Sabtu (11/06) pagi. Suasana nampak haru karena kegiatan ini merupakan kali pertama setelah sebelumnya ditunda oleh pemerintah.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Dalam sambutannya, Bupati Blitar Rini Syarifah berpesan kepada 344 jamaah asal wilayah setempat diminta terus menjaga kesehatan selama menunaikan ibadah haji di tanah suci. Mengingat, kegiatannya padat sehingga harus diantisipasi oleh setiap jamaah.</p>\r\n\r\n<p>&quot;Saya harap seluruh jamaah tetap jaga kondisi lantaran cuaca disini dengan disana beda jadi hal ini harus diketahui oleh semuanya. Selain itu, saya juga minta supaya patuh pada aturan panita termasuk disiplin protokol kesehatan,&quot; kata Mak Rini sapaan akrab Bupati Blitar.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Perlu diketahui, sebanyak 344 jamaah terlebih dahulu menuju ke asrama Haji Sukolilo Surabaya. Kemudian, besok Minggu (12/06) para jamaah menuju bandara dan langsung terbang ke Arab Saudi.</p>\r\n', '0'),
(41, '1655172312192', '1649371573677', '2022-06-14 02:27:55', 'Bongkar Kapal Ternak dari NTT, Mentan SYL Pastikan Hewan Kurban Aman', '1650179697019', '1650078292994', '1654412330062', 'aktif', '1654995216170', 'pmk; kurban; ternak; ntt', 'top', 'indonesia-mengabari-com1655172312192.jpg', '<p>Jakarta,- Menteri Pertanian Syahrul Yasin Limpo (SYL) menyampaikan,&nbsp; ketersediaan ternak hewan kurban tahun 2022 dalam kondisi aman meskipun tengah merebaknya Penyakit Mulut dan Kuku (PMK) di beberapa wilayah di Indonesia. Hal tersebut Ia sampaikan saat menyaksikan langsung bongkar muat sapi lokal yang dikirim dari Nusa Tenggara Timur (NTT)&nbsp; untuk memenuhi kebutuhan hewan kurban bagi masyarakat wilayah Jabodetabek dan sekitarnya pada hari Jumat (10/06) di Pelabuhan Tanjung Priok Jakarta.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Mentan katakan, sapi-sapi yang didatangkan&nbsp; adalah sapi yang berasal dari wilayah hijau atau bebas PMK. Kabupaten Kupang, NTT, merupakan wilayah zona hijau.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sapi-sapi tersebut diangkut menggunakan kapal ternak Camara Nusantara. Hingga tanggal 10 Juni 2022, dari 6 trayek beroperasi, tercatat total muatan sebanyak 19.541 ekor sapi telah dikirim untuk memenuhi kebutuhan masyarakat di wilayah Jabodetabek dan sekitarnya.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Menurutnya, menjelang Idul Adha 1443 H, jumlah muatan hewan ternak sapi pada KM Camara Nusantara, kapal ternak yang dioperasikan oleh Pelni akan terus meningkat.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Hari ini ????????. ???????????????????????? ???????????????????????????????????? ???? tiba dan&nbsp; mengangkut sebanyak 550 ekor dan selanjutnya besok hari Sabtu KM. Camara Nusanta?a 2 akan memuat sebanyak 533 ekor sapi,&quot; ungkap Mentan SYL.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Protokol kesehatan hewan menurut Mentan SYL tetap&nbsp; dilakukan, meskipun virus PMK tidak berbahaya bagi manusia, tapi bisa ditularkan melalui manusia, sehingga ia berpesan tetap mentaati protokol kesehatan, termasuk penyemprotan desinfektan.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sebagai informasi, Berdasarkan laporan dari Dinas Peternakan Provinsi NTT, data pengiriman ternak yang mengunakan Kapal Camara Nusantara tercatat sebagai berikut: (1). Camara Nusantara 1 Tujuan Tanjung Priok rencana keberangkatan tanggal 18 Juni 2022 dengan jumlah muatan 550 ekor; (2). Camara Nusantara 2 Tujuan Tanjung Priok rencana keberangkatan tanggal 25 Juni 2022 dengan jumlah muatan 550 ekor; (3). Camara Nusantara 4 Tujuan Samarinda rencana keberangkatan tanggal 11 Juni 2022 dengan jumlah muatan 550 ekor; (4). Camara Nusantara 6 Tujuan Banjarmasin rencana keberangkatan tanggal 25 Juni 2022 dengan jumlah muatan 550 ekor.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Berdasarkan rekapan Permohonan dari Pelaku Usaha yang hendak mengantarpulaukan ternak sampai dengan tanggal 09 Juni 2022, dilaporkan sebagai berikut: (1). Tujuan Tanjung Priuk : 1.180 Ekor direncanakan awal Bulan juli tahun 2022; (2).&nbsp; Tujuan Banjarmasin sebanyak 290 Ekor direncanakan awal Bulan Juli Tahun 2022; (3). Tujuan Samarinda sebanyak 1.750 Ekor direncanakan awal Bulan Juli Tahun 2022.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Selain dari NTT, sapi juga didatangkan melalui tol laut dari Bima NTB sebanyak 6.569 ekor dan melalui jalur bima - boyolali dan toll darat ke DKI sebanyak 3.895 ekor.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Pada kesempatan yang sama Direktur Jenderal Peternakan dan Kesehatan Hewan (Dirjen PKH), Nasrullah menyampaikan, berdasarkan laporan dari Dinas yang membidangi fungsi Peternakan dan Kesehatan Hewan Provinsi dan Data iSIKHNAS update per tanggal 10 Juni 2022&nbsp; bahwa potensi ketersediaan hewan kurban mencapai 2.205.660 ekor (ketersediaan cukup) terdiri atas sapi, kerbau, kambing, dan domba di seluruh Indonesia menjelang Hari Raya Idul Adha 2022.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Nasrullah mengatakan, proyeksi kebutuhan pemotongan hewan kurban diperkirakan mencapai 1.814.402 ekor, terdiri dari 696.574 ekor sapi, 19.652 ekor kerbau, 733.784 ekor kambing, dan 364.393 ekor domba. &quot;Proyeksi ini mempertimbangkan kenaikan jumlah pemotongan hewan kurban sebesar 5-10% dari jumlah pemotongan tahun lalu 2021,&quot; ungkap Nasrullah.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Ditjen PKH telah melakukan koordinasi dengan Dinas yang membidangi Fungsi Peternakan dan Kesehatan Hewan seluruh provinsi di Indonesia untuk memastikan ketersediaan dan pemenuhan stok hewan kurban.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Nasrullah lebih lanjut menjeladkan bahwa&nbsp; upaya yang telah dilakukan oleh Kementerian Pertanian untuk kesiapan menghadapi Idul Adha Tahun 2022 sekaligus dalam upaya pengendalian penyakit PMK antara lain: 1) Hewan berasal dari wilayah hijau (bebas PMK) dan bukan berasal dari daerah kab./kota yang masuk dalam zona merah (terkonfirmasi&nbsp; PMK hasil Laboratorium); 2) Rekayasa jalur laut dan pintu masuk hewan kurban ke Pulau Jawa dan rekayasa jalur darat di pulau Jawa; 3) Pendataan dan sosialiasi PMK kepada pedagang hewan kurban dan menyediakan Posko pemeriksaan kesehatan hewan di sentra-sentra penjualan hewan kurban akan dilakukan oleh seluruh dinas kabupaten/kota; 4) . Petunjuk teknis pelaksanaan pemotongan kurban saat wabah PMK telah disiapkan untuk dipedomani di seluruh daerah; 5) Keluarnya fatwa dan petunjuk dari MUI terkait kriteria hewan kurban saat wabah PMK; 6). Anjuran melalui MUI kepada masyarakat untuk melaksanakan kurban di wilayah sentra ternak untuk meminimalisir pergerakan ternak.&nbsp;&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Intinya kami saat ini berupaya semaksimal mungkin untuk selalu berkoordinasi dengan semua pihak agar pelaksanaan kurban nanti aman untuk masyarakat kita,&quot; pungkasnya.</p>\r\n', '0'),
(43, '1655178175840', '1649371573677', '2022-06-14 03:47:54', 'Keutamaan Qurban, Amalan yang Paling Dicintai Allah SWT', '1649813996464', '1650078292994', '1654412330062', 'aktif', '1654995138195', 'qurban; lebaran haji; lebaran qurban;', 'populer', 'indonesia-mengabari-com-1655178175840.jpg', '<p>Qurban adalah amalan yang paling dicintai Allah SWT. Ibadah khas umat Islam ini dilaksanakan pada hari raya Idul Adha atau 10 Zulhijah.<br />\r\nIstilah qurban berasal dari bahasa Arab Udh-hiyah yang artinya hewan ternak yang disembelih pada hari Idul Adha dan hari Tasyriq dalam rangka mendekatkan diri kepada Allah SWT.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Berikut beberapa hal yang patut diketahui tentang ibadah qurban<br />\r\nA. Dalil Al-Qur&#39;an dan Hadits tentang Qurban<br />\r\nIbadah qurban disyariatkan pada tahun ketiga Hijriyah, bersamaan dengan pensyariatan zakat dan sholat hari raya. Allah SWT telah mensyariatkan pelaksanaan qurban melalui firman-Nya dalam surah Al Kautsar ayat 1-3,<br />\r\n<br />\r\n??????? ???????????? ???????????? - ? ??????? ????????? ?????????? - ? ????? ????????? ???? ??????????? ? - ?<br />\r\n<br />\r\nArtinya: &quot;Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak. Maka laksanakanlah salat karena Tuhanmu, dan berqurbanlah (sebagai ibadah dan mendekatkan diri kepada Allah). Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah).&quot;<br />\r\n<br />\r\nPerintah berqurban juga dijelaskan dalam hadits shahih riwayat Imam Ahmad, Ibnu Majah, dan Imam al-Hakim yang berasal dari Abu Hurairah RA. Dia berkata Rasulullah SAW bersabda:<br />\r\n<br />\r\n&quot;Siapa yang memiliki kelapangan tapi tidak menyembelih qurban, janganlah mendekati tempat sholat kami.&quot;<br />\r\n<br />\r\nMelansir buku Fiqih Qurban Perspektif Madzhab Syafi&#39;iy oleh Muhammad Ajib, mengenai hewan qurban, Rasulullah SAW menyembelih dua ekor kambing kibash yang bertanduk, beliau menyembelihnya dengan tangan beliau sambil menyebut nama Allah dan bertakbir, serta meletakkan kaki beliau di atas pangkal lehernya. Hal ini termaktub dalam riwayat Imam Muslim tentang hewan qurban.<br />\r\n<br />\r\nB. Hukum Qurban<br />\r\nSyaikh Sulaiman Ahmad Yahya Al-Faifi menerangkan dalam Ringkasan Fikih Sunnah Sayyid Sabiq, hukum berqurban adalah sunnah muakkadah (sangat dianjurkan) dan makruh bagi orang yang mampu apabila tidak mengerjakannya.<br />\r\n<br />\r\nKesunnahan qurban juga dijelaskan dalam hadits shahih riwayat Imam Ahmad dan Imam al-Hakim. &quot;Tiga perkara yang bagiku hukumnya fardhu tapi bagi kalian hukumnya tathawwu&#39; (sunnah), yaitu sholat witir, menyembelih udhiyah, dan sholat dhuha.&quot;<br />\r\n<br />\r\nIbadah qurban menjadi wajib hukumnya apabila telah menjadi nadzar sebelumnya. Dalil mengenai hal ini adalah sabda Nabi Muhammad SAW, &quot;Barang siapa bernadzar untuk menaati Allah, maka hendaklah ia melaksanakannya.&quot; (HR Bukhari, Abu Dawud, dan lainnya).<br />\r\n<br />\r\nSelain itu, qurban juga menjadi wajib ketika seseorang berkata, &quot;Ini untuk Allah&quot; atau &quot;Ini adalah hewan qurban&quot;. Menurut Imam Malik, jika seseorang membeli seekor hewan dengan niat akan dijadikan sebagai hewan qurban, maka ia wajib melaksanakannya.</p>\r\n\r\n<p><br />\r\nC. Keutamaan Melaksanakan Qurban<br />\r\nAmmi Nur Baits dalam bukunya Panduan Qurban menjelaskan, menyembelih qurban termasuk amal saleh yang memiliki keutamaan besar. Syaikhul Islam dalam Majmu&#39; Fatawa mengatakannya lebih utama daripada sedekah.<br />\r\n<br />\r\n&quot;Berqurbanlah, aqiqah, hadyu sunah, semuanya lebih baik, daripada sedekah dengan uang senilai hewan yang disembelih,&quot; tulis Syaikhul Islam.<br />\r\n<br />\r\nAt Tirmidzi, Ibnu Majah, dan al Hakim meriwayatkan hadits dari jalur Sulaiman bin Yazid bahwa qurban adalah amalan yang lebih dicintai Allah SWT pada hari Idul Adha.<br />\r\n<br />\r\n&quot;Tidak ada amalan manusia pada hari raya Qurban (Idul Adha) yang dicintai Allah melebihi amalan mengalirkan darah (menyembelih hewan). Sesungguhnya hewan qurban itu akan datang pada hari kiamat beserta tanduk-tanduknya, bulu-bulu, dan kuku-kukunya. Sungguh, sebelum darah qurban itu mengalir ke tanah, pahalanya telah diterima di sisi Allah. Oleh sebab itu, tenangkanlah jiwa kalian dengan berqurban.&quot; (At Tirmidzi berkata hadits hasan. Namun, Al-Albani mendhaifkannya dalam Dha&#39;if Sunan At Tirmidzi dan Dha&#39;if Al-Jami&#39; Ash-Shaghir).<br />\r\n<br />\r\nProf Wahbah Az Zuhaili dalam kitab Fiqhul Islam wa Adillatuhu Juz 4 menjelaskan, hikmah dari melaksanakan qurban adalah sebagai wujud ungkapan syukur kepada Allah SWT atas nikmat-Nya yang beragam.</p>\r\n', '0'),
(44, '1655346922920', '1649371573677', '2022-06-21 02:01:29', 'DINAS PETERNAKAN MASIH TUNGGU HASIL LAB SUSPEK PMK DI JEMBER', '1655346794800', '1650078292994', '1654412330062', 'aktif', '1655346841540', 'pmk; penyakit; penyaki mulut dan kaki; jember;', 'side', 'indonesia-mengabari-com-1655346922920.jpg', '<p>Dinas Peternakan Kabupaten Jember masih menunggu hasil pemeriksaan suspek hewan ternak yang diduga terserang penyakit mulut dan kuku (PMK). Sampel sebelumnya telah diambil dan diperiksa oleh tim dari Laboratorium Kesehatan Hewan (Labkeswan) Provinsi Jawa Timur di Malang.</p>\r\n\r\n<p>Sampel hasil ternak yang menjadi suspek PMK diambil dari dua lokasi yakni di Desa Curah Lele Kecamatan Balung dan Desa Purwoasri Kecamatan Balung.</p>\r\n\r\n<p>Kepala Dinas Peternakan Jember, Andi Prastowo, menjelaskan, hewan ternak yang diperiksa. memang memiliki gejala mirip dengan PMK. Namun pihaknya belum bisa memastikan hewan ternak yang memiliki gejala itu terserang PMK atau tidak, sebelum ada hasil laboratorium oleh tim Labkeswan Jatim.</p>\r\n\r\n<p>Andi menjelaskan meskipun tingkat penularan PMK tergolong cepat, akan tetapi tingkat mortalitas yang disebabkan oleh penyakit ini rendah. Tingkat kematian yang disebabkan oleh PMK berkisar 1 sampai dengan 5 persen. Hewan ternak yang terserang PMK juga bisa disembuhkan dengan penanganan yang tepat.</p>\r\n\r\n<p>Pihaknya mengimbau agar masyarakat pemilik hewan ternak yang memiliki gejala PMK, seperti demam, bisa segera melaporkan kepada petugas Dinas Peternakan maupun puskeswan terdekat. Ia juga menegaskan masyarakat tidak perlu khawatir tertular, karena PMK tidak berbahaya bagi manusia.</p>\r\n\r\n<p>Beberapa wilayah di Jawa Timur telah mengkonfirmasi wabah virus PMK. Sebelumnya dikabarkan ada 4 Kabupaten yang melaporkan kasus PMK, saat ini sudah berkembang menjadi 7 Kabupaten. Antara lain Kabupaten Malang<br />\r\nSidoarjo, Gresik, Lamongan, Mojokerto, dan Probolinggo. Serta yang terdekat dengan Jember yaitu Lumajang.</p>\r\n', '0'),
(45, '1655734150977', '1655712673140', '2022-06-20 14:16:14', 'Operasi Pekat Tahun 2022, Polresta Banyuwangi Amankan Premanisme Yang Meresahkan Masyarakat', '1649813996464', '1650078292994', '1655712673140', 'aktif', '1654995216170', 'Operasi Pekat Polresta Banyuwangi 2022', 'top', 'indonesia-mengabari-com-1655734150977.jpg', '<p>*Operasi Pekat Tahun 2022, Polresta Banyuwangi Amankan Premanisme Yang Meresahkan Masyarakat*</p>\r\n\r\n<p>Banyuwangi : Kepolisian Resor Kota (Polresta) Banyuwangi menggelar press release hasil dari Operasi Pekat Semeru 2022 bertempat di Joglo Polresta Banyuwangi, Senin pagi (20/6/2022).</p>\r\n\r\n<p>Hadir dalam kegiatan tersebut Wakapolresta Banyuwangi AKBP Didik Harianto, Kasat Reskrim Kompol Agus Sobarnapraja, Kasat Narkoba Kompol Rudy Prabowo, dan Kasihumas, Iptu Lita Kurniawan, serta beberapa awak media cetak dan elektronik.</p>\r\n\r\n<p>Kapolresta Banyuwangi AKBP Deddy Foury Millewa melalui Wakapolresta Banyuwangi menyampaikan bahwa jumlah Laporan Polisi terkait pelaksanaan Ops Pekat Semeru T.A. 2022&nbsp; selama 12 (dua belas) hari terhitung mulai tanggal 23 Mei sampai dengan 3 Juni 2022 sebanyak 125 Laporan Polisi.</p>\r\n\r\n<p>&ldquo;Operasi Pekat Semeru dengan sasaran handak (bahan peledak)/mercon, Narkoba, premanisme, prostitusi, pornografi, judi, Miras, petugas/oknum aparat yang menjadi becking tindak pidana),&rdquo; ujar Wakapolresta Banyuwangi kepada awak media.</p>\r\n\r\n<p>AKBP Didik berhasil mengungkap perjudian 20 kasus, prostitusi 1 kasus, pornografi&nbsp; 5 kasus, premanisme 17 kasus, penyalahgunaan Narkoba 42 kasus, minuman keras 37 kasus.</p>\r\n\r\n<p>&ldquo;Kami telah mengamankan 132 orang tersangka meliputi perjudian 24 orang, prostitusi 1 orang, pornografi 5 orang, premanisme 18 orang, penyalahgunaan Narkoba 44 orang, minuman keras 37 orang,&rdquo; papar Wakapolresta Banyuwangi.</p>\r\n\r\n<p>AKBP Didik menerangkan bahwa perkara Prostitusi, modus operandinya adalah para pelaku mengirimkan beberapa foto perempuan/wanita melaluai media sosial Whatsapp dan menyepakati harga dan lokasi pertemuan.&nbsp;</p>\r\n\r\n<p>Sedangkan perkara pornografi&nbsp; para pelaku menyebarkan dan membagikan foto atau vidio yang mengandung konten kesusilaan, dengan cara menyebarkan melalui media sosial (Twitter).</p>\r\n\r\n<p>Jajaran Satreskrim juga berhasil mengamankan 18 (delapan belas) orang pelaku aksi pungutan liar (Pungli) dengan menyuruh preman yang melakukan tindakan kriminal di lapangan. Seperti mencuri, merampas handphone, memeras, dan melakukan pengrusakan.</p>\r\n\r\n<p>&ldquo;Untuk perkara Prostitusi kami sangkakan dengan&nbsp; pasal 296 KUH Pidana dan/atau pasal 27 ayat 1 juncto pasal 45 ayat 1 undang-undang nomor 19 tahun 2016 tentang perubahan atas undang-undang nomor 11 tahun 2008 dan/atau pasal 2 ayat 1 nomor 21 tahun 2017 tentang pemberantasan tindak pidana perdagangan orang dengan pidana penjara paling lama 6 tahun dan/atau denda paling banyak Rp1 miliar,&rdquo; papar Wakapolresta.</p>\r\n\r\n<p>Sedangkan perkara pornografi Polresta Banyuwangi menggunakan pasal 4 ayat (1) UU RI No. 44 tahun 2008 tentang Pornografi dan/atau pasal 27 ayat (1) UU RI No.19 tahun 2016 tentang perubahan atas UU No.11 tahun 2008 tentang Informasi dan Transaksi Elektronik (ITE) dapat dipidana penjara paling singkat 6 bulan dan paling lama 12 tahun dan/atau pidana denda paling sedikit Rp250 juta dan paling banyak Rp. 6 miliar.</p>\r\n\r\n<p>AKBP Didik menegaskan bahwa pihaknya melakukan upaya maksimal dengan mengerahkan semua sumber daya yang ada baik di tingkat Polresta maupun Polsek Jajaran dan melalui Tim Opsnal Resmob yang bertugas di lapangan untuk melakukan penegakkan hukum secara tegas dan terukur kepada para pelaku tindak kejahatan yang berdampak meresahkan dan merugikan masyarakat. (Humas Polresta Banyuwangi)</p>\r\n', '0'),
(46, '1655763713084', '1655712673140', '2022-06-20 22:26:05', 'Jual Ayam Tetangga, Pemuda di Jurangjero Gading Dipenjara 3 Bulan', '1650179675166', '1650078292994', '1655712673140', 'aktif', '1654995138195', 'Jual Ayam Tetangga di penjara', 'top', 'indonesia-mengabari-com-1655763713084.jpg', '<p>Gading,- Slamet Riyadi (29) warga Dusun Koncean, RT/08 RW/03 , Desa Jurangjero, Kecamatan Gading, Kabupaten Probolinggo, melaporkan tetangganya sendiri, Saparudin (24).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Jalur hukum ditempuh Slamet karena geram atas ulah Saparuddin, yang hendak menjual ayam peliharaannya. Awalnya, Slamet mengadukan ulah pelaku kepada desa (Kades) setempat, Selasa (14/6/22).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Konflik antar tetangga ini berawal saat Saparudin (24), mendapati ayam milik Slamet memakan pakan ayam miliknya. Seketika itu, ia lantas membawa ayam milik Slamet ke Pasar Maron untuk dijual.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&ldquo;Setelah korban mengetahui hal tersebut, korban langsung mengejar pelaku dan kemudian mendapati pelaku di Pasar Maron. Korban lalu merampas ayam miliknya kemudian dibawa pulang ke rumahnya,&rdquo; kata Kanit Reskrim Polsek Gading, Aipda Antono, Senin (20/6/22).</p>\r\n\r\n<p>Ketika dimediasi secara kekeluargaan, tidak mendapatkan titik temu. Kemudian, kami (memfasilitasi) mediasi lagi secara kekeluargaan, Sabtu tanggal 18 Juni, namun korban tetap meminta kejadian ini proses secara hukum,&rdquo; jelasnya.</p>\r\n\r\n<p>Alhasil, pelaku tetap diproses hukum atas dakwaan Tindak Pidana Ringan (Tipiring). Dalam sidang tipiring di Pengadilan Negeri Kraksaan, Saparuddin didakwa melanggar UUD KUHP 364 tentang pencurian dengan barang yang dicuri tidak lebih dari Rp250 ribu.</p>\r\n\r\n<p>&ldquo;Hasil dari sidang barusan memutuskan bahwa terdakwa yang bernama Saparudin ini dikenai vonis atau putusan percobaan kurungan selama 3 bulan,&rdquo; tandas Andono.&nbsp;<strong>(*)</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n', '0'),
(47, '1655764087431', '1655712673140', '2022-06-20 22:30:12', 'Operasi oekatbantuangi ', '1650179675166', '1650078292994', '1655712673140', 'aktif', '1654995138195', 'Operasi pekat banyuangi', 'top', 'indonesia-mengabari-com-1655764087431.jpg', '<p>#informasibanyuwangi&nbsp;</p>\r\n\r\n<p>Banyuwangi - Operasi Pekat Semeru 2022, Polresta Banyuwangi membekuk ratusan pelaku aksi kejahatan. Kasus premanisme dan perjudian mendominasi dalam ungkap operasi selama 12 hari tersebut terhitung mulai tanggal 23 Mei sampai dengan 3 Juni 2022.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Total terdapat 125 laporan dari masyarakat. Hasilnya sebanyak 20 kasus perjudian; prostitusi 1 kasus, pornografi 5 kasus, premanisme 17 kasus, penyalahgunaan Narkoba 42 kasus dan minuman keras 37 kasus.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Kami telah mengamankan 132 orang tersangka meliputi perjudian 24 orang, prostitusi 1 orang, pornografi 5 orang, premanisme 18 orang, penyalahgunaan Narkoba 44 orang, minuman keras 37 orang,&quot; ujar Wakapolresta Banyuwangi AKBP Didik Harianto, kepada detikJatim, Senin (20/6/2022).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Diakui Didik, dominasi aksi kejahatan di Banyuwangi adalah premanisme dan perjudian. Jajaran Satreskrim juga berhasil mengamankan 18 orang pelaku aksi pungutan liar (pungli) dengan menyuruh preman yang melakukan tindakan kriminal di lapangan. Seperti mencuri, merampas handphone, memeras, dan melakukan perusakan.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Dominasi pada kasus perjudian dan premanisme. Selain itu ada juga kasus pencurian dan penrusakan,&quot; tegasnya.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Operasi Pekat Semeru dengan sasaran handak (bahan peledak)/mercon, narkoba, premanisme, prostitusi, pornografi, judi, Miras, petugas/oknum aparat yang menjadi becking tindak pidana),&quot; tambah Didik.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Didik menerangkan selain perkara premanisme dan perjudian, kasus prostitusi dan pornografi juga diungkap dalam kasus ini. Modus operandinya adalah, para pelaku mengirimkan beberapa foto perempuan/wanita melaluai media sosial Whatsapp dan menyepakati harga dan lokasi pertemuan.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sedangkan perkara pornografi para pelaku menyebarkan dan membagikan foto atau video yang mengandung konten kesusilaan, dengan cara menyebarkan melalui media sosial (Twitter).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Untuk perkara Prostitusi kami sangkakan dengan pasal 296 KUH Pidana dan/atau pasal 27 ayat 1 juncto pasal 45 ayat 1 undang-undang nomor 19 tahun 2016 tentang perubahan atas undang-undang nomor 11 tahun 2008 dan/atau pasal 2 ayat 1 nomor 21 tahun 2017 tentang pemberantasan tindak pidana perdagangan orang dengan pidana penjara paling lama 6 tahun dan/atau denda paling banyak Rp1 miliar,&quot; papar Didik.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sedangkan perkara pornografi Polresta Banyuwangi menggunakan pasal 4 ayat (1) UU RI No. 44 tahun 2008 tentang Pornografi dan/atau pasal 27 ayat (1) UU RI No.19 tahun 2016 tentang perubahan atas UU No.11 tahun 2008 tentang Informasi dan Transaksi Elektronik (ITE) dapat dipidana penjara paling singkat 6 bulan dan paling lama 12 tahun dan/atau pidana denda paling sedikit Rp250 juta dan paling banyak Rp. 6 miliar.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Upaya maksimal dengan mengerahkan semua sumber daya yang ada baik di tingkat Polresta maupun Polsek Jajaran dan melalui Tim Opsnal Resmob yang bertugas di lapangan untuk melakukan penegakkan hukum secara tegas dan terukur kepada para pelaku tindak kejahatan yang berdampak meresahkan dan merugikan masyarakat,&quot; pungkasnya.</p>\r\n', '0'),
(48, '1655764517625', '1655712673140', '2022-06-21 02:00:23', 'Mantan pemain timnas indonesia, John Baukuring', '1650179904047', '1650078292994', '1655712673140', 'aktif', '1654995262827', 'Mantan pemain timnas; indonesia; sepakbola;', 'slider', 'indonesia-mengabari-com-1655764517625.jpg', '<p>Masih ingat Jhon van Beukering? Kini, mantan pemain Timnas Indonesia ini berprofesi menjadi penjaga keamanan di klub striptis.</p>\r\n\r\n<p>Kabarnya, Jhonny van Beukering tengah dalam masalah keuangan. Selepas tak bermain bola, ia menjalani berbagai profesi: pelatih klub sepak bola amatir, klinik kesehatan mental, melatih kebugaran, dan kini bekerja menjadi satpam klub striptis yang bernama De Nacht di Tilburg, Belanda.</p>\r\n\r\n<p>Van Beukering sempat sukses saat bermain untuk beberapa klub, dari Vitesse Arnhem hingga Feyenoord Rotterdam.</p>\r\n\r\n<p>Ia pernah bermain di Indonesia bersama Pelita Jaya, kembali ke Belanda untuk bermain di klub amatir dan mengakhiri karier di usia 28 tahun karena cedera.</p>\r\n\r\n<p>Saat berkarier di Indonesia, ia sempat tak menerima gaji karena beberapa masalah hukum.</p>\r\n\r\n<p>&ldquo;Saya berpindah dari surga ke neraka dan banyak tak berpikir dengan kehidupan yang saya alami. Saya kehilangan semuanya dan kami harus hidup dengan keluarga yang memakan biaya 50 euro per-pekan,&rdquo; ujar van Beukering.</p>\r\n\r\n<p>Meski begitu, dilansir dari Voetbalzone, ia menyukai pekerjaannya.</p>\r\n', '0'),
(49, '1655777924226', NULL, '2022-06-21 02:21:54', 'Pertandingan Bola Jember Vs Kota Malang ricuh oleh pemain', '1650179904047', '1650078292994', '1649377975811', 'aktif', '1654995262827', 'jember; porprof; sepakbola; wayae jember;', '0', 'indonesia-mengabari-com-1655777924226.jpg', '<p>Pertandingan sepak bola yang merupakan laga penyisihan perdana Grup C pada Pekan Olahraga Provinsi (Porprov) VII Jawa Timur antara tim Kabupaten jember melawan kesebelasan Kota Malang di Stadion Notohadinegoro, Kabupaten Jember, Jumat (17/6/2022), diwarnai kericuhan dan perkelahian antarpemain.</p>\r\n\r\n<p>Perkelahian itu terjadi pada menit ke-42 yang bermula dari adu mulut dan saling dorong, namun mendadak salah satu pemain berlari dan meloncat sambil melayangkan pukulan ke arah kerumunan tim tuan rumah&nbsp;<a href=\"https://www.liputan6.com/tag/jember\">Jember</a>&nbsp;sehingga terjadi aksi balasan.</p>\r\n\r\n<p>Kericuhan dan perkelahian pemain itu membuat wasit Bangil Syah Putra dari Kota Batu mengeluarkan tiga kartu merah, masing-masing dua untuk pemain Kabupaten Jember, yakni Danang Suprayitno dan Indra Lesmana. Sedangkan satu kartu lainnya untuk pemain Kota Malang, Ega Sumitro, dilansir dari Antara.</p>\r\n\r\n<p>Perkelahian pemain kedua kesebelasan itu juga membuat Bupati Jember Hendy Siswanto yang menyaksikan langsung laga di tribun kehormatan ikut berdiri dan mengangkat tangan untuk mencoba menenangkan para pemain. Bahkan ofisial kedua tim juga masuk ke tengah lapangan untuk melerai pemain yang berkelahi.</p>\r\n\r\n<p>Pertandingan tuan rumah Jember vs Kota Malang berakhir dengan skor imbang 1-1. Gol kesebelasan Kabupaten Jember dicetak Indra Lesmana Suteja pada menit ke-37, sedangkan gol Kota Malang dicetak oleh Alan Nuril pada masa tambahan waktu.</p>\r\n\r\n<p>&quot;Pertandingan tadi sangat bagus dan sangat memuaskan, meskipun kami harus kehilangan dua pemain akibat terkena kartu merah,&quot; kata pelatih kesebelasan&nbsp;<a href=\"https://www.liputan6.com/tag/jember\">Jember</a>&nbsp;M. Rofiq usai pertandingan.</p>\r\n\r\n<p>Rofiq akan memaksimalkan para pemain yang ada untuk menghadapi pertandingan selanjutnya, meskipun dua pemainnya tidak bisa bertanding.</p>\r\n', '0'),
(50, '1655789251576', '1655712673140', '2022-06-21 05:31:11', 'Ulang Tahun presiden Jokowi Ke 61', '1650179715189', '1650078292994', '1655712673140', 'aktif', '1650425503227', 'Ulang tahun presiden', 'top', 'indonesia-mengabari-com-1655789251576.jpg', '<p>Jakarta. Selamat ulang tahun ke-61 Presiden Joko Widodo (Jokowi). Hari ini tanggal 21 Juni 1961 adalah hari kelahiran Presiden Jokowi.</p>\r\n\r\n<p>Pada hari ulang tahun ke-61, Presiden Jokowi mendapatkan banyak ucapan selamat dari banyak pihak. Ucapan selamat ulang tahun ke-61 disampaikan kepada Presiden Jokowi melalui akun media sosial, salah satunya Instagram @Jokowi.</p>\r\n\r\n<p>Salah satunya dari Menteri Pariwisata dan Ekonomi Kreatif (Menparekraf) Sandiaga Uno. &quot;Selamat ulang tahun Bapak presiden RI @Jokowi yang ke-61 tahun, barakallah fii umrik. Saya, keluarga serta juta-an masyarakat Indonesia akan selalu mendoakan bapak, semoga Allah SWT melimpahkan sebanyak-banyaknya rahmat, karunia, nikmat sehat, rezeki berlimpah yang barokah, terus-menurs dalam lindungan Allah SWT AAmiin Ya Rabbal&#39;alamin&quot; begitu potongan bunyi pesan akun resmi Menparekraf @Sandiuno.</p>\r\n\r\n<p>Meski mendapat banyak ucapan selamat ulang tahun ke-61, akun Instagram @Jokowi belum memberikan respon. Namun, selama ini Presiden Jokowi memang tidak pernah merayakang ulang tahun dengan perayaan khusus.</p>\r\n\r\n<p>Jokowi mengaku tidak terbiasa merayakan hari kelahirannya dengan menyelenggarakan acara spesial. Hal itu disampaikannya saat momen hari ulang tahun ke-60 pada tahun 2021 lalu melalui akun Instagram pribadinya @jokowi.</p>\r\n\r\n<p>&quot;Seperti tahun-tahun yang silam, saya tak terbiasa merayakan hari ulang tahun sendiri. Apalagi sekarang, di tengah negeri ini sedang membutuhkan kerja keras kita semua untuk bersama-sama keluar dari pandemi,&quot; kata Jokowi.</p>\r\n\r\n<p>Mengutip website PresidenRI.go.id, Jokowi lahir di Surakarta, Jawa Tengah, pada 21 Juni 1961. Jokowi lahir di di Rumah Sakit Brayat Minulyo, Kota Surakarta, Jawa Tengah.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Jokowi adalah putra sulung dari pasangan Notomihardjo dan Sudjiatmi. Jokowi memiliki tiga adik perempuan dan satu adik laki-laki tetapi meninggal saat proses persalinan. Tahun 2022 ini, salah satu adik perempuannya Ida Yati diperistri oleh Ketua Mahkamah Konstitusi (MK) Anwar Usman.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Jokowi pertama kali terjun ke pemerintahan sebagai Wali Kota Surakarta (Solo) pada 28 Juli 2005 hingga 1 Oktober 2012. Sebelumnya, Jokowi menjalani profesi sebagai pengusaha mebel di Solo.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Selepas itu, Jokowi menjabat sebagai Gubernur DKI Jakarta pada 15 Oktober 2012 sebelum terpilih sebagai Presiden Republik Indonesia pada Pemilihan Presiden (Pilpres) 2014. Saat Pilpres tersebut Joko Widodo terpilih bersama pasangannya, Jusuf Kalla.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Dalam Pilpres 2019, Jokowi kembali terpilih sebagai Presiden Republik Indonesia untuk masa jabatannya yang kedua. Kali ini, Jokowi didampingi oleh Wakil Presiden K.H. Ma&rsquo;ruf Amin dan dilantik pada 20 Oktober 2019 untuk masa jabatan 2019 hingga 2024 mendatang.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Pembangunan infrastruktur menjadi program prioritas di masa kepemimpinannya yang pertama. Pembangunan yang dilakukan secara merata hingga ke daerah terluar Indonesia ini dilakukan untuk mengejar ketertinggalan Indonesia dalam sektor ini dibandingkan negara-negara lain.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Program prioritas tersebut dibarengi dengan program berupa bantuan sosial seperti Kartu Indonesia Pintar (KIP), Kartu Indonesia Sehat (KIS), hingga Program Keluarga Harapan (PKH). Selain itu, sejak awal masa jabatannya, Jokowi juga mengupayakan reforma agraria dengan salah satunya melakukan percepatan penerbitan sertifikat hak atas tanah untuk mengurangi terjadinya sengketa lahan oleh karena ketiadaan sertifikat.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Di masa jabatannya yang kedua, Joko Widodo mengalihkan fokus pemerintahan pada pembangunan dan peningkatan kapasitas sumber daya manusia Indonesia untuk dapat bersaing dengan negara-negara lainnya. Adapun program pembangunan infrastruktur masih terus dilanjutkan bersamaan dengan itu.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Kini, karier politik Jokowi mulai diturunkan ke anak dan menantunya. Putra sulung Jokowi, Gibran Rakabuming Raka telah menjabat sebagai Wali Kota Solo. Lalu menantu Jokowi, Mohammad Bobby Afif Nasution, suami dari nak kedua adalah Kahiyang Ayu menjadi Wali Kota Medan.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Selamat ulang tahun ke-61 Presiden Jokowi. Semoga Presiden Jokowi selalu sehat dan berhasil membawa Indonesia ke arah yang lebih baik.</p>\r\n', '0'),
(51, '1655847897013', '1655712673140', '2022-06-28 22:47:18', 'Piala Dunia 2022  Qatar, Fans dilarang kumpul kebo dan pesta miras', '1650179904047', '1650078292994', '1655712673140', 'aktif', '1654995262827', 'Piala dunia', 'top', 'indonesia-mengabari-com-1655847897013.jpg', '<p>Dinukil dari Daily Star, Qatar dilaporkan tidak mentolerir tindakan yang melanggar adat ketimuran. Hotel-hotel di sana memberlakukan peraturan super ketat terkait hal-hal yang dilarang dilakukan sepanjang Piala Dunia.</p>\r\n\r\n<p>Peraturan pertama adalah seks bebas. Sebuah laporan menyebutkan bahwa hanya pasangan suami istri sah saja yang boleh bermesraan, baik itu di hotel maupun di tempat publik.</p>\r\n\r\n<p>&quot;Seks tidak ada dalam menu. Kecuali Anda berstatus pasangan suami istri,&quot; bunyi laporan Daily Star.</p>\r\n\r\n<p>&quot;Tidak boleh ada cinta satu malam selama Piala Dunia 2022 berlangsung.&quot;</p>\r\n\r\n<p>Selain itu, suporter dilarang pesta miras.</p>\r\n\r\n<p>&quot;Tidak boleh ada pesta-pesta. Semua harus tunduk pada aturan, kecuali mau masuk penjara, ya silahkan. Minum-minum khamr sangat dilarang.&quot;</p>\r\n\r\n<p>Nasser Al-Khater, Ketua Umum Piala Dunia 2022 menerangkan, ketatnya peraturan selama turnamen diterapkan selain untuk menyesuaikan dengan hukum yang sudah ada, adalah demi keamanan.</p>\r\n\r\n<p>&quot;Keamanan dan kenyamanan seluruh suporter adalah hal terpenting buat kami,&quot; kata Al-Khater.</p>\r\n\r\n<p>&quot;Tetapi menunjukkan kasih sayang di depan umum, itu bukan bagian dari budaya kita, dan itu berlaku untuk semua orang.&quot;</p>\r\n\r\n<p>Saking ketatnya, jika ada berani yang melanggar peraturan yang telah dibuat, sanksi penjara minimal 7 tahun siap menanti.&nbsp;</p>\r\n\r\n<p>Kebijakan yang bagus dan tegas????</p>\r\n', '0'),
(52, '1655943713814', '1649371573677', '2022-06-23 04:28:03', 'digitalent yang di adakan kominfo', '1650179730023', '1650078292994', '1649377975811', 'aktif', '1654995284235', 'digitalent; kominfo;', 'side', 'indonesia-mengabari-com-1655943713814.jpg', '<p>Program Digital Talent Scholarship adalah program pelatihan pengembangan kompetensi yang telah diberikan kepada talenta digital Indonesia sejak tahun 2018. Program Digital Talent Scholarship tahun 2021 didesain untuk menciptakan ekosistem seimbang dalam memaksimalkan peran pentahelix (pemerintah, komunitas/masyarakat, institusi pendidikan tinggi, dunia usaha, dan media) untuk menjadi fasilitator dan akselerator pendukung ekonomi digital.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Program Digital Talent Scholarship bertujuan untuk meningkatkan keterampilan dan daya saing, produktivitas, profesionalisme SDM bidang teknologi informasi dan komunikasi bagi angkatan kerja muda Indonesia, masyarakat umum, dan aparatur sipil negara. Program DTS 2021 secara garis besar dibagi menjadi delapan akademi, yaitu:</p>\r\n\r\n<ol>\r\n	<li>Fresh Graduate Academy (FGA)</li>\r\n	<li>Vocational School Graduate Academy (VSGA)</li>\r\n	<li>Thematic Academy (TA)</li>\r\n	<li>Professional Academy (ProA)</li>\r\n	<li>Government Transformation Academy (GTA)</li>\r\n	<li>Digital Entrepreneurship Academy (DEA)</li>\r\n	<li>Digital Leadership Academy (DLA)</li>\r\n	<li>Talent Scouting Academy (TSA)</li>\r\n</ol>\r\n\r\n<p>bisa di akses melali link&nbsp;<a href=\"https://digitalent.kominfo.go.id/\">ini</a></p>\r\n', '0'),
(53, '1655965283154', '1655712673140', '2022-06-23 06:22:05', 'Putra ulama Buya Arrazy Tewas Tertembak Senjata Api', '1650179675166', '1650078292994', '1655712673140', 'aktif', '1654995138195', 'Putra Ulama Tewas Tertembak senjata api', 'top', 'indonesia-mengabari-com-1655965283154.jpg', '<p>Putra ulama Arrazy Hasyim tewas tertembak senjata api milik anggota Polri yang menjadi pengawalnya. Korban yang masih berusia tiga tahun tersebut tewas dengan luka tembak di bagian dagu.</p>\r\n\r\n<p>Kepala Kepolisian Resor (Kapolres) Tuban AKBP Darman mengatakan, peristiwa yang menewaskan anak seorang ulama itu terjadi pada Rabu (22/6/2022) sekitar pukul 13.30 WIB.</p>\r\n\r\n<p>Peristiwa itu bermula ketika Buya Arrazy dan keluarganya berkunjung ke rumah mertua di Desa Palang, Kecamatan Palang, Kabupaten Tuban, Jawa Timur.</p>\r\n\r\n<p>Saat itu, anggota Polri berinial M yang bertugas menjadi pengawal pribadi Buya Arrazy hendak menunaikan shalat dzuhur.</p>\r\n\r\n<p>Sebelum shalat, M telah meletakkan senjata yang dibawanya di tempat aman.</p>\r\n\r\n<p>Namun saat M sedang shalat, anak pertama Arrazy berinisial H (5) mengambil senjata tersebut dan digunakan bermain-main dengan sang adik. Tiba-tiba terdengan tembakan dari senjata api. Korban terluka tembak di bagian dagu.</p>\r\n\r\n<p>Kapolres Tuban AKBP Darman menjelaskan peristiwa tersebut merupakan murni kecelakaan. Meski tidak ada faktor kesengajaan, kapolres menyatakan M tetap menjalani pemeriksaan.</p>\r\n\r\n<p>Adapun korban telah dimakamkan oleh keluarga di Makam Islam Wareng, Desa Palang, Kecamatan Palang, Kabupaten Tuban, Jawa Timur, Rabu (22/6/2022).&nbsp;</p>\r\n', '0'),
(54, '1656905893069', '1655712673140', '2022-07-04 03:39:29', 'Tradisi jemur kasur di banyuangi', '1650179675166', '1650078292994', '1655712673140', 'aktif', '1654995138195', 'Tradisi jemur kasur', 'top', 'indonesia-mengabari-com-1656905893069.jpg', '<p><br />\r\nWarga Desa Kemiren, Kecamatan Glagah, Kabupaten Banyuwangi punya tradisi mepe kasur atau jemur kasur setiap menjelang Hari Raya Idul Adha. Konon tradisi ini dipercaya bisa membuat langgeng hubungan antara suami dan istri.</p>\r\n\r\n<p>Tradisi mepe kasur ini dilakukan dengan menjemur kasur di halaman rumah masing-masing.</p>\r\n\r\n<p>Uniknya semua kasur yang dijemur memiliki warna yang sama yakni merah hitam, dua warna itulah yang melambangkan sebuah harmonisasi rumah tangga dengan perpaduan prinsip keberanian hingga keabadian.</p>\r\n\r\n<p>&quot;Mungkin satu-satunya desa yang punya kasur seragam dengan warna merah dan hitam. Warna hitam warna keabadian dan merah warna keberanian dan kerja keras,&quot; kata Tokoh Adat Using Desa Kemiren, Adi Purwadi, Minggu (3/7/2022).</p>\r\n\r\n<p>Kedua unsur tersebut kemudian dijadikan prinsip warga Desa Kemiren dalam membangun rumah tangga.</p>\r\n\r\n<p>&quot;Kalau kita ngomong kasur berarti kita ngomong rumah tangga, kalau ingin rumah tangga bahagia maka ikut dua unsur tadi, keabadian tentang jodohnya &#39;katresnane&#39; harus dikukuhkan dan dirawat, yang kedua kerja keras dan keberanian juga harus dirawat,&quot; ujarnya.</p>\r\n\r\n<p>Keduanya saling memiliki keterikatan dalam kehidupan pasutri, mulai keterkaitan asmara yang terus dipupuk dan pundi-pundi keberanian untuk membangun perekonomian yang kayak, dari dua unsur tersebut diyakini mampu menjaga keharmonisan rumah tangga.&nbsp;</p>\r\n\r\n<p>&quot;Kalau sudah cintanya terus dibangun dan ditopang dengan kerja keras untuk memenuhi kebutuhannya, barulah rumah tangga bahagia itu akan tercapai,&quot; cetus Purwadi.</p>\r\n\r\n<p>Bahkan hingga kini, setiap orang tua di Desa Kemiren yang memiliki anak perempuan yang segera menikah, mereka memberi sebuah hadiah kasur merah hitam sebelum memberi kebutuhan-kebutuhan lain, hal ini beriringan dengan doa orang tua agar buah hatinya bahagia membangun rumah tangga baru.</p>\r\n\r\n<p>&quot;Orang sini kalau punya anak perempuan pasti diberikan kasur merah hitam sebelum membeli kebutuhan lainnya,&quot; ungkapnya</p>\r\n\r\n<p>Sebagai informasi, tradisi mepe kasur merupakan salah satu dari rangkaian upacara adat tumpeng sewu di Desa Kemiren yang digelar setiap minggu pertama bulan Dzulhijjah antara hari Kamis atau Minggu.</p>\r\n\r\n<p>Upacara adat tumpeng sewu bertujuan untuk mengungkapkan rasa syukur warga suku Using atau Osing terhadap nikmat yang telah diberikan sang pencipta.&nbsp;</p>\r\n', '0'),
(55, '1657189814149', '1655712673140', '2022-07-07 10:31:12', 'Penangkapan pelaku Pencabulan 6 santri di banyuangi', '1650179675166', '1650078292994', '1655712673140', 'aktif', '1654995138195', 'Penangkapan pelaku pencabulan', 'top', 'indonesia-mengabari-com-1657189814149.jpg', '<p>Polisi menjemput paksa FZ (57 tahun), pengasuh dan pimpinan ponpes di Banyuwangi yang dilaporkan melakukan aksi asusila santrinya. FZ dijemput paksa setelah mangkir dua kali panggilan.</p>\r\n\r\n<p>FZ dijemput di Lampung Utara. FZ diduga mencoba kabur setelah dilaporkan oleh 6 (enam) korban santri atas dugaan asusila. Penjemputan dilakukan oleh Tim Khusus (Timsus) Macan Blambangan Satreskrim Polresta Banyuwangi.</p>\r\n\r\n<p>Timsus ini bertugas melakukan pencarian atas keberadaan FZ. Selain itu mereka juga bertugas mengumpulkan bukti-bukti mendalam untuk mengungkap dan membuat terang benderang kasus asusila terhadap santri secara lebih terperinci.</p>\r\n\r\n<p>Gerak cepat dari Timsus Macan Blambangan Satreskrim Polresta Banyuwangi dalam melakukan pencarian membuahkan hasil, FZ diamankan kemarin, Rabu (6 /7/2022). Setelah dilaporkan FZ kabur hingga ke Kecamatan Bunga Mayang, Kabupaten Lampung Utara. Kaburnya FZ pun tak menyurutkan aparat kepolisian mengejar oknum pengasuh dan pemilik Ponpes untuk menangkapnya. Saat ini, FZ pun sudah ada di Mapolresta Banyuwangi guna menjalani pemeriksaan lebih lanjut.</p>\r\n\r\n<p>Kapolresta Banyuwangi Kombes Pol Deddy Foury Millewa membenarkan ihwal pengejaran dan penangkapan tersebut. Kapolresta menerangkan bahwa pihaknya melakukan analisa IT untuk mencari keberadaan FZ yang mangkir dari upaya pemanggilan pertama dan kedua.</p>\r\n\r\n<p>&quot;Dari hasil analisa IT yang dilakukan oleh Tim Opsnal Satreskrim akhirnya Kami melakukan koordinasi dengan Polres Lampung Utara untuk melakukan pencarian dan penangkapan terhadap FZ,&quot; tutur Kapolresta Banyuwangi, saat konferensi pers pada Kamis sore (7/7/2022).&nbsp;</p>\r\n\r\n<p>Lebih lanjut Kapolresta Banyuwangi menyampaikan bahwa Timsus Macan Blambangan melakukan penjemputan FZ di Kecamatan Bunga Mayang, Kabupaten Lampung Utara yang memerlukan waktu 4 (empat) jam perjalanan dari Kota Bandar Lampung. Dari Lampung Utara Tim kemudian menempuh perjalanan darat ke Bandara Soekarna Hatta selama 8 (delapan) jam, kemudian FZ diterbangkan ke Banyuwangi.</p>\r\n\r\n<p>&nbsp;</p>\r\n', '0');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `id` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `TIMESTAMP` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `DATA` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ci_sessions`
--

INSERT INTO `ci_sessions` (`id`, `ip_address`, `TIMESTAMP`, `DATA`) VALUES
('0fhk0qntoasuulh0cqt93f1d0jf7hu84', '17.121.113.215', 1657901832, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373930313833323b),
('2fel7fvfdj3r769p2gp3oto25g120h9n', '17.121.113.30', 1657810142, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831303134323b),
('2q4emmvbrunhiqqia01nqk27g7ictc7v', '17.121.112.117', 1657810750, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373830393439393b),
('3ph6s302q0dhaf4d69dv165lg3a4u6gh', '8.41.221.61', 1657843860, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373834333836303b),
('7nhgltcuipqaa7gv263qeoolp2dubqr4', '17.121.112.66', 1657903337, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373930333333373b),
('8bf0gtj8nhklsvb0dldnpc5g2ulokhju', '17.121.113.215', 1657903654, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373930313833333b),
('8o03si4g0om8ujuakcalt5e2qt3tmhj4', '17.121.112.66', 1657904265, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373930333333373b),
('b67ud0ckcmk8b5vrpuicbi25uh1q5f0g', '8.41.221.49', 1657846964, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373834363936343b),
('c2efg6m9pgf1m8vgu0k87lcs44hlbdli', '17.121.113.30', 1657810516, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831303134323b),
('cap1c21021tjufrvn2rb3p88krrd2e68', '103.184.54.14', 1657949765, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373934393033343b756e69715f757365727c733a31333a2231363439333731353733363737223b6e616d615f757365727c733a353a22616264756c223b6e616d615f7374617475737c733a31333a2241646d696e6973747261746f72223b),
('d1ksqqa079qhm9d3gd3ptam3gorknjka', '34.142.133.153', 1657814932, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831343933313b),
('eub4s1dglui60ue5nuomkdd65c1hnolh', '101.50.1.45', 1657949109, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373934393130393b),
('g00d3mkkpj7i4fv11eb8324onpjlnhfm', '17.121.114.167', 1657896982, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373839363938323b),
('g29tio4gsblojdg2ffpao1ld033ievl2', '17.121.113.183', 1657813148, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831313631383b),
('gjdfvav5df067nd7m8cehem292aqcmq3', '17.121.115.190', 1657901261, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373839393839333b),
('in47et7q57178spm5te28neaqeo9o3ha', '17.121.112.117', 1657809499, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373830393439393b),
('jgaki32nke8fssu92fm9d3sos2sipsne', '17.121.112.251', 1657810648, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831303335333b),
('knm9u9su0uv539koarb0cqsej4f591so', '17.121.113.183', 1657811618, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831313631383b),
('ks5lg1l8jf81h6aub41kc4m4bgihfaov', '138.246.253.15', 1657873942, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373837333934323b),
('liahnedrdb3n8970h2qu7ar2onafkrte', '8.41.221.49', 1657846966, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373834363936363b),
('llgdesfrr39emh93vgneh9i427b96dmv', '144.168.238.194', 1657835970, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373833353937303b),
('m1k3b85invbde4drh51l23kd2c913unj', '34.128.101.250', 1657932332, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373933323333313b),
('q3flldt2gto2f4d9q9sdu74vvjuvgml1', '8.41.221.61', 1657843861, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373834333836313b),
('sa9a9ttjt7n22q8gght32f1v6k1urmv8', '17.121.112.251', 1657810353, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373831303335333b),
('sq1shsp07hgtab27j83srjg0dplomlru', '182.1.118.166', 1657949910, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373934393832363b756e69715f757365727c733a31333a2231363439333731353733363737223b6e616d615f757365727c733a353a22616264756c223b6e616d615f7374617475737c733a31333a2241646d696e6973747261746f72223b),
('t93cv2e00650f5e89ds6df9a4glaran6', '17.121.114.167', 1657897406, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373839363938333b),
('ugu3k3ls9m873fvltt1smlesevvvi2fn', '51.222.253.13', 1657908037, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373930383033373b),
('vmvemcm9l7psmpi8r648bvdh0l1bj9cs', '17.121.115.190', 1657899893, 0x5f5f63695f6c6173745f726567656e65726174657c693a313635373839393839333b);

-- --------------------------------------------------------

--
-- Struktur dari tabel `fokus_berita`
--

CREATE TABLE `fokus_berita` (
  `id_fokus_berita` int(11) NOT NULL,
  `uniq_fokus_berita` varchar(50) DEFAULT '0',
  `nama_fokus_berita` varchar(200) DEFAULT '0',
  `link` varchar(200) DEFAULT '0',
  `status` varchar(10) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `fokus_berita`
--

INSERT INTO `fokus_berita` (`id_fokus_berita`, `uniq_fokus_berita`, `nama_fokus_berita`, `link`, `status`) VALUES
(2, '1650425459480', 'Potret Kemiskinan Bangsa', 'Potret-Kemiskinan-Bangsa', 'aktif'),
(3, '1650425503227', 'Tokoh Inspirasi', 'Tokoh-Inspirasi', 'aktif'),
(4, '1650425510352', 'Kuliner Nusantara', 'Kuliner-Nusantara', 'aktif'),
(5, '1654995084379', 'Dinamika Politik Bangsa', 'dinamika-politik-angsa', 'aktif'),
(6, '1654995138195', 'Seputar Peristiwa', 'seputar-peristiwa', 'aktif'),
(7, '1654995170195', 'Usaha Kecil Menengah', 'Usaha-kecil-menengah', 'aktif'),
(8, '1654995216170', 'Pelayanan Publik', 'pelayanan-publik', 'aktif'),
(9, '1654995262827', 'Seputar Olahraga', 'seputar-olahraga', 'aktif'),
(10, '1654995284235', 'Pemeritah Kabupaten/Kota', 'pemeritah-kabupaten-kota', 'aktif'),
(11, '1655346825418', 'Covid', 'covid', 'aktif'),
(13, '1655346841540', 'PMK', 'pmk', 'aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `uniq_kategori` varchar(100) DEFAULT '0',
  `title` varchar(200) DEFAULT '0',
  `deskripsi` varchar(200) DEFAULT '0',
  `link` varchar(200) DEFAULT '0',
  `status` varchar(10) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `uniq_kategori`, `title`, `deskripsi`, `link`, `status`) VALUES
(1, '1649733665106', 'Politik', 'Berita Politik', 'politik', 'aktif'),
(2, '1649813996464', 'Hukum', 'Hukum', 'hukum', 'aktif'),
(4, '1650179675166', 'Peristiwa', 'Peristiwa', 'peristiwa', 'aktif'),
(5, '1650179697019', 'Ekonomi', 'Ekonomi', 'ekonomi', 'aktif'),
(6, '1650179715189', 'Pemerintahan', 'Pemerintahan', 'pemerintahan', 'aktif'),
(7, '1650179730023', 'Pendidikan', 'Pendidikan', 'pendidikan', 'aktif'),
(8, '1650179758797', 'Budaya', 'Budaya', 'budaya', 'aktif'),
(9, '1650179781744', 'Entertaiment', 'Entertaiment', 'entertaiment', 'aktif'),
(10, '1650179852246', 'Feature', 'Feature', 'feature', 'aktif'),
(11, '1650179875363', 'Komunitas', 'Komunitas', 'komunitas', 'aktif'),
(12, '1650179889753', 'Kuliner', 'Kuliner', 'kuliner', 'aktif'),
(13, '1650179904047', 'Olahraga', 'Olahraga', 'olahraga', 'aktif'),
(14, '1655346794800', 'Kesehatan', 'kesehatan', 'kesehatan', 'aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `logo`
--

CREATE TABLE `logo` (
  `id_logo` int(11) NOT NULL,
  `uniq_logo` varchar(200) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `gambar` varchar(200) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `uniq_menu` varchar(50) DEFAULT '0',
  `nama_menu` varchar(200) DEFAULT '0',
  `status` varchar(20) DEFAULT '0',
  `menu_utama_id` varchar(200) DEFAULT '0',
  `link` varchar(200) DEFAULT '0',
  `status_aktif` varchar(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `menu`
--

INSERT INTO `menu` (`id_menu`, `uniq_menu`, `nama_menu`, `status`, `menu_utama_id`, `link`, `status_aktif`) VALUES
(134, '1649455978805', 'Pages', '2', '1650115598351', 'pages_api', 'aktif'),
(136, '1649461562824', 'Status User', '2', '1650114275096', 'status_user_api', 'aktif'),
(140, '1649633569466', 'Fokus Berita', '2', '1650115674162', 'fokus_berita_api', 'aktif'),
(142, '1649650690616', 'Berita', '2', '1650115674162', 'berita_api', 'aktif'),
(143, '1649991158559', 'user', '2', '1650114275096', 'user_api', 'aktif'),
(144, '1649991165573', 'menu', '2', '1650114275096', 'menu_api', 'aktif'),
(146, '1650114275096', 'setting', '1', '1650115598351', '#', 'aktif'),
(147, '1650115598351', 'Data', '1', NULL, '#', 'aktif'),
(148, '1650115674162', 'Menejemen Artikel', '1', '1650115598351', '#', 'aktif'),
(149, '1650409196738', 'Kategori', '2', '1650115674162', 'kategori_api', 'aktif'),
(173, '1653261188065', 'Logo', '2', '1650114275096', 'logo_api', 'aktif'),
(174, '1653262016080', 'Performa User', '2', '1650115598351', 'performa_user_api', 'aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu_access`
--

CREATE TABLE `menu_access` (
  `id_menu_access` int(11) NOT NULL,
  `uniq_menu_access` varchar(50) DEFAULT '0',
  `user_id` varchar(200) DEFAULT '0',
  `menu_id` varchar(200) DEFAULT '0',
  `create` varchar(200) DEFAULT '0',
  `read` varchar(200) DEFAULT '0',
  `update` varchar(200) DEFAULT '0',
  `delete` varchar(200) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `menu_access`
--

INSERT INTO `menu_access` (`id_menu_access`, `uniq_menu_access`, `user_id`, `menu_id`, `create`, `read`, `update`, `delete`) VALUES
(105, '1649456054643', '1649371573677', '1649455978805', 'y', 'y', 'y', 'y'),
(106, '1649461593334', '1649371573677', '1649461562824', 'y', 'y', 'y', 'y'),
(108, '1649633669781', '1649371573677', '1649633569466', 'y', 'y', 'y', 'y'),
(110, '1649650709246', '1649371573677', '1649650690616', 'y', 'y', 'y', 'y'),
(111, '2352345445345', '1649371573677', '1649991158559', 'y', 'y', 'y', 'y'),
(111, '23523454459678', '1649371573677', '1649991165573', 'y', 'y', 'y', 'y'),
(111, '235234544596789', '1649371573677', '1650115598351', 'y', 'n', 'n', 'n'),
(112, '1650162876747', '1649371573677', '1650114275096', 'y', '', '', ''),
(113, '1650162876748', '1649371573677', '1650115674162', 'y', '', '', ''),
(114, '1650409248560', '1649371573677', '1650409196738', 'y', 'y', 'y', 'y'),
(115, '1653261332688', '1649371573677', '1653261188065', 'y', 'y', 'y', 'y'),
(116, '1653262076094', '1649371573677', '1653262016080', 'y', 'y', 'y', 'y'),
(117, '1654412363346', '1654412330062', '1649455978805', '', '', '', ''),
(118, '1654412363347', '1654412330062', '1649461562824', '', '', '', ''),
(119, '1654412363348', '1654412330062', '1649633569466', '', '', '', ''),
(120, '1654412363349', '1654412330062', '1649650690616', 'y', 'y', 'y', ''),
(121, '1654412363350', '1654412330062', '1649991158559', '', '', '', ''),
(122, '1654412363351', '1654412330062', '1649991165573', '', '', '', ''),
(123, '1654412363352', '1654412330062', '1650114275096', '', '', '', ''),
(124, '1654412363353', '1654412330062', '1650115598351', '', '', '', ''),
(125, '1654412363354', '1654412330062', '1650115674162', '', '', '', ''),
(126, '1654412363355', '1654412330062', '1650409196738', '', '', '', ''),
(127, '1654412363356', '1654412330062', '1653261188065', '', '', '', ''),
(128, '1654412363357', '1654412330062', '1653262016080', '', '', '', ''),
(129, '1655734001157', '1655712673140', '1649455978805', '', '', '', ''),
(130, '1655734001159', '1655712673140', '1649461562824', '', '', '', ''),
(131, '1655734001160', '1655712673140', '1649633569466', '', '', '', ''),
(132, '1655734001161', '1655712673140', '1649650690616', 'y', 'y', 'y', 'y'),
(133, '1655734001162', '1655712673140', '1649991158559', '', '', '', ''),
(134, '1655734001163', '1655712673140', '1649991165573', '', '', '', ''),
(135, '1655734001164', '1655712673140', '1650114275096', '', '', '', ''),
(136, '1655734001165', '1655712673140', '1650115598351', '', '', '', ''),
(137, '1655734001166', '1655712673140', '1650115674162', '', '', '', ''),
(138, '1655734001167', '1655712673140', '1650409196738', '', '', '', ''),
(139, '1655734001168', '1655712673140', '1653261188065', '', '', '', ''),
(140, '1655734001169', '1655712673140', '1653262016080', '', '', '', ''),
(141, '1656400959862', '1656400861113', '1649455978805', '', '', '', ''),
(142, '1656400959863', '1656400861113', '1649461562824', '', '', '', ''),
(143, '1656400959864', '1656400861113', '1649633569466', '', '', '', ''),
(144, '1656400959865', '1656400861113', '1649650690616', 'y', 'y', 'y', 'y'),
(145, '1656400959866', '1656400861113', '1649991158559', '', '', '', ''),
(146, '1656400959867', '1656400861113', '1649991165573', '', '', '', ''),
(147, '1656400959868', '1656400861113', '1650114275096', '', '', '', ''),
(148, '1656400959869', '1656400861113', '1650115598351', '', '', '', ''),
(149, '1656400959870', '1656400861113', '1650115674162', 'n', '', '', ''),
(150, '1656400959871', '1656400861113', '1650409196738', '', '', '', ''),
(151, '1656400959872', '1656400861113', '1653261188065', '', '', '', ''),
(152, '1656400959873', '1656400861113', '1653262016080', '', '', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pages`
--

CREATE TABLE `pages` (
  `id_pages` int(11) NOT NULL,
  `uniq_pages` varchar(50) DEFAULT '0',
  `judul` varchar(200) DEFAULT '0',
  `link_pages` varchar(200) DEFAULT '0',
  `status` varchar(20) DEFAULT '0',
  `deskripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pages`
--

INSERT INTO `pages` (`id_pages`, `uniq_pages`, `judul`, `link_pages`, `status`, `deskripsi`) VALUES
(46, '1651114401593', 'Redaksi', 'redaksi', 'aktif', '<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://indonesiamengabari.com/\">indonesiamengabari.com</a></p>\r\n'),
(47, '1651114424303', 'Tentang Kami', 'tentang-kami', 'aktif', '<p><em>Media Nasional&nbsp;indonesiamengabari.com&nbsp; adalah salah satu media mainstream yang baru berkembang dan berdiri sejak 2022.</em></p>\r\n\r\n<p><em>Adapun segmen pemberitaan yang ditayangkan media ini seperti Politik, Hukum Kriminal, Ekonomi, Pendidikan, Pertanian dan Hiburan dan mengutamakan memberikan informasi yang mendidik dan menyajikan informasi yang membangun</em></p>\r\n'),
(48, '1651114464051', 'Info Iklan', 'Info-Iklan', 'aktif', '<p>&nbsp;</p>\r\n\r\n<p><em>Business Office</em></p>\r\n\r\n<p><em>indonesiamengabari.com</em></p>\r\n\r\n<p><em>Contact Person 082141031276</em></p>\r\n\r\n<p><em>Email : info@indonesiamengabari.com</em></p>\r\n\r\n<p>&nbsp;</p>\r\n'),
(49, '1651114481024', 'Disclaimer', 'disclaimer', 'aktif', '<p><em>Dengan mengakses dan menggunakan indonesiamengabari.com, Anda telah memahami dan setuju bahwa:</em></p>\r\n\r\n<p><em>Semua isi berupa teks, gambar, suara, video dan segala bentuk grafis di indonesiamengabari.com hanya sebagai informasi dan tidak diharapkan untuk tujuan transaksi seperti saham/perdagangan dan lain-lain.</em></p>\r\n\r\n<p><em>indonesiamengabari.com berupaya keras menampilkan isi seakurat mungkin, namun indonesiamengabari.com dan semua mitra penyedia isi, termasuk pengelola konsultasi dan pengembang isi dari pihak lain di situs ini, tidak bertanggungjawab atas segala kesalahan dan keterlambatan memperbarui data atau informasi, atau segala kerugian yang timbul karena tindakan berkaitan penggunaan informasi yang disajikan.</em></p>\r\n\r\n<p><em>Kami tidak bertanggungjawab atas akibat langsung ataupun tidak langsung dari semua teks, gambar, suara, video dan segala bentuk grafis yang dihasilkan dan disampaikan pembaca atau pengguna di berbagai rubrik publik seperti Publika, Komunitas, Komentar Pembaca, Forum, Polling, Pro Kontra dan lainnya.</em></p>\r\n\r\n<p><em>Namun demikian, indonesiamengabari.com berhak menyunting atau menghapus isi dari pembaca atau pengguna agar tidak merugikan orang lain, lembaga, ataupun badan tertentu serta menjauhi isi berbau pornografi dan sentimen suku, agama dan ras.</em></p>\r\n\r\n<p><em>Segala isi baik berupa teks, gambar, video, suara dan segala bentuk grafis yang disampaikan pembaca ataupun pengguna adalah tanggung jawab setiap individu, dan bukan tanggungjawab indonesiamengabari.com.</em></p>\r\n\r\n<p><em>Berita indonesiamengabari.com menyediakan link ke situs lain, link tersebut tidak menunjukan bahwa indonesiamengabari.com menyetujui situs pihak lain tersebut. Anda mengetahui dan menyetujui bahwa indonesiamengabari.com tidak bertanggung jawab atas isi atau materi lainnya yang ada pada situs pihak lain tersebut.</em></p>\r\n\r\n<p><em>Setiap perjanjian dan transaksi antara anda dan pengiklan yang ada di indonesiamengabari.com adalah antara Anda dan pengiklan. Anda mengetahui dan setuju bahwa indonesiamengabari.com tidak bertanggung jawab atas segala bentuk kehilangan atau klaim yang mungkin timbul dari perjanjian atau transaksi antara Anda dengan pengiklan.</em></p>\r\n\r\n<p><em>Semua hasil karya yang dimuat di indonesiamengabari.com baik berupa teks, gambar, suara dan video serta segala bentuk grafis adalah menjadi hak cipta indonesiamengabari.com.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n'),
(50, '1651114502848', 'Privacy Policy', 'privacy-policy', 'aktif', '<ul>\r\n	<li><a href=\"https://suaraindonesia.co.id/page/privacy-policy\">Privacy Policy</a></li>\r\n</ul>\r\n'),
(51, '1651114531410', 'Pedoman', 'pedoman-media-siber', 'aktif', '<p><em>Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB. Keberadaan media siber di Indonesia juga merupakan bagian dari kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Media siber memiliki karakter khusus sehingga memerlukan pedoman agar pengelolaannya dapat dilaksanakan secara profesional, memenuhi fungsi, hak, dan kewajibannya sesuai Undang-Undang Nomor 40 Tahun 1999 tentang Pers dan Kode Etik Jurnalistik. Untuk itu Dewan Pers bersama organisasi pers, pengelola media siber, dan masyarakat menyusun Pedoman Pemberitaan Media Siber sebagai berikut:</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>1. Ruang Lingkup</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>a.Media Siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>b.Isi Buatan Pengguna (User Generated Content) adalah segala isi yang dibuat dan atau dipublikasikan oleh pengguna media siber, antara lain, artikel, gambar, komentar, suara, video dan berbagai bentuk unggahan yang melekat pada media siber, seperti blog, forum, komentar pembaca atau pemirsa, dan bentuk lain.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>2. Verifikasi dan keberimbangan berita</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>a.Pada prinsipnya setiap berita harus melalui verifikasi.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>b.Berita yang dapat merugikan pihak lain memerlukan verifikasi pada berita yang sama untuk memenuhi prinsip akurasi dan keberimbangan.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>c.Ketentuan dalam butir (a) di atas dikecualikan, dengan syarat:</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>1).Berita benar-benar mengandung kepentingan publik yang bersifat mendesak;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>2).Sumber berita yang pertama adalah sumber yang jelas disebutkan identitasnya, kredibel dan kompeten;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>3).Subyek berita yang harus dikonfirmasi tidak diketahui keberadaannya dan atau tidak dapat diwawancarai;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>4).Media memberikan penjelasan kepada pembaca bahwa berita tersebut masih memerlukan verifikasi lebih lanjut yang diupayakan dalam waktu secepatnya. Penjelasan dimuat pada bagian akhir dari berita yang sama, di dalam kurung dan menggunakan huruf miring.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>d.Setelah memuat berita sesuai dengan butir (c), media wajib meneruskan upaya verifikasi, dan setelah verifikasi didapatkan, hasil verifikasi dicantumkan pada berita pemutakhiran (update) dengan tautan pada berita yang belum terverifikasi.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>3. Isi Buatan Pengguna (User Generated Content)</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>a.Media siber wajib mencantumkan syarat dan ketentuan mengenai Isi Buatan Pengguna yang tidak bertentangan dengan Undang-Undang No. 40 tahun 1999 tentang Pers dan Kode Etik Jurnalistik, yang ditempatkan secara terang dan jelas.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>b.Media siber mewajibkan setiap pengguna untuk melakukan registrasi keanggotaan dan melakukan proses log-in terlebih dahulu untuk dapat mempublikasikan semua bentuk Isi Buatan Pengguna. Ketentuan mengenai log-in akan diatur lebih lanjut.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>c.Dalam registrasi tersebut, media siber mewajibkan pengguna memberi persetujuan tertulis bahwa Isi Buatan Pengguna yang dipublikasikan:</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>1).Tidak memuat isi bohong, fitnah, sadis dan cabul;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>2).Tidak memuat isi yang mengandung prasangka dan kebencian terkait dengan suku, agama, ras, dan antargolongan (SARA), serta menganjurkan tindakan kekerasan;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>3).Tidak memuat isi diskriminatif atas dasar perbedaan jenis kelamin dan bahasa, serta tidak merendahkan martabat orang lemah, miskin, sakit, cacat jiwa, atau cacat jasmani.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>d.Media siber memiliki kewenangan mutlak untuk mengedit atau menghapus Isi Buatan Pengguna yang bertentangan dengan butir (c).</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>e.Media siber wajib menyediakan mekanisme pengaduan Isi Buatan Pengguna yang dinilai melanggar ketentuan pada butir (c). Mekanisme tersebut harus disediakan di tempat yang dengan mudah dapat diakses pengguna.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>f.Media siber wajib menyunting, menghapus, dan melakukan tindakan koreksi setiap Isi Buatan Pengguna yang dilaporkan dan melanggar ketentuan butir (c), sesegera mungkin secara proporsional selambat-lambatnya 2 x 24 jam setelah pengaduan diterima.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>g.Media siber yang telah memenuhi ketentuan pada butir (a), (b), (c), dan (f) tidak dibebani tanggung jawab atas masalah yang ditimbulkan akibat pemuatan isi yang melanggar ketentuan pada butir (c).</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>h.Media siber bertanggung jawab atas Isi Buatan Pengguna yang dilaporkan bila tidak mengambil tindakan koreksi setelah batas waktu sebagaimana tersebut pada butir (f).</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>4. Ralat, Koreksi, dan Hak Jawab</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>a.Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang ditetapkan Dewan Pers.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>b.Ralat, koreksi dan atau hak jawab wajib ditautkan pada berita yang diralat, dikoreksi atau yang diberi hak jawab.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>c.Di setiap berita ralat, koreksi, dan hak jawab wajib dicantumkan waktu pemuatan ralat, koreksi, dan atau hak jawab tersebut.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>d.Bila suatu berita media siber tertentu disebarluaskan media siber lain, maka:</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>1)Tanggung jawab media siber pembuat berita terbatas pada berita yang dipublikasikan di media siber tersebut atau media siber yang berada di bawah otoritas teknisnya;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>2).Koreksi berita yang dilakukan oleh sebuah media siber, juga harus dilakukan oleh media siber lain yang mengutip berita dari media siber yang dikoreksi itu;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>3).Media yang menyebarluaskan berita dari sebuah media siber dan tidak melakukan koreksi atas berita sesuai yang dilakukan oleh media siber pemilik dan atau pembuat berita tersebut, bertanggung jawab penuh atas semua akibat hukum dari berita yang tidak dikoreksinya itu.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>e.Sesuai dengan Undang-Undang Pers, media siber yang tidak melayani hak jawab dapat dijatuhi sanksi hukum pidana denda paling banyak Rp500.000.000 (Lima ratus juta rupiah).</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>&nbsp;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>5. Pencabutan Berita</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>a.Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran dari pihak luar redaksi, kecuali terkait masalah SARA, kesusilaan, masa depan anak, pengalaman traumatik korban atau berdasarkan pertimbangan khusus lain yang ditetapkan Dewan Pers.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>b.Media siber lain wajib mengikuti pencabutan kutipan berita dari media asal yang telah dicabut.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>c.Pencabutan berita wajib disertai dengan alasan pencabutan dan diumumkan kepada publik.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>6. Iklan</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>a.Media siber wajib membedakan dengan tegas antara produk berita dan iklan.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>b.Setiap berita/artikel/isi yang merupakan iklan dan atau isi berbayar wajib mencantumkan keterangan &rdquo;advertorial&rdquo;, &rdquo;iklan&rdquo;, &rdquo;ads&rdquo;, &rdquo;sponsored&rdquo;, atau kata lain yang menjelaskan bahwa berita/artikel/isi tersebut adalah iklan.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>7. Hak Cipta</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Media siber wajib menghormati hak cipta sebagaimana diatur dalam peraturan perundang-undangan yang berlaku.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>8. Pencantuman Pedoman</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Media siber wajib mencantumkan Pedoman Pemberitaan Media Siber ini di medianya secara terang dan jelas.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>9. Sengketa</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Penilaian akhir atas sengketa mengenai pelaksanaan Pedoman Pemberitaan Media Siber ini diselesaikan oleh Dewan Pers.</em></p>\r\n\r\n<p><em>Jakarta, 3 Februari 2012</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>(Pedoman ini ditandatangani oleh Dewan Pers dan komunitas pers di Jakarta, 3 Februari 2012).</em></p>\r\n\r\n<p>&nbsp;</p>\r\n');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengunjung`
--

CREATE TABLE `pengunjung` (
  `id_pengunjung` int(11) NOT NULL,
  `uniq_pengunjung` varchar(50) DEFAULT NULL,
  `berita_id` varchar(50) DEFAULT NULL,
  `jumlah` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pengunjung`
--

INSERT INTO `pengunjung` (`id_pengunjung`, `uniq_pengunjung`, `berita_id`, `jumlah`) VALUES
(1, 'uniq-16504157637387df', '16504157637387df', '5'),
(3, 'uniq-tyk344jg6', 'tyk344jg6', '6'),
(4, 'uniq-dg567jd5fg', 'dg567jd5fg', '3'),
(5, 'uniq-1650075319064', '1650075319064', '3'),
(6, 'uniq-1654993334124', '1654993334124', '15'),
(7, 'uniq-1655172312192', '1655172312192', '8'),
(8, 'uniq-1655178175840', '1655178175840', '2'),
(9, 'uniq-1655346922920', '1655346922920', '3'),
(10, 'uniq-1655763713084', '1655763713084', '9'),
(11, 'uniq-1655764517625', '1655764517625', '3'),
(12, 'uniq-1655965283154', '1655965283154', '2'),
(13, 'uniq-1655789251576', '1655789251576', '5'),
(14, 'uniq-1655943713814', '1655943713814', '2'),
(15, 'uniq-1655734150977', '1655734150977', '2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status_user`
--

CREATE TABLE `status_user` (
  `id_status_user` int(11) NOT NULL,
  `uniq_status_user` varchar(50) DEFAULT '0',
  `nama_status` varchar(200) DEFAULT '0',
  `deskripsi` varchar(200) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `status_user`
--

INSERT INTO `status_user` (`id_status_user`, `uniq_status_user`, `nama_status`, `deskripsi`) VALUES
(8, '1649466186868', 'Administrator', 'tugas'),
(9, '1649466217192', 'Admin', '-'),
(10, '1649466225503', 'Kontributor', '-'),
(11, '1649466239221', 'User', '--'),
(12, '1649734057509', 'Editor', 'Editor');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tags`
--

CREATE TABLE `tags` (
  `id_tags` int(11) NOT NULL,
  `uniq_tags` varchar(50) DEFAULT '0',
  `title_tags` varchar(200) DEFAULT '0',
  `link` varchar(200) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tags`
--

INSERT INTO `tags` (`id_tags`, `uniq_tags`, `title_tags`, `link`) VALUES
(7, '1649474212255', '#politikcurang', 'kkk');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `uniq_user` varchar(50) DEFAULT '0',
  `nama_user` varchar(200) DEFAULT '0',
  `username` varchar(200) DEFAULT '0',
  `password` varchar(200) DEFAULT '0',
  `level` varchar(200) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `uniq_user`, `nama_user`, `username`, `password`, `level`) VALUES
(75, '1649371573677', 'abdul', 'abdul@gmail.com', '9bc58d9929e22dcc62721c927003a3494a67153b', '1649466186868'),
(76, '1649377975811', 'ghofur', 'ghofur', '4ba6871d4ae9c38b262f76009f3cbba0f5190ed3', '1649466225503'),
(77, '1650071918292', 'sila', 'sila', 'dde41f08d51c21a9c2774c36c630330f10bc2426', '1649734057509'),
(78, '1650078292994', 'muhammad al fatih', 'fatih@gmail.com', '826de3fbae23475999a1cd7eddfaaa16eee4a53e', '1649734057509'),
(79, '1654412330062', 'Ifan Hadi', 'ifan@gmail.com', '7c1ed2b3f82f3c7f28e7d7f1514a9a6a97dfdfe3', '1649466225503'),
(80, '1655712673140', 'ahmad zainuri', 'zainuri@gmail.com', '9552488f73b19c89a60aec20d27f2b9a44eaa7f1', '1649466225503'),
(84, '1656400861113', 'adek ifan', 'adekifan@gmail.com', '601f1889667efaebb33b8c12572835da3f027f78', '1649466225503');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD UNIQUE KEY `uniq` (`uniq_berita`),
  ADD KEY `key` (`id_berita`);

--
-- Indeks untuk tabel `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ci_sessions_timestamp` (`TIMESTAMP`);

--
-- Indeks untuk tabel `fokus_berita`
--
ALTER TABLE `fokus_berita`
  ADD UNIQUE KEY `uniq` (`uniq_fokus_berita`),
  ADD KEY `key` (`id_fokus_berita`);

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD UNIQUE KEY `uniq` (`uniq_kategori`),
  ADD KEY `key` (`id_kategori`);

--
-- Indeks untuk tabel `logo`
--
ALTER TABLE `logo`
  ADD UNIQUE KEY `Index 2` (`uniq_logo`),
  ADD KEY `Index 1` (`id_logo`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD UNIQUE KEY `uniq` (`uniq_menu`),
  ADD KEY `key` (`id_menu`);

--
-- Indeks untuk tabel `menu_access`
--
ALTER TABLE `menu_access`
  ADD UNIQUE KEY `uniq` (`uniq_menu_access`),
  ADD KEY `key` (`id_menu_access`);

--
-- Indeks untuk tabel `pages`
--
ALTER TABLE `pages`
  ADD UNIQUE KEY `uniq` (`uniq_pages`),
  ADD KEY `key` (`id_pages`);

--
-- Indeks untuk tabel `pengunjung`
--
ALTER TABLE `pengunjung`
  ADD UNIQUE KEY `Index 2` (`uniq_pengunjung`),
  ADD KEY `Index 1` (`id_pengunjung`);

--
-- Indeks untuk tabel `status_user`
--
ALTER TABLE `status_user`
  ADD UNIQUE KEY `uniq` (`uniq_status_user`),
  ADD KEY `key` (`id_status_user`);

--
-- Indeks untuk tabel `tags`
--
ALTER TABLE `tags`
  ADD UNIQUE KEY `uniq` (`uniq_tags`),
  ADD KEY `key` (`id_tags`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `uniq` (`uniq_user`),
  ADD KEY `key` (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `berita`
--
ALTER TABLE `berita`
  MODIFY `id_berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `fokus_berita`
--
ALTER TABLE `fokus_berita`
  MODIFY `id_fokus_berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `logo`
--
ALTER TABLE `logo`
  MODIFY `id_logo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT untuk tabel `menu_access`
--
ALTER TABLE `menu_access`
  MODIFY `id_menu_access` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT untuk tabel `pages`
--
ALTER TABLE `pages`
  MODIFY `id_pages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT untuk tabel `pengunjung`
--
ALTER TABLE `pengunjung`
  MODIFY `id_pengunjung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `status_user`
--
ALTER TABLE `status_user`
  MODIFY `id_status_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `tags`
--
ALTER TABLE `tags`
  MODIFY `id_tags` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
