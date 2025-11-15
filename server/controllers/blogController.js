// server/controllers/blogController.js
import fs from 'fs';
import Blog from "../models/Blog.js";
import imagekit from '../configs/imageKit.js';
import Comment from '../models/Comment.js';

// ---------------- ADD BLOG ----------------
export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } =
            JSON.parse(req.body.blog);

        const imageFile = req.file;

        if (!title || !description || !category || !imageFile) {
            return res.json({
                success: false,
                message: "Missing required fields"
            });
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        });

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: "1280" }
            ]
        });

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image: optimizedImageUrl,
            isPublished
        });

        return res.json({
            success: true,
            message: "Blog added successfully"
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
};

// --------------- GET ALL BLOGS ---------------
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        return res.json({ success: true, blogs });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// --------------- GET BLOG BY ID ---------------
export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        return res.json({ success: true, blog });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// --------------- DELETE BLOG ---------------
export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        await Blog.findByIdAndDelete(id);
        
        await Comment.deleteMany({ blog: id });

        return res.json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// --------------- TOGGLE PUBLISH ---------------
export const togglePublish = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        blog.isPublished = !blog.isPublished;
        await blog.save();

        return res.json({ success: true, message: 'Blog status updated' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// --------------- ADD COMMENT ---------------
export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;

        await Comment.create({ blog, name, content });

        return res.json({ success: true, message: 'Comment added for review' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// --------------- GET COMMENTS FOR BLOG ---------------
export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.params;   // FIXED: use params

        const comments = await Comment.find({
            blog: blogId,
            isApproved: true
        }).sort({ createdAt: -1 });      // requires timestamps in schema

        return res.json({ success: true, comments });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
