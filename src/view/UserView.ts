import { IUserView } from "../contracts/IUserView";

export class UserView implements IUserView {
  private email: string = "";
  private password: string = "";

  /**
   * Simula que el usuario escribió sus credenciales en la pantalla.
   */
  setCredentials(email: string, password: string): void {
    this.email = email;
    this.password = password;
  }

  // El Presenter LEE estos datos
  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  // El Presenter ORDENA a la vista qué mostrar
  showSuccess(msg: string): void {
    console.log("✅ ÉXITO:", msg);
  }

  showError(msg: string): void {
    console.log("❌ ERROR:", msg);
  }
}
