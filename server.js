const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Physio = db.physio;

db.mongoose
  .connect('mongodb+srv://malaj1:Admin1@cluster0.n7ic1.mongodb.net/autoryzacja?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to physio application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/physio.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
  Physio.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Physio({
          name: "Mateusz"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'Marta' to physio collection");
        });

        new Physio({
          name: "Monika"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'Monika' to Physio collection");
        });

        new Physio({
          name: "Wojtek"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'Wojtek' to physio collection");
        });
      }
    });
}
