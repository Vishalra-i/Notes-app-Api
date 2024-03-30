import { Router } from "express";
import { createNote, deleteNotesbyId, getAllNotes, getNotesbyId } from "../controller/notes.controller.js" ;

const router = Router()

router.route("/notes").post(createNote)

router.route('/notes').get(getAllNotes)

router.route('/notes/:id').get(getNotesbyId)

router.route('/notes/:id').delete(deleteNotesbyId)


export default router