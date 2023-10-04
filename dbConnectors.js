import mongoose, { mongo } from "mongoose";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets');