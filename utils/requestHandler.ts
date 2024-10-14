export default async function(req:IRequest){
    const response = await $fetch(req.url,{
        method: req.method,
        body: req.body,
    })

    return response
}