const express=require("express");
const cors=require("cors")

const app=express();

// .................Port..................
const port = process.env.PORT||4000

//.............. DB connection...............
require("./db/connection")

// ............Require Routes...............
const WorkoutRoutes =require("./routes/workoutRoutes")

// .................middleware................
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello")
})

// ...............Routes..............
app.use("/api/workouts", WorkoutRoutes)


app.listen(port,()=>{
    console.log(`Server is running at PORT: ${port}`);
})