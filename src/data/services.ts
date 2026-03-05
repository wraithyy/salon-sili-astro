export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: "Pedikúra",
    description:
      "Kombinovaná pedikúra spojující to nejlepší z medicínské mokré pedikúry a přístrojové suché pedikúry. Kompletní péče o vaše nohy.",
    icon: "foot",
  },
  {
    title: "Podologie",
    description:
      "Odborná podologická péče zaměřená na řešení problémů s nehty, otlaky, kuřími oky a dalšími obtížemi nohou.",
    icon: "medical",
  },
  {
    title: "Manikúra",
    description:
      "Profesionální manikúra s masáží rukou. Klasická i s gel lakem pro dlouhotrvající výsledek.",
    icon: "hand",
  },
  {
    title: "Gel lak",
    description:
      "Stylizace nehtů pomocí nejkvalitnějších gelových laků. Široká paleta barev a vzorů.",
    icon: "polish",
  },
]
