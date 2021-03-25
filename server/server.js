const express = require("express");
const app = express();
const db = require("./db");
const compression = require("compression");
const path = require("path");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/homepage", async (req, res) => {
    const products = await db.showProducts();
    console.log("products: ", products);
    res.json({ success: true, products: products.rows });
});

app.post("/sell-product/:id", async (req, res) => {
    const { id } = req.params;
    const sold = await db.sellProduct(id);
    console.log("products: ", sold.rows);
    res.json({ success: true, sold: sold.rows });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
