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

    let [rows] = await connection.execute(comando);

    const resp = rows.map(row => ({
        id_estoque: row.id_estoque,
        qtd_disponivel: row.qtd_disponivel,
        qtd_min: row.qtd_min,
        data_atualizacao: row.data_atualizacao,
        produto: {
          id_produto: row.id_produto,
          tipo_produto: row.tipo_produto,
          sabor_produto: row.sabor_produto,
          desc_produto: row.desc_produto,
          valor_produto: row.valor_produto
        }
      }));
    return resp;
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

    let [rows] = await connection.execute(comando, [id]);

    const resp = rows.map(row => ({
        id_estoque: row.id_estoque,
        qtd_disponivel: row.qtd_disponivel,
        qtd_min: row.qtd_min,
        data_atualizacao: row.data_atualizacao,
        produto: {
          id_produto: row.id_produto,
          tipo_produto: row.tipo_produto,
          sabor_produto: row.sabor_produto,
          desc_produto: row.desc_produto,
          valor_produto: row.valor_produto
        }
      }));
    return resp;
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