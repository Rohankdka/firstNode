import db from "../db.js";

export const read = (req,res)=>{
    const sql = "SELECT * from useinfo"

    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "Read....", result})
    });
};