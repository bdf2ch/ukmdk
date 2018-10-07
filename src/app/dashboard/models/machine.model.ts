import { IMachine } from '../interfaces/machine.interface';

/**
 * Класс, реалиизующий интерфейс спецтехники
 */
export class Machine {
  id: number;               // Идентификатор
  title: string;            // Наименование
  description: string;      // Описание
  photo: string;            // URL фотографии
  cost: string;             // Стоимость
  rent: string;             // Цена аренды
  isEnabled: boolean;       // Доступность

  /**
   * Конструктор
   * @param config - Параметры инициализации
   */
  constructor(config?: IMachine) {
    this.id = config ? Number(config.id) : 0;
    this.title = config ? config.title : null;
    this.description = config ? config.description : null;
    this.photo = config ? config.photo_url : null;
    this.cost = config ? config.cost : null;
    this.rent = config ? config.rent : null;
    this.isEnabled = config ? Boolean(config.is_enabled) : true;
  }
}
