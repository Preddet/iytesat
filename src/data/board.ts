// Yönetim kurulu, denetim kurulu ve eğitmen bilgileri.
// İsim, unvan ve iletişim bilgilerini gerçek üyelerle güncelleyin.
// `image` alanını boş bırakırsanız kartta otomatik olarak isim baş harfleri gösterilir.
// Her dönemin fotoğrafları `public/Ekip_<dönem>/` klasöründe tutulur; eski
// dönemlerde güncel ekipten olan kişiler için `Ekip_2026-2027` klasöründeki
// fotoğraflar yeniden kullanılır.

export type Member = {
  name: string;
  role: string;
  department?: string;
  grade?: string;
  email?: string;
  image?: string;
  imagePosition?: string;
};

export type BoardTerm = {
  // Butonlarda görünen dönem etiketi, ör. "2026-2027".
  year: string;
  executiveBoard: Member[];
  auditBoard: Member[];
};

// En yeni dönem en üstte olacak şekilde sıralayın; ilk sıradaki dönem
// sayfa açıldığında varsayılan olarak gösterilir.
export const boardTerms: BoardTerm[] = [
  {
    year: "2026-2027",
    executiveBoard: [
      {
        name: "İrem Bozlu",
        role: "Topluluk Başkanı",
        department: "Endüstriyel Tasarım",
        grade: "2. Sınıf",
        image: "/Ekip_2026-2027/irembaşkan.jpg",
      },
      {
        name: "Deniz Uğur Koç",
        role: "Topluluk Başkan Yardımcısı",
        department: "Moleküler Biyoloji ve Genetik",
        grade: "2. Sınıf",
        image: "/Ekip_2026-2027/deniz.jpg",
      },
      {
        name: "İnci Sıla Menderes",
        role: "Sosyal Medya ve Tasarım Koordinatörü",
        department: "İnşaat Mühendisliği",
        grade: "2. Sınıf",
        image: "/Ekip_2026-2027/inci.jpg",
      },
      {
        name: "İrem Özdemir",
        role: "Sosyal Medya ve Tasarım Koordinatörü",
        department: "Gıda Mühendisliği",
        grade: "1. Sınıf",
        image: "/Ekip_2026-2027/irem.jpg",
      },
      {
        name: "Ece Demir",
        role: "İletişim Koordinatörü",
        department: "Kimya",
        grade: "4. Sınıf",
        image: "/Ekip_2026-2027/ece.jpg",
      },
      {
        name: "Tolga Şen",
        role: "İletişim Koordinatörü",
        department: "Endüstriyel Tasarım",
        grade: "3. Sınıf",
        image: "/Ekip_2026-2027/tolga.jpg",
      },
      {
        name: "Umut Efe Demirel",
        role: "Malzeme Koordinatörü",
        department: "Kimya Mühendisliği",
        grade: "3. Sınıf",
        image: "/Ekip_2026-2027/umut.jpg",
        imagePosition: "center 12%",
      },
      {
        name: "Ahmet Özer Şanlı",
        role: "Malzeme Koordinatörü",
        department: "Biyomühendislik",
        grade: "2. Sınıf",
        image: "/Ekip_2026-2027/ahmet.jpg",
      },
      {
        name: "Burak Özsepet",
        role: "Sponsorluk Koordinatörü",
        department: "Elektronik ve Haberleşme Mühendisliği",
        grade: "3. Sınıf",
        image: "/Ekip_2026-2027/burak.png",
      },
    ],
    auditBoard: [
      {
        name: "Derin Yamaner",
        role: "Denetim Kurulu Üyesi",
        department: "Mimarlık",
        grade: "4. Sınıf",
        image: "/Ekip_2026-2027/derin.jpg",
      },
      {
        name: "Gökberk Çelebi",
        role: "Denetim Kurulu Üyesi",
        department: "Biyomühendislik",
        grade: "3. Sınıf",
        image: "/Ekip_2026-2027/gökberk.jpg",
      },
    ],
  },
  {
    year: "2025-2026",
    executiveBoard: [
      {
        name: "Derin Yamaner",
        role: "Topluluk Başkanı",
        department: "Mimarlık",
        grade: "3. Sınıf",
        image: "/Ekip_2026-2027/derin.jpg",
      },
      {
        name: "Gökberk Çelebi",
        role: "Topluluk Başkan Yardımcısı",
        department: "Biyomühendislik",
        grade: "2. Sınıf",
        image: "/Ekip_2026-2027/gökberk.jpg",
      },
      {
        name: "Ece Demir",
        role: "İletişim ve Yazı İşleri Sorumlusu",
        department: "Kimya",
        grade: "3. Sınıf",
        image: "/Ekip_2026-2027/ece.jpg",
      },
      {
        name: "Elif Direkçi",
        role: "İletişim ve Yazı İşleri Sorumlusu",
        department: "Gıda Mühendisliği",
        grade: "3. Sınıf",
        image: "/Ekip_2025-2026/elif.jpg",
      },
      {
        name: "Deniz Uğur Koç",
        role: "İletişim ve Yazı İşleri Sorumlusu",
        department: "Moleküler Biyoloji ve Genetik",
        grade: "1. Sınıf",
        image: "/Ekip_2026-2027/deniz.jpg",
      },
      {
        name: "Umut Efe Demirel",
        role: "Dalış Malzemeleri Sorumlusu",
        department: "Kimya Mühendisliği",
        grade: "2. Sınıf",
        image: "/Ekip_2026-2027/umut.jpg",
        imagePosition: "center 12%",
      },
      {
        name: "Efe Deniz Özdemir",
        role: "Ürün ve Baskı Sorumlusu",
        department: "Makine Mühendisliği",
        grade: "2. Sınıf",
        image: "/Ekip_2025-2026/efedeniz.jpg",
      },
      {
        name: "İrem Bozlu",
        role: "Sosyal Medya ve Tasarım Sorumlusu",
        department: "Endüstriyel Tasarım",
        grade: "1. Sınıf",
        image: "/Ekip_2026-2027/irembaşkan.jpg",
      },
    ],
    auditBoard: [
      {
        name: "Görkem Şahan",
        role: "Denetim Kurulu Üyesi",
        department: "Biyomühendislik",
        grade: "4. Sınıf",
        image: "/Ekip_2025-2026/görkem.jpg",
      },
      {
        name: "Deniz Yiğit",
        role: "Denetim Kurulu Üyesi",
        department: "Makine Mühendisliği",
        grade: "4. Sınıf",
        image: "/Ekip_2025-2026/denizyiğit.jpg",
      },
      {
        name: "Atalay Konuk",
        role: "Denetim Kurulu Üyesi",
        department: "Makine Mühendisliği",
        grade: "4. Sınıf",
        image: "/Ekip_2025-2026/atalay.jpg",
      },
    ],
  },
  {
    year: "2024-2025",
    executiveBoard: [
      {
        name: "Umut Efe Demirel",
        role: "Topluluk Başkanı",
        department: "Kimya Mühendisliği",
        image: "/Ekip_2026-2027/umut.jpg",
        imagePosition: "center 12%",
      },
      {
        name: "Derin Yamaner",
        role: "Topluluk Başkan Yardımcısı",
        department: "Mimarlık",
        image: "/Ekip_2026-2027/derin.jpg",
      },
      {
        name: "Gökberk Çelebi",
        role: "Yönetim Kurulu Üyesi",
        department: "Biyomühendislik",
        image: "/Ekip_2026-2027/gökberk.jpg",
      },
      {
        name: "Elif Direkçi",
        role: "Yönetim Kurulu Üyesi",
        department: "Gıda Mühendisliği",
        image: "/Ekip_2024-2025/elif.jpg",
      },
      {
        name: "Ekrem Büker",
        role: "Yönetim Kurulu Üyesi",
        image: "/Ekip_2024-2025/ekrem.jpg",
      },
      {
        name: "Ece Demir",
        role: "Yönetim Kurulu Üyesi",
        department: "Kimya",
        image: "/Ekip_2024-2025/ecedemir.jpg",
      },
      {
        name: "Efe Deniz Özdemir",
        role: "Yönetim Kurulu Üyesi",
        department: "Makine Mühendisliği",
        image: "/Ekip_2024-2025/efedeniz.jpg",
      },
      {
        name: "Sude Gölcük",
        role: "Yönetim Kurulu Üyesi",
        image: "/Ekip_2024-2025/sude.jpg",
      },
    ],
    auditBoard: [
      {
        name: "Deniz Yiğit",
        role: "Denetim Kurulu Üyesi",
        department: "Makine Mühendisliği",
        image: "/Ekip_2024-2025/denizyiğit.jpg",
      },
      {
        name: "Atalay Konuk",
        role: "Denetim Kurulu Üyesi",
        department: "Makine Mühendisliği",
        image: "/Ekip_2024-2025/atalay.jpg",
      },
      {
        name: "Görkem Şahan",
        role: "Denetim Kurulu Üyesi",
        department: "Biyomühendislik",
        image: "/Ekip_2024-2025/görkem.jpg",
      },
    ],
  },
];

export const instructors: Member[] = [
  {
    name: "Serkan Koç",
    role: "CMAS ve SSI Eğitmeni",
    image: "/Ekip_2026-2027/serkan.jpg",
  },
];
