import * as a from "../repository/UsuarioRepository.js"

import { Router } from "express"

const endpoints = Router();

//gets

endpoints.get('/usuario', async (req, resp) => {
    let usuarios = await a.listar();

    resp.send(usuarios);
});

endpoints.get('/usuario/:id', async (req, resp) => {
    let id = req.params.id;
    let usuario = await a.buscarPorId(id);

    resp.send(usuario);
});


//post

endpoints.post('/usuario', async (req, resp) => {
    let usuario = req.body;
    let id = await a.inserir(usuario);

    resp.send({id});
});

//put

endpoints.put('/usuario/:id', async (req, resp) => {
    let id = req.params.id;
    let usuario = req.body;

    let affectedRows = await a.atualizar(id, usuario);

    resp.send({affectedRows});
});

//delete

endpoints.delete('/usuario/:id', async (req, resp) => {
    let id = req.params.id;
    let affectedRows = await a.deletar(id);

    resp.send({affectedRows});
});

export default endpoints;

