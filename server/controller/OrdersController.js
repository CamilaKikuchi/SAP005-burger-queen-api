const dataBase = require('../db/models');

const getAllOrders = (req, res) => {
  
  dataBase.Order.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const orderPost = (req, res) => {

  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;

  dataBase.Order.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao salvar',
    }));
};

const getOrderId = (req, res) => {
  dataBase.Order.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.json({
      message: 'erro na requisição',
    }));
};

const orderPut = (req, res) => {
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;
  dataBase.Order.update({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'ordem atualizada',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao atualizar',
      });
    });
};

const orderDelete = (req, res) => {
  dataBase.Order.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'ordem excluída!!!',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao excluir',
      });
    });
};



module.exports = { getAllOrders, getOrderId , orderPost, orderPut, orderDelete}