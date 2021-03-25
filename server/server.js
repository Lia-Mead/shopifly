const express = require("express");
const app = express();
const db = require("./db");
const compression = require("compression");
const path = require("path");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/homepage", async (req, res) => {
    try {
        const products = await db.showProducts();
        // console.log("products: ", products);
        res.json({ success: true, products: products.rows });
    } catch (err) {
        console.log("err in homepage: ", err);
    }
});

app.post("/sell-product/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const sold = await db.sellProduct(id);
        // console.log("products: ", sold.rows);
        res.json({ success: true, sold: sold.rows });
    } catch (err) {
        console.log("err in sell product: ", err);
    }
});

app.get("/item/:id", async (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);

    try {
        const item = await db.showItem(id);
        // console.log("item: ", item.rows);
        res.json({ success: true, item: item.rows });
    } catch (err) {
        console.log("err in item/:id: ", err);
    }
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
