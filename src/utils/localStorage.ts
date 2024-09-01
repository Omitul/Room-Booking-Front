export const getRoleFromLocalStorage = (): string | null => {
  return localStorage.getItem("userRole");
};

export const setRoleToLocalStorage = (role: string) => {
  localStorage.setItem("userRole", role);
};

export const removeRoleFromLocalStorage = () => {
  localStorage.removeItem("userRole");
};

export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("authToken");
};

export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("authToken", token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("authToken");
};
