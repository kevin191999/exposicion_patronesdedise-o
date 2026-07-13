
export interface IUserView {
  // Métodos que el Presenter usa para ACTUALIZAR la vista0
  showSuccess(msg: string): void;
  showError(msg: string): void;

  // Métodos que el Presenter usa para LEER datos de la vista
  getEmail(): string;
  getPassword(): string;
}
