import connection from "./connection.js";

//create

export async function inserir(feedback){
    const comando = `INSERT INTO tb_feedback 
        (data_feedback, nvl_avaliacao_feedback, descricao_feedback)
        VALUES (?,?,?)`;

    let [info] = await connection.query(comando,
        [feedback.data_feedback, feedback.nvl_avaliacao_feedback, feedback.descricao_feedback]);
    
    return info.insertId;
}

//read

export async function listar(){
    const comando = `SELECT * FROM tb_feedback`;

    let info = await connection.query(comando);
    return info[0];
}

export async function buscarPorId(id){
    const comando = `SELECT * FROM tb_feedback
                    WHERE id_feedback = ?`;

    let info = await connection.query(comando, [id]);

    return info[0];
}

export async function pegarQuantidadeFeedbacks(){
    const comando = `SELECT count(*) AS quantidadeFeedback FROM tb_feedback`;
    let [info] = await connection.query(comando);

    return info[0].quantidadeFeedback;
}

//update

export async function atualizar(id, feedback){
    const comando = `UPDATE tb_feedback SET
    data_feedback = ?, nvl_avaliacao_feedback = ? , descricao_feedback = ?
    WHERE id_feedback = ?`;

    let [info] = await connection.query(comando,
        [feedback.data_feedback, feedback.nvl_avaliacao_feedback, feedback.descricao_feedback, id]);

    return info.affectedRows;
}


//delete

export async function deletar(id){
    const comando = `DELETE FROM tb_feedback
                    WHERE id_feedback = ?`;

    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
