// aqui vai o código que acessa o banco de dados
const dataBase = require('../db/models');

const getAllUsers = (req, res) => {
  dataBase.Users.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: 'Error',
      }));
};

const getUserId = (req, res) => {
  dataBase.Users.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: 'Error',
      }));
};

const usersPost = (req, res) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;
  dataBase.Users.create({
    name,
    email,
    password,
    role,
    restaurant,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: 'Error',
      }));
};

const usersPut = (req, res) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;
  dataBase.Users.update(
    {
      name,
      email,
      password,
      role,
      restaurant,
    },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.status(200).json({
        message: 'Atualizados!!!',
      });
    })
    .catch(() => {
      res.json({
        message: 'Error',
      });
    });
};
const usersDelete = (req, res) => {
  dataBase.Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'Deletado!',
      });
    })
    .catch(() => {
      res.json({
        message: 'Error',
      });
    });
};

module.exports = {
  getAllUsers, getUserId, usersPost, usersPut, usersDelete,
};