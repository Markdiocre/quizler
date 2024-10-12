export default function(message:string, data: any | null [],ok: boolean = false){
    return {
        ok: ok,
        message: message,
        data: data,
        prepared_by: "Mark Thaddeus Manuel | Software Engineer"
    }
}