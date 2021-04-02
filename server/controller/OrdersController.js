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
    userId, clientName, table, status, 
  } = req.body;

  dataBase.Order.create({
    userId,
    clientName,
    table,
    status,
    
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
    userId, clientName, table, status,
  } = req.body;
  dataBase.Order.update({
    userId,
    clientName,
    table,
    status,
    
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