const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a user
app.post("/users", async (req,res) => 
{
    try{
       const {name} = req.body;
       const newUser = await pool.query(
        "INSERT INTO usuario (name) VALUES($1) RETURNING * ",
        [name]
       );
       res.json(newUser.rows[0]);
       console.log("user created")
    }catch (err){
        console.error(err.message);
    }
});

//create a connection
app.post("/connections/:id1/:id2", async (req,res) => 
{
    try{
       const {id1} = req.params;
       const {id2} = req.params;
       const newConnection = await pool.query(
        "INSERT INTO connection (user1_id,user2_id) VALUES($1,$2) RETURNING * ",
        [id1,id2]
       );
       res.json(newConnection.rows);
    }catch (err){
        console.error(err.message);
    }
});

// get all users
app.get("/users", async (req,res) => 
{
    try{
       const allUsers = await pool.query(
        "SELECT * FROM usuario"
       );

       res.json(allUsers.rows);
    }catch (err){
        console.error(err.message);
    }
});

// get all connections
app.get("/connections", async (req,res) =>
{
    try {
        const getAllConnections = await pool.query(
            "SELECT * FROM connection"
        );
        res.json(getAllConnections)
    } catch (err) {
        console.log(err.message);
    }
})


// get a user
app.get("/users/:id", async (req,res) =>
{
    try {
        const {id} = req.params;
        const getUser = await pool.query(
            "SELECT * FROM usuario WHERE usuario_id = $1",
            [id]
        );
        res.json(getUser.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

// get a user connections
app.get("/connections/:id", async (req,res) =>
{
    try {
        const {id} = req.params;
        const getConnections = await pool.query(
            "SELECT * FROM connection WHERE user1_id = $1 OR user2_id = $1",
            [id]
        );
        res.json(getConnections.rows)
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(3000);