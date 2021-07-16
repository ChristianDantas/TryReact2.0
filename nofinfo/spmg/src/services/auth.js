export const usuarioAutenticado = () => localStorage.getItem('Usuario-login') !== null;

export const parseJwt=()=>{
    let base64=localStorage.getItem("Usuario-login").split('.')[1];
     return JSON.parse(window.atob(base64));
}