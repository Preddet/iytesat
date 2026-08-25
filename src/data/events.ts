// Geçmiş etkinlikler. `albumUrl` alanına üyelerin fotoğraf albümü linkini
// (Google Photos, Drive vb.) ekleyin. Görsel eklemek için `image` alanını
// public/events/ klasörüne koyduğunuz bir dosyaya işaret edecek şekilde doldurun.
//
// Bu liste Instagram arşivimizden derlenmiştir. Eski yıllara ait bazı
// gönderilerde tarih/konum bilgisi net olmadığı için yalnızca yeterince
// belirgin olan etkinlikler eklenmiştir.

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: "Dalış" | "Eğitim" | "Sosyal" | "Dalış Gezisi" | "Çevre";
  description: string;
  image?: string;
  albumUrl?: string;
};

export const events: EventItem[] = [
  {
    slug: "tanisma-toplantisi-2017",
    title: "Tanışma ve Bilgilendirme Toplantısı",
    date: "2017-10-20",
    location: "Fizik Bölümü Seminer Salonu, İYTE",
    category: "Sosyal",
    description:
      "Kulübü ve açılacak dalış kurslarını tanıtan tanışma ve bilgilendirme toplantısı.",
    albumUrl: "#",
  },
  {
    slug: "karaburun-deneme-dalisi-2018",
    title: "Karaburun Deneme Dalışı",
    date: "2018-05-19",
    location: "Karaburun, İzmir",
    category: "Dalış",
    description:
      "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı'nda gerçekleştirilen deneme dalışı etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "tanisma-toplantisi-2018",
    title: "Tanışma ve Bilgilendirme Toplantısı",
    date: "2018-10-24",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "Tüplü dalış ve serbest dalış kursları hakkında eğitmen sunumuyla bilgilendirme toplantısı.",
    albumUrl: "#",
  },
  {
    slug: "tanisma-toplantisi-2019",
    title: "Tanışma ve Bilgilendirme Toplantısı",
    date: "2019-03-02",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "Tüplü dalış ve serbest dalış kursları hakkında bilgilendirme toplantısı.",
    albumUrl: "#",
  },
  {
    slug: "ucanbalik-dalis-etkinligi-2019",
    title: "Uçan Balık Dalış Etkinliği",
    date: "2019-11-06",
    location: "Uçan Balık Dalış Merkezi",
    category: "Dalış",
    description:
      "SADOS Academy ve Uçan Balık Dalış Merkezi iş birliğiyle gerçekleştirilen dalış etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "bahar-donemi-yk-toplantisi-2020",
    title: "Bahar Dönemi İlk Yönetim Kurulu Toplantısı",
    date: "2020-03-03",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "2019-2020 bahar döneminin ilk yönetim kurulu toplantısı gerçekleştirildi.",
    albumUrl: "#",
  },
  {
    slug: "cesme-egitim-dalisi-2021",
    title: "Çeşme Eğitim Dalışı",
    date: "2021-11-20",
    location: "Çeşme, İzmir",
    category: "Eğitim",
    description:
      "Güz dönemi eğitimlerinin ilk deniz dalışları Çeşme'de gerçekleştirildi.",
    albumUrl: "#",
  },
  {
    slug: "kas-etkinligi-2021",
    title: "Kaş Etkinliği",
    date: "2021-11-27",
    location: "Kaş, Antalya",
    category: "Dalış Gezisi",
    description:
      "27-28 Kasım tarihlerinde gerçekleştirilen, uzun süredir beklenen Kaş dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "tanisma-toplantisi-2022",
    title: "Tanışma ve Bilgilendirme Toplantısı",
    date: "2022-05-05",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "Bahar dönemi tüplü dalış kursları hakkında online tanışma ve bilgilendirme toplantısı.",
    albumUrl: "#",
  },
  {
    slug: "marmaris-dalis-etkinligi-2022",
    title: "Marmaris Dalış Etkinliği",
    date: "2022-05-07",
    location: "Marmaris, Muğla",
    category: "Dalış Gezisi",
    description:
      "İYTE'nin 30. yılı anısına Marmaris'te gerçekleştirilen dalış etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "ayvalik-1yildiz-egitim-2022",
    title: "Ayvalık 1 Yıldız Eğitim ve Keşif Dalışları",
    date: "2022-05-28",
    location: "Ayvalık, Balıkesir",
    category: "Eğitim",
    description:
      "2022 bahar dönemi 1 Yıldız eğitim ve keşif dalışları Ayvalık'ta gerçekleştirildi.",
    albumUrl: "#",
  },
  {
    slug: "topluluklar-toplaniyor-2022",
    title: "Topluluklar Toplanıyor Standı",
    date: "2022-10-20",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "Yeni üyelerin kaydolduğu, topluluğun tanıtıldığı 'Topluluklar Toplanıyor' etkinliği standı.",
    albumUrl: "#",
  },
  {
    slug: "brove-toreni-2022",
    title: "Bröve Töreni",
    date: "2022-12-23",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "2022 güz eğitimlerini tamamlayan üyelere brövelerinin verildiği etkinlik.",
    albumUrl: "#",
  },
  {
    slug: "sualti-cesitliligi-konferansi-2023",
    title: "Sualtı Çeşitliliği ve Görüntülenmesi Konferansı",
    date: "2023-06-02",
    location: "İYTE Erdal Saygın Amfisi",
    category: "Sosyal",
    description:
      "BESCO ile ortaklaşa düzenlenen, Efe Akçakayalıoğlu'nun konuşmacı olduğu konferans ve 'Sualtı Biyoçeşitliliği' fotoğraf sergisi.",
    albumUrl: "#",
  },
  {
    slug: "ayvalik-dalis-gezisi-2023-06",
    title: "Ayvalık Dalış Gezisi",
    date: "2023-06-03",
    location: "Ayvalık, Balıkesir",
    category: "Dalış Gezisi",
    description:
      "1* eğitim ve 1* dalıcı gruplarının katıldığı, iki gün süren Ayvalık dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "kas-dalis-etkinligi-2023",
    title: "Kaş Dalış Etkinliği",
    date: "2023-10-07",
    location: "Kaş, Antalya",
    category: "Dalış Gezisi",
    description: "7-8 Ekim tarihlerinde gerçekleştirilen Kaş dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "topluluklar-toplaniyor-2023",
    title: "Topluluklar Toplanıyor Standı",
    date: "2023-10-12",
    location: "İYTE Şenlik Alanı",
    category: "Sosyal",
    description:
      "Yeni üyelerin topluluğa kaydolduğu 'Topluluklar Toplanıyor' etkinliği standı.",
    albumUrl: "#",
  },
  {
    slug: "ayvalik-cumhuriyet100-2023",
    title: "Cumhuriyet'in 100. Yılı Ayvalık Dalış Gezisi",
    date: "2023-10-28",
    location: "Ayvalık, Balıkesir",
    category: "Dalış Gezisi",
    description:
      "Cumhuriyet'in 100. yılı anısına düzenlenen, pratik eğitimleri de kapsayan Ayvalık dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "tek-nefeste-100-yil-sergisi-2023",
    title: "'Tek Nefeste 100. Yıl' Fotoğraf Sergisi",
    date: "2023-10-29",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "Efe Akçakayalıoğlu'nun fotoğraflarından oluşan, Cumhuriyet'in 100. yılına adanmış fotoğraf sergisi.",
    albumUrl: "#",
  },
  {
    slug: "brove-toreni-2023",
    title: "Bröve Töreni",
    date: "2023-11-24",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "2023 güz eğitimlerini tamamlayan üyelere brövelerinin verildiği etkinlik.",
    albumUrl: "#",
  },
  {
    slug: "marmaris-dalis-gezisi-2023",
    title: "Marmaris Dalış Gezisi",
    date: "2023-12-02",
    location: "Marmaris, Muğla",
    category: "Dalış Gezisi",
    description: "1* ve 2* dalıcıların katıldığı, yılın son dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "kas-dalis-gezisi-2024-03",
    title: "Kaş Dalış Gezisi",
    date: "2024-03-02",
    location: "Kaş, Antalya",
    category: "Dalış Gezisi",
    description:
      "Bahar döneminin ilk dalış gezisi, 1* ve 2* dalgıçlarla Kaş'ta gerçekleştirildi.",
    albumUrl: "#",
  },
  {
    slug: "denizin-sirri-projesi-2024",
    title: "'Denizin Sırrı' Sosyal Sorumluluk Projesi",
    date: "2024-02-28",
    location: "Narlıdere, İzmir",
    category: "Sosyal",
    description:
      "İlkokul ve anaokullarında sualtı dünyasını ve deniz kirliliğini anlatan sosyal sorumluluk projesi.",
    albumUrl: "#",
  },
  {
    slug: "unesco-su-sempozyumu-2024",
    title: "UNESCO Su Sempozyumu ve Fotoğraf Sergisi",
    date: "2024-03-23",
    location: "Teknopark İzmir, Urla Salonu",
    category: "Sosyal",
    description:
      "Efe Akçakayalıoğlu'nun sergisiyle birlikte gerçekleştirilen UNESCO Su Sempozyumu.",
    albumUrl: "#",
  },
  {
    slug: "dalgalarin-icinden-1-2024",
    title: "Dalgaların İçinden Semineri",
    date: "2024-04-19",
    location: "İYTE Gösteri Merkezi",
    category: "Sosyal",
    description:
      "Sualtı fotoğrafçılığı ve dalış üzerine konuşmacıların yer aldığı, topluluğun ilk 'Dalgaların İçinden' semineri.",
    albumUrl: "#",
  },
  {
    slug: "liman-temizligi-2024",
    title: "Liman Temizliği",
    date: "2024-06-05",
    location: "Menderes, İzmir",
    category: "Çevre",
    description:
      "Dünya Çevre Günü'nde Menderes İlçe Tarım ve Orman Müdürlüğü projesi kapsamında gerçekleştirilen liman temizliği.",
    albumUrl: "#",
  },
  {
    slug: "ayvalik-dalis-gezisi-2024-10",
    title: "Ayvalık Dalış Gezisi",
    date: "2024-10-02",
    location: "Ayvalık, Balıkesir",
    category: "Dalış Gezisi",
    description: "Güz döneminin ilk dalışı, 2* eğitimini kapsayan Ayvalık gezisi.",
    albumUrl: "#",
  },
  {
    slug: "topluluklar-toplaniyor-2024",
    title: "Topluluklar Toplanıyor Standı",
    date: "2024-10-14",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "Yeni üyelerin topluluğa katıldığı 'Topluluklar Toplanıyor' etkinliği standı.",
    albumUrl: "#",
  },
  {
    slug: "brove-toreni-2024",
    title: "Bröve Töreni",
    date: "2024-10-15",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description:
      "2024 bahar eğitimlerini tamamlayan üyelere brövelerinin verildiği etkinlik.",
    albumUrl: "#",
  },
  {
    slug: "ayvalik-1yildiz-egitim-2024-11",
    title: "Ayvalık 1 Yıldız Dalıcı Eğitimi",
    date: "2024-11-04",
    location: "Ayvalık, Balıkesir",
    category: "Eğitim",
    description: "Güz dönemi 1 Yıldız dalıcı eğitimleri Ayvalık'ta tamamlandı.",
    albumUrl: "#",
  },
  {
    slug: "kas-dalis-gezisi-2024-12",
    title: "Kaş Dalış Gezisi",
    date: "2024-12-07",
    location: "Kaş, Antalya",
    category: "Dalış Gezisi",
    description: "4 dalış ve keyifli etkinliklerle dolu Kaş dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "brove-gecesi-2025-02",
    title: "Bröve Gecesi",
    date: "2025-02-28",
    location: "Karnaval, Gülbahçe",
    category: "Sosyal",
    description:
      "Bröve almaya hak kazanan üyelerin kutlandığı Bröve Gecesi etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "cmas-1yildiz-egitimi-2025",
    title: "CMAS 1 Yıldız Dalıcı Eğitimi",
    date: "2025-03-24",
    location: "İYTE Kampüsü",
    category: "Eğitim",
    description:
      "Teorik eğitimleri İYTE Kampüsü'nde, pratik dalışları Ayvalık'ta gerçekleştirilen CMAS 1 Yıldız Dalıcı Eğitimi.",
    albumUrl: "#",
  },
  {
    slug: "seferihisar-gece-dalisi-2025",
    title: "Seferihisar Gece Dalışı",
    date: "2025-05-02",
    location: "Seferihisar, İzmir",
    category: "Dalış",
    description: "2 Yıldız eğitimi kapsamında gerçekleştirilen gece dalışı.",
    albumUrl: "#",
  },
  {
    slug: "sualti-gunleri-2025",
    title: "18. Sualtı Günleri",
    date: "2025-05-31",
    location: "Uludağ Üniversitesi, Bursa",
    category: "Sosyal",
    description:
      "Uludağ Üniversitesi Sualtı Topluluğu'nun düzenlediği 18. Sualtı Günleri'ne katılım sağlandı.",
    albumUrl: "#",
  },
  {
    slug: "marmaris-dalis-etkinligi-2025",
    title: "Marmaris Dalış Etkinliği",
    date: "2025-05-17",
    location: "Marmaris, Muğla",
    category: "Dalış Gezisi",
    description: "17-18 Mayıs tarihlerinde gerçekleştirilen Marmaris dalış etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "karaburun-sezon-finali-2025",
    title: "Karaburun Sezon Finali Dalışı",
    date: "2025-06-04",
    location: "Karaburun, İzmir",
    category: "Dalış",
    description: "Sezonun son dalışı olarak Karaburun'da gerçekleştirilen etkinlik.",
    albumUrl: "#",
  },
  {
    slug: "seferihisar-dalisi-2025-08",
    title: "Seferihisar Dalışı",
    date: "2025-08-09",
    location: "Seferihisar, İzmir",
    category: "Dalış",
    description: "Unutulmaz bir dalış deneyimi yaşanan Seferihisar etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "ssi-advanced-adventurer-2025",
    title: "SSI Advanced Adventurer Eğitimi",
    date: "2025-08-31",
    location: "Seferihisar, İzmir",
    category: "Eğitim",
    description:
      "SSI Advanced Adventurer eğitimini tamamlayan dalıcıların kutlandığı etkinlik.",
    albumUrl: "#",
  },
  {
    slug: "fethiye-dalis-gezisi-2025",
    title: "Fethiye Dalış Gezisi",
    date: "2025-10-04",
    location: "Fethiye, Muğla",
    category: "Dalış Gezisi",
    description: "4-5 Ekim tarihlerinde gerçekleştirilen Fethiye dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "owd-egitimi-2025-10",
    title: "SSI Open Water Diver Eğitimi",
    date: "2025-10-08",
    location: "Seferihisar, İzmir",
    category: "Eğitim",
    description:
      "3 gün teorik, 3 gün pratik olarak Seferihisar'da gerçekleştirilen SSI OWD eğitimi.",
    albumUrl: "#",
  },
  {
    slug: "topluluklar-toplaniyor-2025",
    title: "Topluluklar Toplanıyor Standı",
    date: "2025-10-15",
    location: "İYTE Şenlik Alanı",
    category: "Sosyal",
    description:
      "Yeni üyelerin topluluğa kaydolduğu 'Topluluklar Toplanıyor' etkinliği standı.",
    albumUrl: "#",
  },
  {
    slug: "seferihisar-dalisi-2025-11",
    title: "Seferihisar Dalışı",
    date: "2025-11-09",
    location: "Seferihisar, İzmir",
    category: "Dalış",
    description: "9 Kasım'da gerçekleştirilen Seferihisar dalış etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "sualti-bilimleri-toplantisi-2025",
    title: "Sualtı Bilimleri ve Teknoloji Toplantısı",
    date: "2025-11-22",
    location: "Boğaziçi Üniversitesi, İstanbul",
    category: "Sosyal",
    description:
      "Boğaziçi Üniversitesi'nde düzenlenen Sualtı Bilimleri ve Teknoloji Toplantısı'na katılım sağlandı.",
    albumUrl: "#",
  },
  {
    slug: "brove-gecesi-2025-11",
    title: "Bröve Gecesi",
    date: "2025-11-19",
    location: "Karnaval, Gülbahçe",
    category: "Sosyal",
    description:
      "Bröve almaya hak kazanan üyelerin kutlandığı Bröve Gecesi etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "kas-dalis-gezisi-2025-12",
    title: "Kaş Dalış Gezisi",
    date: "2025-12-06",
    location: "Kaş, Antalya",
    category: "Dalış Gezisi",
    description: "6-7 Aralık tarihlerinde gerçekleştirilen Kaş dalış gezisi.",
    albumUrl: "#",
  },
  {
    slug: "bahar-donemi-bulusmasi-2026",
    title: "Bahar Dönemi Buluşması",
    date: "2026-02-24",
    location: "İYTE Kampüsü",
    category: "Sosyal",
    description: "Üyelerin bir araya geldiği bahar dönemi buluşması.",
    albumUrl: "#",
  },
  {
    slug: "dalgalarin-icinden-2-2026",
    title: "Dalgaların İçinden 2 Konferansı",
    date: "2026-03-07",
    location: "İYTE Gösteri Merkezi",
    category: "Sosyal",
    description:
      "Teknik dalış, sualtı arkeolojisi ve su altı görüntü yönetmenliği konularında konuşmacıların yer aldığı ikinci 'Dalgaların İçinden' konferansı.",
    albumUrl: "#",
  },
  {
    slug: "marmaris-dalisi-2026",
    title: "Marmaris Dalışı",
    date: "2026-04-11",
    location: "Marmaris, Muğla",
    category: "Dalış Gezisi",
    description:
      "2026 sezonunun ilk dalışı olarak bröveli üyelerle gerçekleştirilen Marmaris gezisi.",
    albumUrl: "#",
  },
  {
    slug: "19-mayis-cesme-dalisi",
    title: "19 Mayıs Çeşme Dalışı",
    date: "2026-05-19",
    location: "Çeşme, İzmir",
    category: "Dalış",
    description:
      "Atatürk'ü Anma, Gençlik ve Spor Bayramı'nda günübirlik iki dalışla suyun altında bayrağımızı açıyoruz.",
    albumUrl: "#",
  },
  {
    slug: "karaburun-dalisi",
    title: "Karaburun Dalışı",
    date: "2026-06-06",
    location: "Karaburun, İzmir",
    category: "Dalış",
    description: "Günübirlik iki dalışla gerçekleştirdiğimiz Karaburun etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "karaburun-dalisi-2026-06-14",
    title: "Karaburun Dalışı",
    date: "2026-06-14",
    location: "Karaburun, İzmir",
    category: "Dalış",
    description: "6 Haziran'daki gezinin ardından tekrarlanan Karaburun dalış etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "liman-temizligi-2026",
    title: "Liman Temizliği",
    date: "2026-06-08",
    location: "Menderes, İzmir",
    category: "Çevre",
    description:
      "Menderes İlçe Tarım ve Orman Müdürlüğü projesi kapsamında, Deniz Polisi ve Jandarma Sualtı Arama Kurtarma katılımıyla gerçekleştirilen liman temizleme etkinliği.",
    albumUrl: "#",
  },
  {
    slug: "owd-egitimi-2026",
    title: "SSI Open Water Diver Eğitimi",
    date: "2026-06-12",
    location: "Seferihisar, İzmir",
    category: "Eğitim",
    description:
      "20 Nisan'da başlayan, teorik ve pratik dalışlardan oluşan SSI Open Water Diver eğitimi başarıyla tamamlandı.",
    albumUrl: "#",
  },
  {
    slug: "cesme-dalisi-donem-kapanisi",
    title: "Çeşme Dalışı",
    date: "2026-06-27",
    location: "Çeşme, İzmir",
    category: "Dalış",
    description:
      "Günübirlik iki dalışla dönemin son dalışında bir araya geldiğimiz etkinlik.",
    albumUrl: "#",
  },
];
