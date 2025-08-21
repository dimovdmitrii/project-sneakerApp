// src/addDuplicates.js
import axios from "axios";

const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

async function addDuplicateProducts() {
  try {
    // Шаг 1: Получаем список всех существующих товаров
    const response = await axios.get(`${BASE_URL}/productData`);
    const existingProducts = response.data;

    // Проверяем, что товаров достаточно для дублирования
    if (existingProducts.length < 3) {
      console.error(
        "Недостаточно товаров для дублирования. Необходимо как минимум 3."
      );
      return;
    }

    // Шаг 2: Выбираем первые три товара для дублирования
    const productsToDuplicate = existingProducts.slice(0, 3);

    // Шаг 3: Создаем новые записи на сервере для каждого дубликата
    console.log("Добавление дубликатов товаров...");
    for (const product of productsToDuplicate) {
      // Создаем новый объект, исключая старый ID
      const newProduct = {
        name: product.name,
        price: product.price,
        image: product.image,
      };

      await axios.post(`${BASE_URL}/productData`, newProduct);
    }

    console.log("Три новых товара успешно добавлены.");
  } catch (error) {
    console.error("Ошибка при добавлении дубликатов:", error);
    if (error.response) {
      console.error("Статус ошибки:", error.response.status);
      console.error("Сообщение от сервера:", error.response.data);
    }
  }
}

addDuplicateProducts();
