import db from "../db.js";

export const login = (req, res) => {
    const sql = "SELECT * FROM useinfo WHERE username = ? AND password = ?";

    const { username, password } = req.body;

    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).send(err);
        
        if (result.length === 0) {
            return res.status(401).send({ message: "User not found" });
        }

        const user = result[0];

        return res.status(200).send({ message: "Login successful", user });
    });
};
