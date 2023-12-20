const select = (selector) => document.querySelector(selector);

const elements = {
  indonesia: select(".t-indonesia"),
  imgDaerah: select("#jateng .section1 > img"),
  // imgDaerahDiy: select("#diy .section1 > img"),
  titleDaerah: select(".title-text-daerah"),
  parentTextDaerah: select(".parent-text-daerah"),
  textDaerah: select(".text-daerah"),
  daerah: select(".daerah"),
  wraperFrame: select(".wrapperFrame"),
  frame: select(".frame"),
  detailDaerah: select(".detailDaerah"),
  button: select(".button"),
};

let valueTextD = [];
valueTextD.push(elements.textDaerah.innerHTML);

const handleScroll = () => {
  const { scrollY } = window;
  console.log(scrollY);
  elements.indonesia.style.transform = scrollY > 20 ? `translateX(-500px)` : "";

  const isPast2500 = scrollY > 2000;
  const isPast3500 = scrollY > 3500;
  const isPast3600 = scrollY > 3800;

  elements.wraperFrame.style.height = isPast3500 ? "auto" : "";
  elements.button.style.display = isPast2500 ? "none" : "";
  elements.detailDaerah.style.display = isPast3600 ? "block" : "";
  elements.textDaerah.innerHTML = isPast2500
    ? "Scroll down to surface <br/> <i class='fa fa-chevron-down' aria-hidden='true'></i>"
    : `${dataDaerah[currentIndex][2]}`;
  elements.textDaerah.style.maxWidth = isPast2500 ? "100%" : "";

  Object.assign(elements.parentTextDaerah.style, {
    display: isPast3500 ? "none" : "",
  });
  Object.assign(elements.frame.style, {
    height: isPast2500 ? "auto" : "",
    border: isPast3500 ? "none" : "",
    width: isPast2500 ? "100%" : "",
  });

  if (isPast3500) {
    elements.frame.style.height = isPast3500 ? "100%" : "";
    elements.frame.style.width = isPast3500 ? "100%" : "";
  }

  Object.assign(elements.titleDaerah.style, {
    position: isPast3500 ? "absolute" : "",
    fontSize: isPast3500 ? "8em" : "",
    transform: isPast2500 ? "translateY(440px)" : "",
  });
};

const animate = () => requestAnimationFrame(handleScroll);

document.addEventListener("scroll", animate);

// // blm selesai
// membuat object sesuai dengan jumlah daerah dengan nilai document.querySelector("#id")

// membuat array yang panjang dan nilainya sama dengan object
// membuat function, yaitu mengetahui daerah mana yang sedang muncul dihalaman
// dan mengetahui lokasi dimana id daerah tersebut didalam array
// lalu membuat id tadi ditampilkan di halaman yang dimana
// membuat function + dimana page akan menampilkan

// ganti content
let dataDaerah = [
  [
    "JAWA TENGAH",
    "asset/1.JawaTengah/CoverDaerah/GedungLawangSewu.jpg",
    "Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kota dari Provinsi Jawa Tengah adalah Kota Semarang. Provinsi ini berbatasan dengan Provinsi Jawa Barat di sebelah barat, Samudra Hindia.",
    "asset/1.JawaTengah/PakaianAdat/RumahJoglo.jpg",
    "asset/1.JawaTengah/PakaianAdat/Kebaya.png",
    "KEBAYA",
    "Kebaya adalah pakaian bagian atas yang memiliki karakteristik terbuka di bagian depan dan dibuat secara tradisional dari kain ringan seperti brokat, katun, kasa, renda, atau voile, dan terkadang dihiasi dengan sulaman.",
    "asset/1.JawaTengah/TarianDaerah/joglo.jpg",
    "asset/1.JawaTengah/TarianDaerah/TariBondan.png",
    "TARI BONDAN",
    "Tari Bondan ini berasal dari Surakarta,Jawa Tengah.Tarian ini menceritakan bahwa kasih sayang ibu kepada anaknya melalui menggendong bayi dengan payung terbuka dengan hati-hati dan perhatian.",
    "asset/1.JawaTengah/MakananDaerah/joglo.jpg",
    "asset/1.JawaTengah/MakananDaerah/GarangAsem.png",
    "GARANG ASEM",
    "Garang asem adalah makanan tradisional khas Jawa Tengah yang dibuat dari olahan ayam yang dimasak menggunakan daun pisang dan didominasi oleh rasa asam dan pedas. Garang asem berasal dari Grobogan namun kini garang asem populer di Kudus",
    "asset/1.JawaTengah/Landmark/borobudur.jpg",
    "BOROBUDUR",
  ],
  [
    "DKI JAKARTA",
    "asset/3.DKIJakarta/CoverDaerah/MonumenSelamatDatang.jpg",
    "Daerah Khusus Ibukota Jakarta (DKI Jakarta) adalah ibu kota negara dan kota terbesar di Indonesia. Jakarta merupakan satu-satunya kota di Indonesia yang memiliki status setingkat provinsi",
    "asset/3.DKIJakarta/PakaianAdat/RumahAdatKebaya.jpg",
    "asset/3.DKIJakarta/PakaianAdat/KebayaEncim.png",
    "KEBAYA ENCIM",
    "Kebaya encim merupakan pakaian. Adat DKI Jakarta yang dibuat khusus untuk kaum perempuan. Dimana kebaya ini juga banyak digemari masyarakat perempuan, baik itu perempuan dewasa atau perempuan remaja.",
    "asset/3.DKIJakarta/TarianDaerah/jakarta.jpg",
    "asset/3.DKIJakarta/TarianDaerah/TariCokek.png",
    "TARI COKEK",
    "Tari Cokek adalah tarian tradisional Betawi. Meski berasal dari suku Betawi, tarian ini sebenarnya merupakan perpaduan antara budaya Betawi, Sunda, dan Tionghoa. Dalam perkembangannya Tari Cokek dijadikan sebagi tarian penyambut tamu.",
    "asset/3.DKIJakarta/MakananDaerah/KotaLamaJakarta.jpg",
    "asset/3.DKIJakarta/MakananDaerah/KerakTelor.jpg",
    "KERAK TELOR",
    "Kerak telur adalah makanan asli daerah Jakarta (Betawi), dengan bahan-bahan beras ketan putih, telur ayam atau bebek, ebi (udang kering yang diasinkan) yang disangrai kering ditambah bawang merah goreng.",
    "asset/3.DKIJakarta/Landmark/monumenNasional.jpg",
    "MONAS",
  ],
  [
    "D.I.YOGYAKARTA",
    "asset/2.D.I.Yogyakarta/CoverDaerah/TuguJogja.jpg",
    "Provinsi Yogyakarta atau dikenal oleh masyarakat setempat dengan sebutan nama Yogya atau Jogja) adalah ibu kota daerah istimewa sekaligus pusat pemerintahan dan perekonomian dari Daerah Istimewa Yogyakarta, Indonesia",
    "asset/2.D.I.Yogyakarta/PakaianAdat/CandiRatuBoko.jpg",
    "asset/2.D.I.Yogyakarta/PakaianAdat/Lurik.png",
    "LURIK",
    "Lurik adalah kain dengan motif bergaris-garis kecil yang secara tradisional menjadi pakaian khas warga pria pedesaan di kalangan suku bangsa Jawa. Lurik yang berbahan dasar katun kasar memiliki harga yang relatif murah dan terjangkau untuk masyarakat kurang mampu",
    "asset/2.D.I.Yogyakarta/TarianDaerah/TamanSari.jpg",
    "asset/2.D.I.Yogyakarta/TarianDaerah/TariGolekAyunAyun.png",
    "TARI GOLEK AYUN-AYUN",
    "Ini merupakan tarian khas Yogyakarta yang umumnya dilakukan untuk menyambut tamu kehormatan serta acara acara besar. Tarian ini bercerita tentang wanita yang sedang beranjak dewasa dan selalu bersenang senang sambil bersolek untuk mempercantik diri mereka.",
    "asset/2.D.I.Yogyakarta/MakananDaerah/Keraton.jpg",
    "asset/2.D.I.Yogyakarta/MakananDaerah/gudeg.png",
    "GUDEG",
    "Gudeg adalah salah satu makanan khas dari Yogyakarta yang sangat terkenal di Indonesia. Makanan ini dibuat dari bahan dasar nangka muda yang dimasak dalam sebuah panci dengan campuran rempah khusus yang membuat gudeg memiliki cita rasa yang unik dan lezat.",
    "asset/2.D.I.Yogyakarta/Landmark/Prambanan.jpg",
    "PRAMBANAN",
  ],
  [
    "BALI",
    "asset/5.Bali/CoverDaerah/PuraBali.jpg",
    "Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kota dari Provinsi Jawa Tengah adalah Kota Semarang.",
    "asset/5.Bali/PakaianAdat/BaleManten.jpeg",
    "asset/5.Bali/PakaianAdat/PayasAgung.png",
    "PAYAS AGUNG",
    "Payas Agung merupakan pakaian adat khas yang ada di Bali. Busana atau pakaian adat ini memang selalu menarik perhatian baik masyarakat Bali, wisatawan lokal sampai wisatawan mancanegara. Payas Agung memiliki kesan etnis, mewah dan spesial oleh karena itu pakaian ini tidak ditujukan untuk beragam aktivitas.",
    "asset/5.Bali/TarianDaerah/gunungbali.jpeg",
    "asset/5.Bali/TarianDaerah/TariBarong.png",
    "TARI BARONG",
    "Tari Barong merupakan peninggalan kebudayaan pra-Hindu yang melambangkan pertempuran antara kebaikan (dharma) dan keburukan (adharma). Menurut keyakinan masyarakat Bali, khususnya yang beragama Hindu, kebaikan dan keburukan selalu berdampingan atau disebut juga sebagai Rwa Bhineda. Kata Barong berasal dari kata bahruang yang berarti beruang.",
    "asset/5.Bali/MakananDaerah/TanahLotBali.jpeg",
    "asset/5.Bali/MakananDaerah/nasiCampurBali.png",
    "NASI CAMPUR BALI",
    "Nasi campur khas Bali merupakan makanan khas yang terdiri dari nasi dan aneka lauk pauk seperti ayam suwir, sate lilit, lawar dengan bumbu Bali. Nasi campur khas Bali sudah terbukti sangat digemari oleh para wisatawan baik domestik maupun mancanegara",
    "asset/5.Bali/Landmark/puraUlunBantan.jpg",
    "PURA ULUN BRATAN",
  ],
  [
    "SUMATERA",
    "asset/7.Sumatera/CoverDaerah/MuseumTsunamiAceh.jpg",
    "Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kota dari Provinsi Jawa Tengah adalah Kota Semarang.",
    "asset/7.Sumatera/PakaianAdat/RumahGadang.jpeg",
    "asset/7.Sumatera/PakaianAdat/BundoKanduang.png",
    "BUNDO KANDUANG",
    "Pakaian Bundo Kanduang atau disebut dengan Limpapeh Rumah Nan Gadang. Limpapeh sendiri artinya tiang tengah dari bangunan rumah adat Sumatera Barat.Pakaian ini terdiri dari tingkolok (penutup kepala), baju kurung, kain selempang, kain sarung serta perhiasan berupa kalung dan anting",
    "asset/7.Sumatera/TarianDaerah/JamGadangSumatra.jpeg",
    "asset/7.Sumatera/TarianDaerah/TariPiring.png",
    "TARI PIRING",
    "Tari piring adalah tarian tradisional Minangkabau yang menampilkan atraksi menggunakan piring. Para penari mengayunkan piring di tangan mengikuti gerakan-gerakan cepat yang teratur, tanpa satu pun piring terlepas dari tangan. Gerakannya diambil dari langkah dalam silat Minangkabau atau silek",
    "asset/7.Sumatera/MakananDaerah/BandaAceh.png",
    "asset/7.Sumatera/MakananDaerah/rendang.png",
    "RENDANG",
    "Rendang adalah hidangan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak",
    "asset/7.Sumatera/Landmark/DanauToba.png",
    "DANAU TOBA",
  ],
  [
    "KALIMANTAN",
    "asset/8.Kalimantan/CoverDaerah/TanjungGundul.jpg",
    "Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kota dari Provinsi Jawa Tengah adalah Kota Semarang.",
    "asset/8.Kalimantan/PakaianAdat/RumahKalimantan.png",
    "asset/8.Kalimantan/PakaianAdat/KingBibinge.png",
    "KING BIBINGE",
    "Pakaian wanita suku dayak disebut King Bibinge. King Binge terbuat dari bahan kulit tanaman kapuo atau ampuro. Tanaman ini dipilih sebagai pakaian karena memiliki serat yang tinggi. Tanaman tersebut di ambil kulitnya kemudian diolah menjadi baju adat yang bagus dan menawan.",
    "asset/8.Kalimantan/TarianDaerah/PasarApung.png",
    "asset/8.Kalimantan/TarianDaerah/TariMandau.png",
    "TARI MANDAU",
    "Tari Mandau merupakan sebuah pertunjukan seni tari yang menggunakan properti senjata khas suku Dayak Kalimantan Tengah yaitu Mandau. Tarian ini menampilkan aksi memainkan mandau seperti menggigit, memutar, melempar, menebas, dan lain sebagainya.",
    "asset/8.Kalimantan/MakananDaerah/BumiAsihKalimantan.png",
    "asset/8.Kalimantan/MakananDaerah/sotobanjar.png",
    "SOTO BANJAR",
    "Soto Banjar adalah soto khas suku Banjar, Kalimantan Selatan dengan bahan utama daging ayam serta memiliki aroma harum rempah-rempah seperti kayu manis, biji pala, dan cengkih. Soto ini berisi daging ayam yang sudah disuwir-suwir, perkedel kentang, rebusan telur, dan disajikan dengan potongan ketupat",
    "asset/8.Kalimantan/Landmark/lembuswana.png",
    "LEMBUSWANA",
  ],
  [
    "SULAWESI",
    "asset/4.Sulawesi/CoverDaerah/Pangkajene.jpg",
    "Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kota dari Provinsi Jawa Tengah adalah Kota Semarang.",
    "asset/4.Sulawesi/PakaianAdat/RumahAdatToraja.jpg",
    "asset/4.Sulawesi/PakaianAdat/boddo.png",
    "BODDO",
    "Baju bodo berbentuk segi empat, biasanya berlengan pendek, sesuai dengan namanya 'bodo' yang berarti pendek, setengah atas bagian siku lengan.Dulu, baju bodo bisa dipakai tanpa penutup payudara.  Seiring dengan masuknya Islam, baju ini pun mengalami perubahan",
    "asset/4.Sulawesi/TarianDaerah/RumahToraja.jpg",
    "asset/4.Sulawesi/TarianDaerah/TariKipasPakarena.png",
    "TARI KIPAS PAKARENA",
    "Tari Kipas Pakarena adalah sejenis tarian yang berasal dari kerajaan Gowa Makasar Sulawesi Selatan , Berasal dari kata karena  yang artinya Bermain. dan pa yang berati pelakunya. Tarian ini merupakan upaya melestarikan budaya kekuatan keluarga kerajaan dan masyarakat Gowa yang hegemonitas. ",
    "asset/4.Sulawesi/MakananDaerah/toraja.jpg",
    "asset/4.Sulawesi/MakananDaerah/EsPisangIjo.png",
    "ES PISANG IJO",
    "Pisang ijo atau es pisang ijo adalah sejenis makanan khas Makassar di Sulawesi Selatan, terutama di kota Makassar. Makanan ini terbuat dari bahan utama pisang yang dibalut dengan adonan tepung berwarna hijau. Cara memasaknya dengan mengukus di dandang",
    "asset/4.Sulawesi/Landmark/bunaken5.jpg",
    "LAUT BUNAKEN",
  ],
  [
    "PAPUA",
    "asset/6.Papua/CoverDaerah/rinjani.jpg",
    "Jawa Tengah adalah sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kota dari Provinsi Jawa Tengah adalah Kota Semarang.",
    "asset/6.Papua/PakaianAdat/Rumahhonai.jpeg",
    "asset/6.Papua/PakaianAdat/RokRumbai.png",
    "ROK RUMBAI",
    "Rok Rumbai adalah pakaian adat Papua berupa penutup tubuh bagian bawah wanita yang terbuat dari susunan daun sagu kering. Rok Rumbai biasanya dikenakan dengan paduan aksesori seperti hiasan kepala dari bahan ijuk atau bulu burung kasuari, atau anyaman daun sagu.",
    "asset/6.Papua/TarianDaerah/LembahBaliemPapua.jpeg",
    "asset/6.Papua/TarianDaerah/TariSajojo.png",
    "TARI SAJOJO",
    "Tari Sajojo adalah tarian tradisional yang liriknya berbahasa Moi yang berasal dari daerah Sorong, Papua Barat Daya. Tarian ini sering dijadikan penampilan di berbagai acara, baik acara adat, budaya, maupun sekadar hiburan saja.Tarian ini bisa ditarikan oleh berbagai jenis kalangan, baik pria maupun wanita, tua maupun muda, karena tarian ini termasuk tarian pergaulan",
    "asset/6.Papua/MakananDaerah/tidaktau.jpeg",
    "asset/6.Papua/MakananDaerah/PapedaIkanKuahKuning.png",
    "PAPEDA IKAN KUAH KUNING",
    "Papeda adalah makanan berupa bubur sagu khas Maluku dan Papua yang biasanya disajikan dengan ikan tongkol atau bubara yang dibumbui dengan kunyit.Papeda berwarna putih dan bertekstur lengket menyerupai lem dengan rasa yang tawar",
    "asset/6.Papua/Landmark/RajaAmpat.jpeg",
    "RAJA AMPAT",
  ],
];

let currentIndex = 0;

function updateContent() {
  select(".title-text-daerah").innerHTML = dataDaerah[currentIndex][0];
  select(".section1 > img").src = dataDaerah[currentIndex][1];
  select(".text-daerah").innerHTML = dataDaerah[currentIndex][2];
  select(
    ".section2"
  ).style.backgroundImage = `url('${dataDaerah[currentIndex][3]}')`;
  select(".imgPakaian").src = dataDaerah[currentIndex][4];
  select(".titlePakaian").innerHTML = dataDaerah[currentIndex][5];
  select(".descPakaian").innerHTML = dataDaerah[currentIndex][6];
  select(
    ".section3"
  ).style.backgroundImage = `url('${dataDaerah[currentIndex][7]}')`;
  select(".imgTarian").src = dataDaerah[currentIndex][8];
  select(".titleTarian").innerHTML = dataDaerah[currentIndex][9];
  select(".descTarian").innerHTML = dataDaerah[currentIndex][10];
  select(
    ".section4"
  ).style.backgroundImage = `url('${dataDaerah[currentIndex][11]}')`;
  select(".imgMakanan").src = dataDaerah[currentIndex][12];
  select(".titleMakanan").innerHTML = dataDaerah[currentIndex][13];
  select(".descMakanan").innerHTML = dataDaerah[currentIndex][14];
  select(
    ".section5"
  ).style.backgroundImage = `url('${dataDaerah[currentIndex][15]}')`;
  select(".title").innerHTML = dataDaerah[currentIndex][16];
}

function kanan() {
  currentIndex = (currentIndex + 1) % dataDaerah.length;
  updateContent();
}

function kiri() {
  currentIndex = (currentIndex - 1 + dataDaerah.length) % dataDaerah.length;
  updateContent();
}

// Initial update
updateContent();
