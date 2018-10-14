import { IFeedback } from '../interfaces/feedback.interface';

/**
 * Класс, реализующтй интерфейс сообщения обратной связи
 */
export class Feedback {
  id: number;           // Идентфиикатор
  name: string;         // Имя отправителя
  email: string;        // E-mail отправителя
  message: string;      // Сообщение
  dateCreated: Date;    // Дата отправки сообщения

  /**
   * Конструктор
   * @param config - Параметры инициализации
   */
  constructor(config?: IFeedback) {
    this.id = config ? config.id : null;
    this.name = config ? config.name : null;
    this.email = config ? config.email : null;
    this.message = config ? config.message : null;
    this.dateCreated = config ? new Date(Number(config.date_created)) : null;
  }
}
