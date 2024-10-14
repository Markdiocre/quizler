interface IRequest{
    url : string,
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
    body: any
}