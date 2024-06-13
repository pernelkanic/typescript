import express , {Request , Response , NextFunction} from "express";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use("/", (req : Request , res : Response) =>{
  res.status(200).json({message : "hello"});

})

app.listen(port, ()=>{
  console.log(` the server started at ${port}` );
})
