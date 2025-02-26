import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document{
    content:string;
    createdAt:Date;
}

const messageSchema = new Schema