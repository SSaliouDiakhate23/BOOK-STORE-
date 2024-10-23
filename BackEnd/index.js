import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./Models/bookModel.js";

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send("welcome to MERN STACK Tuto");
});

app.post("/book", async (req, res) => {
    try {
        // Vérification que tous les champs sont remplis
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Tous les champs doivent être remplis" });
        }

        // Création d'un nouvel objet livre
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        // Sauvegarde dans MongoDB
        const book = await Book.create(newBook);
        return res.status(200).send({ message: "Livre inséré avec succès !" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("\nConnexion à MongoDB réussie ✅\n");
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("Connexion échouée !!");
    });
