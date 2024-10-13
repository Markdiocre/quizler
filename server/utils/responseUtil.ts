import {H3Event} from 'h3'

export default function(event: H3Event,message:string, data: any | null [], code:number){
    if (event){
        setResponseStatus(event, code)
        return {
            message: message,
            data: data,
            prepared_by: "Mark Thaddeus Manuel | Software Engineer"
        }
    }
}