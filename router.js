import express from "express";
import { home, create, store, edit, update, destroy } from "./controller/page";

const router = express.Router();

//get all
router.get("/", home);

//create
router.get("/create", create);
router.post("/create", store);

//get one by id
router.get("/edit/:id", edit);
router.post("/edit/:id", update);

//delete
router.get("/delete/:id", destroy);

export default router;
