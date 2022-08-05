const express = require("express");
const app = express();
const cors = require("cors");
const psqlPool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a user
app.post("/users", (req: any, res: any) => {
    const { name } = req.body;
    psqlPool.query(
        "INSERT INTO usuario (name) VALUES($1) RETURNING * ",
        [name]
    ).then((resolvedData: any) => {
        res.json(resolvedData.rows[0]);
        console.log("user created")
    }).catch((reason: any) => {
        console.log("Error " + reason)
    });
});

//create a connection
app.post("/connections/:id1/:id2", async (req: any, res: any) => {
    try {
        const { id1 } = req.params;
        const { id2 } = req.params;
        const newConnection = await psqlPool.query(
            "INSERT INTO connection (user1_id,user2_id) VALUES($1,$2) RETURNING * ",
            [id1, id2]
        );
        res.json(newConnection.rows);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Unexpected error", err);
        }
    }
});

// get all users
app.get("/users", async (req: any, res: any) => {
    try {
        const allUsers = await psqlPool.query(
            "SELECT * FROM usuario"
        );

        res.json(allUsers.rows);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Unexpected error", err);
        }
    }
});

// get all connections
app.get("/connections", async (_req: any, res: any) => {
    try {
        const getAllConnections = await psqlPool.query(
            "SELECT * FROM connection"
        );
        res.json(getAllConnections)
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Unexpected error", err);
        }
    }
})

// get table of all connections
app.get("/connections-table", async (_req: any, res: any) => {
    try {
        const getAllTableConnections = await psqlPool.query(
            `SELECT u1.usuario_id AS user1_id,u1.name AS user1_name,u2.name AS user2_name,u2.usuario_id AS user2_id 
           FROM usuario u1 FULL OUTER JOIN connection c ON u1.usuario_id = c.user1_id 
           Join usuario u2 ON u2.usuario_id = c.user2_id;`
        );
        res.json(getAllTableConnections)
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Unexpected error", err);
        }
    }
})



// get a user
app.get("/users/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const getUser = await psqlPool.query(
            "SELECT * FROM usuario WHERE usuario_id = $1",
            [id]
        );
        res.json(getUser.rows[0])
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Unexpected error", err);
        }
    }
})

// get a user connections
app.get("/connections-table/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const getConnections = await psqlPool.query(

            `SELECT u1.usuario_id AS user1_id,u1.name AS user1_name,u2.name AS user2_name,u2.usuario_id AS user2_id 
            FROM usuario u1 FULL OUTER JOIN connection c ON u1.usuario_id = c.user1_id 
            Join usuario u2 ON u2.usuario_id = c.user2_id
            WHERE user1_id = $1 OR user2_id = $1;`,
            [id]
        );
        res.json(getConnections.rows)
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Unexpected error", err);
        }
    }
})

app.listen(2000);