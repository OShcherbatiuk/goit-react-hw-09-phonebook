const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserEmail,
};
