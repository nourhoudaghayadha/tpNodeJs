const express =require ('express');
const router = express.Router();
router.get('/all',(req,res)=>{
    res.send([{id:1,name:"object 1"},{id:2,name:"object2"} ])
})
router.get('/:id',(req,res)=>{
    res.send([{id:1,name:"object 1"}])
})
module.exports=router;