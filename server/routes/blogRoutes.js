// server/routes/blogRoutes.js

import express from "express";
import {
    addBlog,
    addComment,
    deleteBlogById,
    getAllBlogs,
    getBlogById,
    getBlogComments,
    togglePublish
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// Add new blog
blogRouter.post("/add", upload.single("image"), auth, addBlog);

// Get all published blogs
blogRouter.get("/all", getAllBlogs);

// Get a single blog by ID
blogRouter.get("/:blogId", getBlogById);

// Delete blog
blogRouter.post("/delete", auth, deleteBlogById);

// Toggle publish/unpublish
blogRouter.post("/toggle-publish", auth, togglePublish);

blogRouter.post("/add-comment", addComment);

blogRouter.post("/comments", getBlogComments);



export default blogRouter;
