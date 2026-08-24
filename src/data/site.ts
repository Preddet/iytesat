// Genel site bilgileri. Gerçek bilgiler netleştikçe burayı güncelleyin.

export const site = {
  name: "İYTE SAT",
  fullName: "İzmir Yüksek Teknoloji Enstitüsü Sualtı Topluluğu",
  shortDescription:
    "İzmir Yüksek Teknoloji Enstitüsü bünyesinde dalış, sualtı sporları ve deniz kültürünü öğrenciler arasında yaygınlaştırmak için çalışan öğrenci topluluğu.",
  university: "İzmir Yüksek Teknoloji Enstitüsü",
  city: "Urla, İzmir",
  emails: ["sualtiarastirma@iyte.edu.tr", "iztechsubaquatic@gmail.com"],
  phone: "+90 5xx xxx xx xx",
  address: "İYTE Kampüsü - Gülbahçe, 35430 Urla/İzmir",
  registrationForm: "https://forms.gle/imyAg8yegqmyYxz96",
  social: {
    instagram: "https://instagram.com/iytesat",
    linkedin: "https://www.linkedin.com/company/109695304",
    x: "https://x.com/iytesat",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/tuzuk", label: "Tüzük" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;
