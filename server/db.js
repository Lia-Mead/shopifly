const spicedPg = require("spiced-pg");

let db;
if (process.env.DATABASE_URL) {
    // means we are in production on heroku
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const { dbUsername, dbPassword } = require("../secrets");
    db = spicedPg(
        `postgres:${dbUsername}:${dbPassword}@localhost:5432/shopifly`
    );
}

module.exports.showProducts = () => {
    const q = `SELECT * FROM items ORDER BY id DESC`;
    return db.query(q);
};

module.exports.showItem = (id) => {
    const q = `SELECT * FROM items WHERE id = $1`;
    const params = [id];

    return db.query(q, params);
};

module.exports.sellProduct = (id) => {
    const q = `UPDATE items 
    SET availability = false
    WHERE id = $1 RETURNING *`;
    const params = [id];
    return db.query(q, params);
};
