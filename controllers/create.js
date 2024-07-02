import db from "../db.js";

export const create = (req,res)=>{
    const sql = "Insert into user(`name`,`email`,`contact`) VALUE (?,?,?)";

    const value = req.body;
    db.query(sql,[value.name,value.email,value.contact],(err,result)=>{
        if(err) return res.status(500).json(err);
        return  res.status(200).json({message:"data inserted successfully",result});
    })
};