# 🦄 Proyecto Individual | Refactor + Módulo de Productos

> Refactor del módulo **Unicornios** usando Context API + nuevo módulo independiente de **Productos** en React.

---

## 📦 Estructura del Proyecto

src/ ├── context/ # UnicornContext 
      ├── unicorns/ # Vistas y formularios de unicornios 
        ├── products/ # Vistas y formularios de productos 
          └── App.jsx # Ruteo global

          
---

## ✨ Funcionalidades

- 🦄 **Unicornios**: gestión con Context API.
- 🛒 **Productos**: gestión con estado local o `localStorage`.
- ✅ Formularios validados con **Formik + Yup**.
- 🔀 Rutas:
  - `/unicornios`
  - `/unicornios/crear`
  - `/unicornios/editar/:id`
  - `/productos`

---

## 🛠️ Tecnologías

- ⚛️ React
- 🌐 React Router DOM
- 🎯 Context API
- 📝 Formik + Yup
- 🎨 PrimeReact *(opcional para estilos)*

---

## 🚀 Instalación Rápida

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Instalar dependencias
npm install

# Iniciar el servidor
npm start
