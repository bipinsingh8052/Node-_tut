const express =require("express")
const app =express();
const stuRouter=require("./StuRoutes")
const EmplyRout =require('./routes/Employe_route')
const ProRout =require('./routes/ProductRout')
app.use("/student",stuRouter);

app.use('/emplloyee',EmplyRout);
app.use("/Products",ProRout)
app.listen(8100,
    ()=>{console.log("server run")})