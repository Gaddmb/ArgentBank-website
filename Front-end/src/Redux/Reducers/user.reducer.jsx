// ici Le reducer gére le changement d'état en fonction des actions, comme la réussite de la connexion. deconnexion et ajoute d'utilisateeur
const initialState = {
  id: "",
  email: "",
  userName: "",
  firstName: "",
  lastName: "",
  isConnected: false,
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload, isConnected: true };

    case "LOGOUT":
      return { ...initialState }; // je remet à zéro l'état de l'utilisateur lors de la déconnexion

    case "EDIT_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
