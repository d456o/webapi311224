module.exports={
    GetAll:(req,res)=>{     //עבור כל המוצריםEND POINT-נקודת קצה
        return res.status(200).json({msg:"all products"});
    },
    GetById:(req,res)=>{
        let prodid=req.params.id;//קבלת הפרמטר שנשלח לנקודת הקצה
        return res.status(200).json({msg: `product Id${prodid}`});
    },
    AddNew:(req,res)=>{
        console.log(req.body);
        return res.status(200).json({msg:"add new product"});
    },
    updateById:(req,res)=>{
        let prodid=req.params.id;//קבלת הפרמטר שנשלח לנקודת הקצה
        return res.status(200).json({msg:`Update Product Id ${prodid}`});
    },
   deleteById:(req,res)=>{
    let prodid=req.params.id;//קבלת הפרמטר שנשלח לנקודת הקצה
    return res.status(200).json({msg:`delete product Id ${prodid}`});
},
}
