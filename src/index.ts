import { UserModel } from "./model/UserModel";
import { UserView } from "./view/UserView";
import { UserPresenter } from "./presenter/UserPresenter";


const view = new UserView();
const model = new UserModel();
const presenter = new UserPresenter(view, model);

console.log("--- Prueba 1: Login correcto ---");
view.setCredentials("admin@test.com", "1234");
presenter.onLoginClicked(); // -> ✅ ÉXITO: Bienvenido al sistema

console.log("\n--- Prueba 2: Login incorrecto ---");
view.setCredentials("hacker@bad.com", "wrong");
presenter.onLoginClicked(); // -> ❌ ERROR: Credenciales inválidas
