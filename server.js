let express=require("express");
let cors=require("cors");
let bodyParser=require("body-parser");
let app=express();

app.use(cors());
app.use(bodyParser.json());

app.use("/getData",(req,res,next)=>{
    console.log("/getData request : ");
    res.send({
        result : [
            {
                id : 1,
                name : "a121",
                email : "atulpisal.ap@gmail.com"
            },
            {
                id : 2,
                name : "a1n1",
                email : "nutgai.np@gmail.com"
            }
        ]
    });
});

app.listen(3000,()=>{
    console.log("server listen on 3000...");
});