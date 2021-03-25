const express = require("express");
const app = express();
const port = 3000;
const routerUsers = require("./server/routes/users");
const routerProducts = require("./server/routes/products");
const routerOrders = require("./server/routes/orders");

app.use("/users", routerUsers);
app.use("/products", routerProducts);
app.use("/orders", routerOrders);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})