export const products = [
  {
    id: "1",
    title: "Умный дом. Базовый курс",
    description: "Электронная книга по сценариям освещения и климата.",
    fullDescription:
      "Пошаговый курс для новичков: как спроектировать освещение, климат и базовую автоматизацию без лишнего оборудования. В комплекте чек-листы и готовые сценарии.",
    image: "/images/book.jpeg",
    price: 29,
    rating: 4.2,
    inStock: true,
    stock: 18,
  },
  {
    id: "2",
    title: "Digital House. Практикум",
    description: "Цифровое пособие по настройке умного дома.",
    fullDescription:
      "Практическое пособие с лабораторными заданиями: подключение хаба, датчиков и голосовых ассистентов. Подходит как продолжение базового курса.",
    image: "/images/book.jpeg",
    price: 35,
    rating: 4.8,
    inStock: true,
    stock: 9,
  },
  {
    id: "3",
    title: "Домашняя автоматизация",
    description: "Сборник готовых схем и чек-листов для проекта.",
    fullDescription:
      "Сборник рабочих схем: утро, уход из дома, ночной режим и охрана. Каждый сценарий разобран по устройствам, условиям и действиям.",
    image: "/images/book.jpeg",
    price: 19,
    rating: 4.0,
    inStock: true,
    stock: 24,
  },
  {
    id: "4",
    title: "Сценарии освещения Pro",
    description: "Расширенные схемы управления светом и датчиками.",
    fullDescription:
      "Продвинутые сценарии света: адаптивная яркость, зоны, датчики движения и интеграция с расписанием восхода и заката.",
    image: "/images/book.jpeg",
    price: 42,
    rating: 4.5,
    inStock: false,
    stock: 0,
  },
];

export function getProducts() {
  return products.map((product) => ({ ...product }));
}

export function getProductById(id) {
  const product = products.find((item) => item.id === String(id));
  return product ? { ...product } : null;
}

export function getProductIds() {
  return products.map((product) => product.id);
}

export function formatDateTime(date = new Date()) {
  return date.toLocaleString("ru-RU", {
    timeZone: "Europe/Minsk",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
