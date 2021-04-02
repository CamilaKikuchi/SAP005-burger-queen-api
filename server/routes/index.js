const { Router } = require('express')
const UsersRouter = require('./users')
const ProductsRouter = require('./products')
const OrdersRouter = require('./orders')

const router = Router()

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter)
router.use('/orders', OrdersRouter)

module.exports = router
