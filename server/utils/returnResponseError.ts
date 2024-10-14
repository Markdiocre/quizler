import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import { H3Event } from 'h3'

export default function (event: H3Event, err: any) {
    if (event && err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code == 'P2002') {
            setResponseStatus(event, 400)

            return {
                message: "Username and Email is already existing"
            }
        }
    }

    if (event && err instanceof ZodError) {
        let firstError = err.issues[0]

        if (firstError.code == 'too_small') {
            setResponseStatus(event, 400)
            return {
                message: firstError.message
            }
        } else {
            setResponseStatus(event, 500)
            return {
                message:
                    "Internal Server Error: Server encountered an error during the authentication.",
            }
        }
    }

    setResponseStatus(event, 500)
    return {
        message:
            "Internal Server Error: Server encountered an error during the authentication.",
    }
}