import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://hemapriya2000mdu:Hemapriya@2000@blog.juzikut.mongodb.net/fullstack_blog_using_nextjs');
    console.log("DB Connected");
}


