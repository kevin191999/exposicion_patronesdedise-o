import { IUserView } from "../contracts/IUserView";
import { UserModel } from "../model/UserModel";

export class UserPresenter {
  private view: IUserView;
  private model: UserModel;

  constructor(view: IUserView, model: UserModel) {
    this.view = view;
    this.model = model;
  }

  /**
   * Maneja el evento de "clic en iniciar sesión".
   * La View llama a este método; ella NO sabe cómo se valida.
   */
  onLoginClicked(): void {
    const email = this.view.getEmail();
    const password = this.view.getPassword();

    const esValido = this.model.validateUser(email, password);

    if (esValido) {
      this.view.showSuccess("Bienvenido al sistema");
    } else {
      this.view.showError("Credenciales inválidas");
    }
  }
}
