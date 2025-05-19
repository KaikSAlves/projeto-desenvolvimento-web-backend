import * as a from '../repository/VendasRepository.js';
import { Router } from 'express';

const endpoints = Router();

//gets
endpoints.get('/vendas', async (req, resp) => {
    let vendas = await a.listar();

    resp.send(vendas);
});

endpoints.get('/vendas/:id', async (req, resp) => {
    let id = req.params.id;
    let venda = await a.buscarPorId(id);

    resp.send(venda);
});

//post
endpoints.post('/vendas', async (req, resp) => {
    let venda = req.body;
    let id = await a.inserir(venda);

    resp.send({ id });
});

//put
endpoints.put('/vendas/:id', async (req, resp) => {
    let id = req.params.id;
    let venda = req.body;

    let affectedRows = await a.atualizar(id, venda);

    resp.send({ affectedRows });
});

//delete
endpoints.delete('/vendas/:id', async (req, resp) => {
    let id = req.params.id;
    let affectedRows = await a.deletar(id);

    resp.send({ affectedRows });
});

export default endpoints;