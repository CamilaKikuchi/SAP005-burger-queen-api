const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = process.env.PORT || 3003;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Burger Queen API!')
})

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`)
})

