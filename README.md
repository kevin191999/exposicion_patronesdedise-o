# Patrón de Arquitectura MVP (Model-View-Presenter)

**Autor:** Kevin Smith Molina Alonzo
**Asignatura:** Programación Orientada a Objetos — 3B
**Lenguaje:** TypeScript

---

## 📌 ¿Qué es MVP?

MVP (Model-View-Presenter) es un patrón de arquitectura que **separa la
lógica de presentación de la interfaz de usuario**. Es una evolución del
patrón MVC. Su objetivo principal es la **separación de responsabilidades**
y la **testabilidad**.

Se compone de tres capas:

| Capa | Responsabilidad |
|------|-----------------|
| **Model** | Datos y reglas de negocio. No conoce la UI. |
| **View** | Interfaz de usuario pasiva. Solo muestra y captura. No decide nada. |
| **Presenter** | El "cerebro". Recibe eventos de la View, consulta al Model y actualiza la View. |

---

## 🔄 Flujo de datos

```
Usuario → View → (evento) → Presenter → (consulta) → Model
                                ↓                        ↓
                            (actualiza) ← ← ← ← ← (responde datos)
                                ↓
                              View
```

1. El usuario interactúa con la **View** (ej: clic en "Iniciar sesión").
2. La **View** delega el evento al **Presenter** (no decide nada por sí misma).
3. El **Presenter** pide los datos a la View y consulta al **Model**.
4. El **Model** aplica la regla de negocio y devuelve un resultado.
5. El **Presenter** decide qué mostrar y se lo ordena a la **View**.

---

## 📁 Estructura del proyecto

```
mvp-login/
├── src/
│   ├── model/
│   │   └── UserModel.ts          # Datos y lógica de negocio
│   ├── view/
│   │   └── UserView.ts           # Vista pasiva (implementa el contrato)
│   ├── presenter/
│   │   └── UserPresenter.ts      # Lógica de presentación
│   ├── contracts/
│   │   └── IUserView.ts          # Interfaz que desacopla View y Presenter
│   └── index.ts                  # Punto de entrada (conecta las capas)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧩 La clave del patrón: la interfaz `IUserView`

El **Presenter no conoce la clase `UserView`**, solo conoce la **interfaz
`IUserView`**. Esto es lo que hace al MVP tan potente:

- El Presenter no depende de cómo se dibuja la pantalla.
- Podemos cambiar la View (consola, web, móvil) sin tocar el Presenter.
- Podemos crear una View *falsa* (mock) para pruebas unitarias.

---

## ▶️ Cómo ejecutar el proyecto

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Ejecutar directamente con ts-node:

   ```bash
   npm start
   ```

   O compilar y luego ejecutar:

   ```bash
   npm run build
   npm run run-build
   ```

### Resultado esperado

```
--- Prueba 1: Login correcto ---
✅ ÉXITO: Bienvenido al sistema

--- Prueba 2: Login incorrecto ---
❌ ERROR: Credenciales inválidas
```

---

## ❓ Problema que resuelve

Sin MVP, el código de la pantalla mezcla la interfaz, la validación y el
acceso a datos en un solo lugar ("código espagueti"). Esto provoca:

- Difícil de mantener y escalar.
- Imposible de probar sin abrir la pantalla.
- Cambios en la UI rompen la lógica de negocio.

Con MVP cada capa tiene una única responsabilidad, lo que mejora el
**mantenimiento**, la **escalabilidad**, el **trabajo en equipo** y la
**testabilidad**.

---

## 📚 Referencias

- Refactoring.guru — Patrones de diseño
- Martin Fowler — GUI Architectures
- Documentación oficial de TypeScript
# exposicion_patronesdedise-o
# exposicion_patronesdedise-o
# exposicion_patronesdedise-o
