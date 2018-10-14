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
    this.isEnabled = config ? (Number(config.is_enabled) === 1 ? true : false) : false;
  }

  /**
   * Экспорт модели в DTO
   */
  toDTO(): IMachine {
    const result: IMachine = {
      id: this.id ? this.id : 0,
      title: this.title ? this.title : '',
      description: this.description ? this.description : '',
      cost: this.cost ? String(this.cost) : '',
      rent: this.rent ? String(this.rent) : '',
      photo_url: this.photo ? this.photo : '',
      is_enabled: 1
    };
    return result;
  }
}
