import isEmailValid from "~/utils/isEmailValid"
import responseUtil from "~/utils/responseUtil"

interface ILogin{
    email: string
    password: string
}

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)

    const {email, password} : ILogin = body

    if(!isEmailValid(email)){
        throw createError({
            statusCode: 400,
            statusMessage:"Bad Request",
            message:"Tanga mag login amputcha"
        })
    }

    setResponseStatus(event, 200)
    return responseUtil("Yo shit", null)
})