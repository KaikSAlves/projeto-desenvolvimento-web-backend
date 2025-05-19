import connection from "./connection";

//create

export async function inserir(venda) {
    const comando = `INSERT INTO tb_venda 
        (id_estoque,qtd_total , valor_total , data_venda)
        values (?, ?, ?, ?)`;
    
    let [info] = await connection.query(comando,
        [venda.id_estoque, venda.qtd_total, venda.valor_total, venda.data_venda]);

    return info.insertId;
}


//read
export async function listar() {
    const comando = `SELECT * FROM tb_venda`;

    let resp = await connection.query(comando);

    return resp[0];
}

export async function buscarPorId(id) {
    const comando = `SELECT * FROM tb_venda
                    WHERE id_venda = ?`;

    let resp = await connection.query(comando, [id]);

    return resp[0];
}

//update
export async function atualizar(id, venda) {
    const comando = `UPDATE tb_venda SET
                    id_estoque = ?, qtd_total = ?
                    , valor_total = ?, data_venda = ?
                    WHERE id_venda = ?`;

    let [info] = await connection.query(comando,
        [venda.id_estoque, venda.qtd_total, venda.valor_total, venda.data_venda, id])

    return info.affectedRows;
}

//delete
export async function deletar(id) {
    const comando = `DELETE FROM tb_venda
                    WHERE id_venda = ?`;

    let [info] = await connection.query(comando, [id]);

    return info.affectedRows;
}