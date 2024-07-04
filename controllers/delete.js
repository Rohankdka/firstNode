import db from "../db.js";

export const delete1 = (req, res)=>{
    const sql = "DELETE FROM user WHERE id = 2"

    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);

        
        return res.status(200).send({message: "deleted...", result})

    });
};