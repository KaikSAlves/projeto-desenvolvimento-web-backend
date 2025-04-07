import connection from "./connection.js";

//create

export async function inserir(usuario){
  const comando = `INSERT INTO tb_usuario 
    (nm_usuario, email_usuario, tel_usuario, senha_usuario)
	  values (?, ?, ?, ?)`;

  
  let [info] = await connection.query(comando,
    [usuario.nm_usuario, usuario.email_usuario, usuario.tel_usuario, usuario.senha_usuario]);

  return info.insertId;
}

//read

export async function listar(){
  const comando = `SELECT * FROM tb_usuario`;

  let resp = await connection.query(comando);

  return resp[0];
}

export async function buscarPorId(id){
  const comando = `SELECT * FROM tb_usuario
                  WHERE id_usuario = ?`;

  let resp = await connection.query(comando, [id]);

  return resp[0];
}

//update

export async function atualizar(id, usuario){
  const comando = `UPDATE tb_usuario SET
                  nm_usuario = ?, email_usuario = ?
                  , tel_usuario = ?, senha_usuario = ?
                  WHERE id_usuario = ?`;

  let [info] = await connection.query(comando, 
    [usuario.nm_usuario, usuario.email_usuario, usuario.tel_usuario, usuario.senha_usuario, id])
  
  return info.affectedRows;
}

//delete

export async function deletar(id){
  const comando = `DELETE FROM tb_usuario
                  WHERE id_usuario = ?`;

  let [info] = await connection.query(comando, [id]);
  
  return info.affectedRows;
}