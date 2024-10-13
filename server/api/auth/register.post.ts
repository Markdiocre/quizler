import { PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt";

export default defineCachedEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const prisma = new PrismaClient()

        body.password = await bcrypt.hash(body.password, 10)

        let user: IRegister = {
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            username: body.username,
            password: body.password
        }

        const createUser = await prisma.user.create({
            data: user
        })

        return responseUtil(event, "Registered succesfully!", null, 200)
    } catch (err) {
        return returnResponseError(event, err)
    }


})