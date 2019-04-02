export const getAuthFS = (state) => state.auth;
export const getServiceFS = (state) => state.serv;
export const getLoginFS = (state) => getAuthFS(state).login;
export const getDrawerPg = (state) => getAuthFS(state).currentDrawerPage;
export const getUserLog = (state) => getAuthFS(state).user;
export const getProvider = (state) => getServiceFS(state).providers;
