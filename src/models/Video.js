import mongoose from "mongoose";
    
const videoSchema = new mongoose.Schema({
    title: { type: String, require:true, trim: true, maxLength:80 },
    description: { type: String, require:true, trim: true, minLength:20 },
    createdAt: { type: Date, required: true, default: Date.now() },
    hashtags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, defalult: 0 , require: true },
        rating: { type: Number, defalult: 0 , require: true },
    },
});

videoSchema.static('formatHashtags', function(hashtags){
    return hashtags
    .split(",")
    .map((word)=> (word.startsWith("#") ? word : `#${word}`))
})


const Video = mongoose.model("Video", videoSchema);
export default Video;