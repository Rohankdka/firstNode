import db from "../db.js"

export const update = (req, res) => {
    const { id } = req.params;
    const { username, email, password, confirmpassword } = req.body;

    const sql = "UPDATE useinfo SET username = ?, email = ?, password = ?, confirmpassword = ? WHERE id = ?";
    const values = [username, email, password, confirmpassword, id];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send({ message: "User updated", result });
    });
};
