const db = require("../config/db");

const Order = {
  createOrder: (orders, callback) => {
    const sql = "INSERT INTO orders (name, price, quantity) VALUES ?";
    const values = orders.map((item) => [item.name, item.price, item.quantity]);
    db.query(sql, [values], callback);
  }
};

module.exports = Order;
