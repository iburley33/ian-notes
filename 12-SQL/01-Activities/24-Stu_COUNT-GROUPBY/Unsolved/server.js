const express = require('express'); //linking express
const mysql = require('mysql2'); //linking mysql 2

const PORT = process.env.PORT || 3001; // port number 
const app = express(); // storing express to be called later

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'M0destMouse!',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);


db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
}); //

app.use((req, res) => {
  res.status(404).end();
});no

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
