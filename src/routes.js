import usuario from './controller/UsuarioController.js'

export default function adicionarRotas(servidor){
    servidor.use(usuario);
}