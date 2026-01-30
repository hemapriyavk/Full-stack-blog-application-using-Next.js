// import mongoose from "mongoose";

// export const ConnectDB = async () => {
//     await mongoose.connect('mongodb+srv://hemapriya2000mdu:Hemapriya%402000@blog.juzikut.mongodb.net/fullstack_blog_using_nextjs');
//     console.log("DB Connected");
// }

import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://hemapriya2000mdu:Hemapriya%402000@blog.juzikut.mongodb.net/fullstack_blog_using_nextjs');
    isConnected = true;
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error);
    throw error;
  }
};
