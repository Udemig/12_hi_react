const inputs = [
  {
    label: "Görev Başlığı",
    name: "title",
    type: "text",
  },
  {
    label: "İsminiz",
    name: "author",
    type: "text",
  },
  {
    label: "Atanıcak Kişi",
    name: "assigned",
    type: "text",
  },
  {
    label: "Son Teslim Tarihi",
    name: "end_date",
    type: "date",
  },
];

const initialTask = [
  {
    assigned: "Emre Yalçın",
    author: "Yusuf Yaman",
    end_date: "2025-03-25",
    id: "912a2070-f2fe-4435-bfc4-19745c5b276c",
    title: "Card Revize",
  },
  {
    assigned: "Esra Yılmaz",
    author: "Yusuf Yaman",
    end_date: "2025-03-28",
    id: "62f836ef-11f6-4399-b936-e2690147ab7f",
    title: "Header Revize",
  },
  {
    assigned: "Fatmanur Çağlar",
    author: "Mervenur Geçici",
    end_date: "2025-05-20",
    id: "ccb854ee-ffd6-4c5e-aebf-c5fa49055c9a",
    title: "Servis Bağlantıları",
  },
];

export { inputs, initialTask };
