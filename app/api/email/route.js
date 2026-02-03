import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");

const loadDB = async () => {
    await ConnectDB();
};

loadDB();

export async function GET(request) {
    const emailList = await EmailModel.find({});
    return NextResponse.json({ emailList });
}

export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`
    }
    const isExist = await EmailModel.findOne(emailData);
    if (isExist) {
        return NextResponse.json({ success: true, msg: "Email already subscribed" });
    }
    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscription added" });
}