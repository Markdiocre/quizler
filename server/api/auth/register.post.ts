import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient()

const schema = z.object({
    email: z.string().email({
        message: "Please enter a valid email."
    }),
    password: z.string().min(8, {
        message: "Password must be atleast 8 characters long"
    }),
    confirm_password: z.string()

})

export default defineEventHandler(async (event) => {
    try {
        let { email, password, confirm_password }: IRegister = await readBody(event)

        if (password != confirm_password) return responseUtil(event, "Password and Confirm Password must be the same", null, 400)

        const validatedReg: IRegister = schema.parse({
            email: email,
            password: password,
            confirm_password: confirm_password
        })

        validatedReg.password = await bcrypt.hash(validatedReg.password, 10)

        let userCount = await prisma.user.count({
            where: {
                email: validatedReg.email
            }
        })

        if (userCount != 0) return responseUtil(event, "Account already existing", null, 409)
            
        const createUser = await prisma.user.create({
            data: {
                email: validatedReg.email,
                password: validatedReg.password
            }
        })

        if (createUser) return responseUtil(event, "Registered succesfully! Try logging in", null, 200)
        return responseUtil(event, "There was an error in creating your account", null, 500)
    } catch (err) {
        return returnResponseError(event, err)
    }
})