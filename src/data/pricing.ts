export interface PriceItem {
  name: string
  price: number
  note?: string
}

export interface PriceCategory {
  category: string
  items: PriceItem[]
}

export const pricing: PriceCategory[] = [
  {
    category: "Pedikúra",
    items: [
      { name: "Kombinovaná pedikúra", price: 750 },
      { name: "Medicinální pedikúra", price: 850 },
      { name: "Přístrojová pedikúra", price: 700 },
      { name: "Gel lak na nohy", price: 250, note: "k pedikúře" },
    ],
  },
  {
    category: "Podologie",
    items: [
      { name: "Podologické ošetření", price: 900 },
      { name: "Korekce zarostlého nehtu", price: 500 },
      { name: "Odstranění kuřího oka", price: 300 },
    ],
  },
  {
    category: "Manikúra",
    items: [
      { name: "Klasická manikúra", price: 400 },
      { name: "Manikúra + Gel lak", price: 750 },
      { name: "Japonská manikúra", price: 550 },
      { name: "Doplnění gel laku", price: 600 },
    ],
  },
]
