// Yönetim kurulu, denetim kurulu ve eğitmen bilgileri.
// İsim, unvan ve iletişim bilgilerini gerçek üyelerle güncelleyin.
// `image` alanını boş bırakırsanız kartta otomatik olarak isim baş harfleri gösterilir.

export type Member = {
  name: string;
  role: string;
  department?: string;
  grade?: string;
  email?: string;
  image?: string;
};

export const executiveBoard: Member[] = [
  {
    name: "İrem Bozlu",
    role: "Topluluk Başkanı",
    department: "Endüstriyel Tasarım",
    grade: "2. Sınıf",
    image: "/irembaşkan.jpg",
  },
  {
    name: "Deniz Uğur Koç",
    role: "Topluluk Başkan Yardımcısı",
    department: "Moleküler Biyoloji ve Genetik",
    grade: "2. Sınıf",
    image: "/deniz.jpg",
  },
  {
    name: "İnci Sıla Menderes",
    role: "Sosyal Medya ve Tasarım Koordinatörü",
    department: "İnşaat Mühendisliği",
    grade: "2. Sınıf",
    image: "/inci.jpg",
  },
  {
    name: "İrem Özdemir",
    role: "Sosyal Medya ve Tasarım Koordinatörü",
    department: "Gıda Mühendisliği",
    grade: "1. Sınıf",
    image: "/irem.jpg",
  },
  {
    name: "Ece Demir",
    role: "İletişim Koordinatörü",
    department: "Kimya",
    grade: "4. Sınıf",
    image: "/ece.jpg",
  },
  {
    name: "Tolga Şen",
    role: "İletişim Koordinatörü",
    department: "Endüstriyel Tasarım",
    grade: "3. Sınıf",
    image: "/tolga.jpg",
  },
  {
    name: "Umut Efe Demirel",
    role: "Malzeme Koordinatörü",
    department: "Kimya Mühendisliği",
    grade: "3. Sınıf",
    image: "/umut.jpg",
  },
  {
    name: "Ahmet Özer Şanlı",
    role: "Malzeme Koordinatörü",
    department: "Biyomühendislik",
    grade: "2. Sınıf",
    image: "/ahmet.jpg",
  },
  {
    name: "Burak Özsepet",
    role: "Sponsorluk Koordinatörü",
    department: "Elektronik ve Haberleşme Mühendisliği",
    grade: "3. Sınıf",
    image: "/burak.png",
  },
];

export const auditBoard: Member[] = [
  {
    name: "Derin Yamaner",
    role: "Denetim Kurulu Üyesi",
    department: "Mimarlık",
    grade: "4. Sınıf",
    image: "/derin.jpg",
  },
  {
    name: "Gökberk Çelebi",
    role: "Denetim Kurulu Üyesi",
    department: "Biyomühendislik",
    grade: "3. Sınıf",
    image: "/gökberk.jpg",
  },
];

export const instructors: Member[] = [
  {
    name: "Serkan Koç",
    role: "CMAS ve SSI Eğitmeni",
    image: "/serkan.jpg",
  },
];
