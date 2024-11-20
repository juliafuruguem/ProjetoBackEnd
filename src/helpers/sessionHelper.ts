// Simples armazenamento de sessão
const sessions: { [key: number]: boolean } = {};

export const createSession = (userId: number) => {
  sessions[userId] = true;
};

export const destroySession = (userId: number) => {
  delete sessions[userId];
};

export const isUserLoggedIn = (userId: number): boolean => {
  return !!sessions[userId];
};