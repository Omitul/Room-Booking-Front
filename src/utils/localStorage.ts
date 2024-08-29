export const getRoleFromLocalStorage = () => {
  return localStorage.getItem("userRole");
};

export const setRoleToLocalStorage = (role: string) => {
  localStorage.setItem("userRole", role);
};

export const removeRoleFromLocalStorage = () => {
  localStorage.removeItem("userRole");
};
