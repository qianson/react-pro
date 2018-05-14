import 'whatwg-fetch';
const fetchRequest = (url,method,params,headers) => {
    let head = {
        'Content-Type': 'application/json',
        ...headers
    }
   return fetch(url,{
        method: method,
        body: params,
        headers: head
    }).then((res) => res.data)
}
// export const test = (params) => {
//     return fetch('http://glzxedu.gtafe.com:58000/api/PackageGroup/GetPackageGroupList',{
//         method: 'post',
//         body: params,
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.data)
// }
export const test = (params)=>{
    return fetchRequest('http://glzxedu.gtafe.com:58000/api/PackageGroup/GetPackageGroupList','post',params).then((res) => res)
}