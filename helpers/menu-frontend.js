const getMenuFrontend = (role = "USER_ROLE") => {
  const menu = [
    {
      titulo: "Mantenimiento",
      //   icono: "ti-folder",
      submenu: [
        // { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: "Tiendas", url: "tiendas" },
        { titulo: "Empleados", url: "empleados" },
      ],
    },
  ];

  if (role === "ADMIN_ROLE") {
    menu[0].submenu.unshift({ titulo: "Usuarios", url: "usuarios" });
  }
  return menu;
};

module.exports = {
  getMenuFrontend,
};
