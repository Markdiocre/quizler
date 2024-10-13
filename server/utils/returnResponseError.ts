import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import {H3Event} from 'h3'

export default function (event : H3Event, err: any) {
    if (event && err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code == 'P2002') {
            setResponseStatus(event, 400)

            return {
                message: "Username and Email is already existing"
            }
        }
    }

    if (event && err instanceof ZodError) {
        setResponseStatus(event, 400)
        return {
            message: err.errors
        }
    }
}