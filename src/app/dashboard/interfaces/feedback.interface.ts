/**
 * Интерфейс, описывающий сообщение обратной связи
 */
export interface IFeedback {
  id: number;               // Идентификатор
  name: string;             // Имя отправителя
  email: string;            // E-mail отправителя
  message: string;          // Сообщение
  date_created: number;     // Дата отправки сообщения
}
