import connection from "./connection.js";


//create

export async function inserir(produto) {
    const comando = `INSERT INTO tb_produto
        (tipo_produto, sabor_produto, desc_produto, valor_produto)
        VALUES (?,?,?,?)`;

    let [info] = await connection.query(comando, 
        [produto.tipo_produto, produto.sabor_produto, produto.desc_produto, produto.valor_produto]);
    
    return info.insertId;
}

//read

export async function listar(){
    const comando = `SELECT * FROM tb_produto`;

    let resp = await connection.query(comando);

    return resp[0];
}

export async function buscarPorId(id){
    const comando = `SELECT * FROM tb_produto
                    WHERE id_produto = ?`;

    let resp = await connection.query(comando, [id]);

    return resp[0];
}

//update

export async function atualizar(id, produto){
    const comando = `UPDATE tb_produto SET
        tipo_produto = ? , sabor_produto = ?, desc_produto = ?, valor_produto = ?
        WHERE id_produto = ?`;


    let [info] = await connection.query(comando, 
        [produto.tipo_produto, produto.sabor_produto, produto.desc_produto, produto.valor_produto, id]);
        
    return info.affectedRows;
}


//delete
export async function deletar(id){
    const comando = `DELETE FROM tb_produto
                    WHERE id_produto = ?`;

    let [info] = await connection.query(comando, [id]);

    return info.affectedRows;
}

