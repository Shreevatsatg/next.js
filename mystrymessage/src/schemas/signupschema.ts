import {z} from 'zod';

export const usernamevalidation = z.string().min(2,"Username must be atleast 2 characters long").max(20,"Username must be atmost 20 characters long").regex(/^[a-zA-Z0-9_]*$/,"Username must contain only alphabets, numbers and underscore")


export const signupschema = z.object({
    username:usernamevalidation,
    email:z.string().email({message:"Please enter a valid email"}),
    password:z.string().min(6,"Password must be atleast 6 characters long"),
})