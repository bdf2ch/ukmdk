import { IUser } from '../interfaces/user.interface';

/**
 * Класс, реализующий интерфейс пользователя
 */
export class User {
  id: number;               // Идентификатор
  firstName: string;        // Имя пользователя
  lastName: string;         // Фамилия пользователя
  login: string;            // Учетная запись
  password: string;         // Пароль
  isEnabled: boolean;       // Доступность

  /**
   * Конструктор
   * @param config - Параметры инициализации
   */
  constructor(config?: IUser) {
    this.id = config ? config.id : null;
    this.firstName = config ? config.first_name : null;
    this.lastName = config ? config.last_name : null;
    this.login = config ? config.login : null;
    this.password = config ? config.passwd : null;
    this.isEnabled = config ? Boolean(config.is_enabled) : true;
  }
}
