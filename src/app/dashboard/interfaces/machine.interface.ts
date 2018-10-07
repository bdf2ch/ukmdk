/**
 * Интерфейс, описывающий спецтехнику
 */
export interface IMachine {
  id: number;                 // Идентификатор
  title: string;              // Наименование
  description: string;        // Описание
  photo_url: string;          // URL фотографии
  cost: string;               // Стоимость
  rent: string;               // Цена аренды
  is_enabled: number;         // Доступность
}
