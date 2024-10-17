import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const schema = z.object({
    email: z.string({
        required_error: "Email must be provided"
    }).email(),
    password: z.string(
        {
            required_error: "Passowrd must be provided"
        }
    )
})

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig(event)
        const { email, password }: ILogin = await readBody(event)

        if (email == "" || password == "") return responseUtil(event, "Username and password cannot be empty.", null, 400)

        const validatedCreds: ILogin = schema.parse({
            email: email,
            password: password
        })

        if (!validatedCreds) return responseUtil(event, "Error in Request", null, 500)


        const getUser = await prisma.user.findUnique({
            where: {
                email: validatedCreds.email
            }
        })

        if (!getUser) return responseUtil(event, "User does not exist. Have you registered?", null, 400)

        const isPasswordMatch = await bcrypt.compare(validatedCreds.password, getUser.password)

        if (!isPasswordMatch) return responseUtil(event, "Username or password may be wrong", null, 400)

        setCookie(event, 'auth', jwt.sign({
            id: getUser.id,
            is_superuser: getUser.is_superuser
        }, config.API_SECRET, {
            expiresIn: '1 day'
        }), {
            httpOnly: true,
            maxAge: 86400
        })

        return responseUtil(event, "Successfully logged in!", null, 200)
    } catch (e) {
        return returnResponseError(event, e)
    }

})