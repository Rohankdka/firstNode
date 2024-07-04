import db from "../db.js";

export const register = (req,res)=>{
    const sql = "Insert into useinfo(`username`,`email`,`password`,`confirmpassword`) VALUE (?,?,?,?)";

    const value = req.body

    if (value.password !== value.confirmpassword) {
        return res.status(401).send({ message: "password donot match" });
    }

    db.query(sql,[value.username,value.email,value.password,value.confirmpassword],(err,result)=>{
        if(err) return res.status(500).send(err)
            return res.status(200).send({message:"registered",result})
    })
}