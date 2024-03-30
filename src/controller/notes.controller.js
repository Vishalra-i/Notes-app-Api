'use strict';
import Note from "../models/notes.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//Create new note
const createNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    // Retrieve user ID from the request cookies
    const userId = req.cookies.userId;

    // Check if user ID exists in cookies
    if (!userId) {
        throw new ApiError(401, 'User not authenticated');
    }

    // Create a new note associated with the user
    const newNote = await Note.create({ title, content, UserId: userId });

    //find notes created
    const createdNotes = await Note.findOne(
        {
            where:{
                id : newNote.id
            }
        }
    )

    if(!createNote){
        throw new ApiError(400,"Failed to create new notes")
    }
    

    res.status(201).json(new ApiResponse(201, newNote, "Note created successfully"));
});

//Get authenticated users all notes 
const getAllNotes = asyncHandler(async(req,res)=>{
    // Retrieve user ID from the request cookies
    const userId = req.cookies.userId;

    // Check if user ID exists in cookies
    if (!userId) {
        throw new ApiError(401, 'User not authenticated');
    }

    //Find All notes of user
    const allnotes = await Note.findAll(
        {
          where : {
            userId 
          }  
        }
    )

   
     
    return res.status(200)
    .json(
        new ApiResponse(200,allnotes,"Successfully fetched All user notes")
    )

})

//Get authenticated users  notes by id
const getNotesbyId = asyncHandler(async(req,res)=>{
    // Retrieve user ID from the request cookies
    const userId = req.cookies.userId;

    //Id from body
    const {id} = req.params ;

    //Check if id is empty
    if(id === ""){
        throw new ApiError(401 , "Please Select Id ")
    }

    // Check if user ID exists in cookies
    if (!userId) {
        throw new ApiError(401, 'User not authenticated');
    }

    //Find notes of user by id
    const notesbyId = await Note.findOne(
        {
          where : {
                  userId,
                    id
          }  
        }
    )

    if(!notesbyId){
        throw new ApiError(401,"No Notes with this Id")
    }

   
     
    res.status(200).json(new ApiResponse(200, notesbyId, "Note retrieved successfully"));


})

//Delete Note
const deleteNotesbyId =asyncHandler(async(req,res)=>{
   // Retrieve user ID from the request cookies
   const userId = req.cookies.userId;

   //Id from body
   const {id} = req.params ;

   //Check if id is empty
   if(id === ""){
       throw new ApiError(401 , "Please Select Id ")
   }

   // Check if user ID exists in cookies
   if (!userId) {
       throw new ApiError(401, 'User not authenticated');
   }

   const deletenote = await Note.findOne({ where: { id, UserId: userId } });
   
   // If note not found or not associated with the user, throw an error
   if (!deletenote) {
    throw new ApiError(404, 'Note not found');
   }

   //delete note
   await deletenote.destroy()
 
   return res.status(200)
   .json(new ApiResponse(200, null, "Note deleted successfully"));

})

//Update By Id
const updateNoteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    // Retrieve user ID from the request cookies
    const userId = req.cookies.userId;

    // Check if user ID exists in cookies
    if (!userId) {
        throw new ApiError(401, 'User not authenticated');
    }

    // Find the note by ID and user ID
    const note = await Note.findOne({ where: { id, UserId: userId } });

    // If note not found or not associated with the user, throw an error
    if (!note) {
        throw new ApiError(404, 'Note not found');
    }

    // Update the note with new title and content
    await note.update({ title, content });

    res.status(200).json(new ApiResponse(200, note, "Note updated successfully"));
});



export { createNote , getAllNotes , getNotesbyId , deleteNotesbyId ,updateNoteById};
