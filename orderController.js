const Order = require("../models/orderModel");

exports.checkout = (req, res) => {
  const { orders } = req.body;

  if (!orders || orders.length === 0) {
    return res.status(400).json({ message: "Keranjang kosong" });
  }

  Order.createOrder(orders, (err) => {
    if (err) return res.status(500).json({ message: "Gagal menyimpan pesanan" });
    res.json({ message: "Pesanan berhasil disimpan!" });
  });
};
