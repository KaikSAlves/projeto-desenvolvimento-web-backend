import usuario from './controller/UsuarioController.js'
import feedback from './controller/FeedbackController.js'

export default function adicionarRotas(servidor){
    servidor.use(usuario);
    servidor.use(feedback);
}