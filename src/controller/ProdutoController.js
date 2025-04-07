import * as p from '../repository/ProdutoRepository.js'

import { Router } from 'express'

const endpoints = Router();

//post
endpoints.post('/produto', async (req, resp) => {
    let produto = req.body;

    let id = await p.inserir(produto);

    resp.send({id});
});

//gets

endpoints.get('/produto', async (req, resp) => {
    let produtos = await p.listar();

    resp.send(produtos);
});

endpoints.get('/produto/:id', async (req, resp) => {
    let id = req.params.id;
    let produto = await p.buscarPorId(id);

    resp.send(produto);
});

//put
endpoints.put('/produto/:id', async (req, resp) => {
    let id = req.params.id;
    let produto = req.body;
    let affectedRows = await p.atualizar(id, produto);

    resp.send({affectedRows});
});

endpoints.delete('/produto/:id', async (req, resp) => {
    let id = req.params.id;
    let affectedRows = await p.deletar(id);

    resp.send({affectedRows});
});

export default endpoints;
