
export class UserModel {
  /**
   * Regla de negocio: valida si las credenciales son correctas.
   * @returns true si el usuario y contraseña son válidos.
   */
  validateUser(email: string, password: string): boolean {
    return email === "admin@test.com" && password === "1234";
  }
}
