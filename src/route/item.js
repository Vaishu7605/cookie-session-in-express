const { Router } = require("express")
const router = Router();

products =[
    {"id":1,"name":"shirts","price":2000},
    {"id":2,"name":"shoes","price":3500},
    {"id":3,"name":"pants","price":2055}
]


router.get('./',(req,res)=>{
    res.cookie("cookiename","this is some cookie from the server",{maxAge:5000,signed:true});
    res.send(products);
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    product = products.find(p=> p.id == id)
    res.send(product);
})

router.post('/',(req,res)=>{
    console.log(req.body)
    products.push(req.body);
    res.sendStatus(201);
    res.send(products);
})

module.exports =  router;