import * as f from '../repository/FeedbacksRepository.js';

import { Router } from 'express';

const endpoints = Router();

//post

endpoints.post('/feedback', async (req, resp) => {
    let feedback = req.body;

    let id = await f.inserir(feedback);

    resp.send({id});
});

//gets

endpoints.get('/feedback', async (req, resp) => {
    let feedbacks = await f.listar();

    resp.send(feedbacks);
});

endpoints.get('/feedback/:id', async (req, resp) => {
    let id = req.params.id;
    let feedback = await f.buscarPorId(id) ;

    resp.send(feedback);
});

//put

endpoints.put('/feedback/:id', async (req, resp) => {
    let id = req.params.id;
    let feedback = req.body;
    let affectedRows = await f.atualizar(id, feedback);

    resp.send({affectedRows});
});

//delete

endpoints.delete('/feedback/:id', async (req, resp) => {
    let id = req.params.id;
    let affectedRows = await f.deletar(id);

    resp.send({affectedRows});
});

export default endpoints;