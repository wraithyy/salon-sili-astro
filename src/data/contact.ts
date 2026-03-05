export const contact = {
  name: "Salon SILI",
  address: {
    street: "Benešovo náměstí 2",
    city: "Liberec 1",
    zip: "460 01",
  },
  phone: "+420 XXX XXX XXX",
  email: "info@salonsili.cz",
  hours: [
    { day: "Pondělí – Pátek", time: "9:00 – 18:00" },
    { day: "Sobota", time: "Po domluvě" },
    { day: "Neděle", time: "Zavřeno" },
  ],
  mapUrl:
    "https://maps.google.com/maps?q=Bene%C5%A1ovo+n%C3%A1m%C4%9Bst%C3%AD+2,+Liberec&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Bene%C5%A1ovo+n%C3%A1m.+2,+460+01+Liberec/",
} as const
