//  je crée mes differentes action LOGIN , LOGOUT , EDIT_USER pour la gestion de la connexion utilisateur

export const login = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};

export const logout = (payload) => {
  return {
    type: "LOGOUT",
    payload,
  };
};

export const editUser = (payload) => {
  return {
    type: "EDIT_USER",
    payload,
  };
};
