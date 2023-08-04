const express=require('express');
const router=express.Router();
const bookController=require("../Controller/bookController")


router.post("/addbook",bookController.addBook)
router.get("/allbooks",bookController.getBooks)
router.patch("/updatebook",bookController.updateBook)
router.post("/deletebook",bookController.deleteBook)


module.exports=router;