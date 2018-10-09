/**
 * Интерфейс, описывающий пользователя приложения
 */
export interface IUser {
  id: number;                 // Идентификатор
  first_name: string;         // Имя пользователя
  last_name: string;          // Фамилия пользователя
  login: string;              // Учетная запись
  passwd: string;           // Пароль
  is_enabled: number;         // Доступность
}
