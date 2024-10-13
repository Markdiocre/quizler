import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

const schema = z.object({
    username: z.string({
        required_error: "Username must be provided"
    }),
    password: z.string(
        {
            required_error: "Username must be provided"
        }
    )
})

export default defineEventHandler(async (event) => {
    try {
        const { username, password } : ILogin = await readBody(event)

        if(username == "" || password =="") return responseUtil(event,"Username and password cannot be empty.", null, 400)
        
        const validatedCreds = schema.parse({
            username: username,
            password: password
        })

        if(!validatedCreds) return responseUtil(event, "Error in Request", null, 500)
        

        const getUser = await prisma.user.findUnique({
            where: {
                username: validatedCreds.username
            }
        })

        if (!getUser) return responseUtil(event, "User does not exist. Have you registered?", null, 400)
        

        return responseUtil(event, "Yo shit", null,200)
    } catch (e) {
        return returnResponseError(event, e)
    }

})