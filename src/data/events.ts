// Geçmiş etkinlikler. `albumUrl` alanına üyelerin fotoğraf albümü linkini
// (Google Photos, Drive vb.) ekleyin. Görsel eklemek için `image` alanını
// public/events/ klasörüne koyduğunuz bir dosyaya işaret edecek şekilde doldurun.

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
