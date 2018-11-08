var mongoose = require("mongoose");
var Blog = require("../models/LocationBlog");

function getAllBlogs() {
    return Blog.find({}).exec();
}