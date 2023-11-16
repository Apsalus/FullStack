import Video from "../models/Video";

/*

Video.find({}, (error, videos) => {
    if(error){
        return res.render("server-error")
    }
    return res.render("home", { pageTitle: "Home", videos});
});

*/ 

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
    } catch {
        return res.render("server-error",);
    }
};
export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    console.log(video);
    return res.render("watch", {pageTitle: video.title, video });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    res.render("edit",{ pageTitle: `Edting` });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title} = req.body;
    return res.redirect(`/videos/${id}`)
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
};

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word)=> `#${word}`),
            meta:{
                views: 0,
                rating: 0,
            },
    });
    return res.redirect("/");
    } catch (error) {
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
    });
    }
};