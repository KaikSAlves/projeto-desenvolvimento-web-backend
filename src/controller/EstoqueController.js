import * as e from '../repository/EstoqueRepository.js'

import { Router } from 'express'

const endpoints = Router();

//post

endpoints.post('/estoque', async (req, resp) => {
    let estoque = req.body;
    let id = await e.inserir(estoque);

    resp.send({id});
});

//gets

endpoints.get('/estoque', async (req, resp) => {
    let estoques = await e.listar();

    resp.json(estoques);
});

endpoints.get('/estoque/:id', async (req, resp) => {
    let id = req.params.id;
    let estoque = await e.buscarPorId(id);

    resp.json(estoque);
});


//put

endpoints.put('/estoque/:id', async (req, resp) => {
    let id = req.params.id;
    let estoque = req.body;
    let affectedRows = await e.atualizar(id, estoque);

    resp.send({affectedRows});
});

export default endpoints;

//delete
endpoints.delete('/estoque/:id', async (req, resp) => {
    let id = req.params.id;
    let affectedRows = await e.deletar(id);

    resp.send({affectedRows});
});