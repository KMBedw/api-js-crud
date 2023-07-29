
const express = require("express"); // Importation de la bibliothèque 'express' pour créer un routeur
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost} = require("../controllers/post.controllers");
// const { deleteModel } = require("mongoose");
const router = express.Router(); // Création d'une nouvelle instance de routeur

router.get("/", getPosts);//Gestion de la requête HTTP GET sur l'endpoint "/"
router.post("/", setPosts);//Gestion de la requête HTTP POST sur l'endpoint "/"
router.put("/:id", editPost);//Gestion de la requête HTTP PUT sur l'endpoint "/:id"
router.delete("/:id", deletePost); //Gestion de la requête HTTP DELETE sur l'endpoint "/:id" 
router.patch("/like-post/:id", likePost);//Gestion de la requête HTTP PATCH sur l'endpoint "/like-post/:id"
router.patch('/dislike-post/:id', dislikePost);//Gestion de la requête HTTP PATCH sur l'endpoint "/dislike-post/:id"

// Exportation du routeur pour pouvoir l'utiliser dans d'autres parties de l'application
module.exports = router;
