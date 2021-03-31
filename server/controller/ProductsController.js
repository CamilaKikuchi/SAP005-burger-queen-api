const dataBase = require("../db/models");

const getAllProducts = (req, res) => {
  dataBase.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
      connection.end();
    })
    .catch(() =>
      res.json({
        message: "Error",
      }));
};

const getProductId = (req, res) => {
  dataBase.Products.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Error",
      }));
};

const ProductPost = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  dataBase.Products.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: "Error",
      }));
};

const ProductPut = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  dataBase.Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
    },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.status(200).json({
        message: "Atualizados!!!",
      });
    })
    .catch(() => {
      res.json({
        message: "Error",
      });
    });
};

const productsDelete = (req, res) => {
  dataBase.Products.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'Deletado!',
      });
    })
    .catch(() => res.status(400).json({
      message: 'Error',
    }));
};
module.exports = {
  getAllProducts, getProductId, ProductPost, ProductPut, productsDelete,
};