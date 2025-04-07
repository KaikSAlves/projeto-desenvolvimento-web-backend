import usuario from './controller/UsuarioController.js'
import feedback from './controller/FeedbackController.js'
import produto from './controller/ProdutoController.js'
import estoque from './controller/EstoqueController.js'

export default function adicionarRotas(servidor){
    servidor.use(usuario);
    servidor.use(feedback);
    servidor.use(produto);
    servidor.use(estoque);
}