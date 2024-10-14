interface IRequest{
    url : string,
    method: 'post' | 'get' | 'put' | 'patch' | 'delete'
    body: any
}