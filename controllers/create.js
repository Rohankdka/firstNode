import db from "../db.js";

export const create = (req,res)=>{
    const sql = "Insert into useinfo(`username`,`email`,`password`,`confirmpassword`) VALUE (?,?,?,?)";

    const value = req.body;
    db.query(sql,[value.username,value.email,value.password,value.confirmpassword],(err,result)=>{
        if(err) return res.status(500).json(err);
        return  res.status(200).json({message:"data inserted successfully",result});
    })
};