import connection from "./connection.js";


//create
export async function inserir(estoque){
    const comando = `INSERT INTO tb_estoque
        (id_produto, qtd_disponivel, qtd_min, data_atualizacao)
        VALUES (?,?,?,?)`;
    
    let [info] = await connection.query(comando, 
        [estoque.id_produto, estoque.qtd_disponivel, estoque.qtd_min, estoque.data_atualizacao]);

    return info.insertId;
}

//read

export async function listar(){
    const comando = `SELECT 
    e.id_estoque, p.id_produto, e.qtd_disponivel,
    e.qtd_min, e.data_atualizacao, p.tipo_produto,
    p.sabor_produto, p.desc_produto, p.valor_produto
        FROM 
    tb_estoque e
        JOIN 
    tb_produto p ON e.id_produto = p.id_produto;`;

    let info = await connection.execute(comando);
    return info[0];
}

export async function buscarPorId(id){
    const comando = `SELECT 
    e.id_estoque, p.id_produto, e.qtd_disponivel,
    e.qtd_min, e.data_atualizacao, p.tipo_produto,
    p.sabor_produto, p.desc_produto, p.valor_produto
        FROM 
    tb_estoque e 
        JOIN 
    tb_produto p ON e.id_produto = p.id_produto
        WHERE
    e.id_estoque = ?;`;

    let info = await connection.execute(comando, [id]);
    return info[0];
}

//update

export async function atualizar(id, estoque){
    const comando = `UPDATE tb_estoque SET
        id_produto = ?, qtd_disponivel = ?, qtd_min = ?, data_atualizacao = ?
        WHERE id_estoque = ?`;
    
    let [info] = await connection.query(comando, 
        [estoque.id_produto, estoque.qtd_disponivel, estoque.qtd_min, estoque.data_atualizacao, id]);

    return info.affectedRows;
}

//delete
export async function deletar(id){
    const comando = `DELETE FROM tb_estoque
                    WHERE id_estoque = ?`;

    let [info] = await connection.query(comando, [id]);

    return info.affectedRows;
}