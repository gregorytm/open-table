import { NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import * as jose from "jose"

const prisma = new PrismaClient()


export async function POST(request: Request) {
  const {firstName, lastName,email, phone, city, password } = await request.json();
  const errors:string[] = []
  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "first name is invalid",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "last name is invalid",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "email is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "phone number is invalid",
    },
    {
      valid: validator.isLength(city, { min: 1 }),
      errorMessage: "city is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "password is not strong enough",
    },
  ];

  validationSchema.forEach(check => {
    if(!check.valid) {
      errors.push(check.errorMessage)
    }
  })

  if(errors.length){
    return NextResponse.json({errorMessage: errors[0]})  }

  const userWithEmail = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if(userWithEmail){
        return NextResponse.json({ errorMessage: "email already associated with another account" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data:{
      first_name:firstName,
      last_name:lastName,
      password: hashedPassword,
      city,
      phone,
      email
    }
  })

  const alg = "HS256";

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token= await new jose.SignJWT({email:user.email})
  .setProtectedHeader({alg})
  .setExpirationTime("24h")
  .sign(secret)

  return NextResponse.json( { toekn:token });
}
