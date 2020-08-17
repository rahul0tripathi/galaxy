

## galaxy 💫

Galaxy is a tiny routing framework for Nodejs and AWS Lambda  λ;

## Installing Galaxy
     $ npm -i @rahul_tripathi/galaxy

## Using Galaxy 

 - Galaxy has three main  route handlers (Galaxy , Starts , Moon) and
   Moon is the route handler which has the corresponding function
 - The resolve function takes the event object as the parameter and
   passes that event object to the corresponding handler function along
   with params  if they are present
 - The params start with "$" and can be used any where
 

## - creating a route path in galaxy

```js
    let  galaxy  =  require('@rahul_tripathi/galaxy')
    let  apiRouter  =  galaxy.Galaxy('api') //initalize with /api endpoint
    handler = (x)=>{return x}
    let  testRouter  =  galaxy.Star('test1') // create an intermediate router 
    testRouter.append(galaxy.Moon('hello', handler ,'GET'))
    apiRouter.append(testRouter) 
    console.log(apiRouter.resolve({httpMethod :'GET',path:'/api/test1/hello'}))
 ```

## - accepting params in galaxy

 ```js
  let  galaxy  =  require('@rahul_tripathi/galaxy')
    let  apiRouter  =  galaxy.Galaxy('api') //initalize with /api endpoint
    handler = (x)=>{return x}
    apiRouter.append(galaxy.Moon('hello/$id/someother', handler,'GET')) //directly adding Moon to Galaxy is allowed 
    console.log(apiRouter.resolve({httpMethod  :  'GET',path  :'/api/hello/abc/mnop?abc=k'}))
    //This Outputs 
{
  httpMethod: 'GET',
  path: '/api/hello/abc/someother?abc=k',
  params: { id: 'abc' }
}
```
  


 
