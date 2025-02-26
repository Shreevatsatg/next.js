import mongoose,{Schema,Document} from "mongoose";

export interface message extends Document{
    content:string;
    createdAt:Date;
}

const messageSchema:Schema<message> = new Schema({
 content: {
    type:String,
    required:true
 },
 createdAt:{
    type:Date,
    required:true,
    default:Date.now
 }
})


export interface user extends Document{
    username:string;
    email:string;
    password:string;
    verifycode:string;
    verifycodeExpiry:Date;
    isverified:boolean;
    isacceptingmessage:boolean;
    messages:message[];
}

const userschema:Schema<user> = new Schema({
    username: {
       type:String,
       required:[true,"Username is required"],
       trim:true,
       unique:true
    },
    email: {
        type:String,
       required:[true,"Email is required"],
       unique:true,
       match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
     },
    verifycode:{
        type:String,
        required:[true,"verify code is required"],
     },
    verifycodeExpiry:{
        type:Date,
        required:[true,"expiry date is required"],
        
     },
     isverified:{
        type:Boolean,
        default:false,
     },
     isacceptingmessage:{
        type:Boolean,
        default:true,
     },
    messages:[messageSchema]
   })

   const usermodel =(mongoose.models.user as mongoose.Model<user>) || mongoose.model<user>("user",userschema)

   export default usermodel;