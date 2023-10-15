import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM tbl_user";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO tbl_user(`name`, `email`, `fone`, `dt_nascimento`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.dt_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE tbl_user SET `name` = ?, `email` = ?, `fone` = ?, `dt_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.dt_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM tbl_user WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
