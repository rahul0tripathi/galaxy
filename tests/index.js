let galaxy = require('../index')
let apiRouter = galaxy.Galaxy('api')

//Test handler
handler = (api)=>{
    return api
}
let test1Router = galaxy.Star('test1')
test1Router.append(galaxy.Moon('$id',handler,'POST'))
let starRouter = galaxy.Star('streams')
starRouter.append(galaxy.Moon('hello', handler ,'GET'))
apiRouter.append(starRouter,test1Router)
apiRouter.append(galaxy.Moon('hello/$id', handler,'GET'))
apiRouter.append(galaxy.Moon('hello/$kk/mnop', handler,'GET'))
apiRouter.append(galaxy.Moon('helloB', handler,'GET'))
console.log(apiRouter.resolve({httpMethod : 'GET',path :'/api/hello/l'}))
console.log(apiRouter.resolve({httpMethod : 'GET',path :'/api/helloB?abc=k'}))
console.log(apiRouter.resolve({httpMethod : 'GET',path :'/api/hello/abc/mnop?abc=k'}))
console.log(apiRouter.resolve({httpMethod : 'POST',path :'/api/test1/a'}))
console.log(apiRouter.resolve({httpMethod : 'GET',path : '/api/streams/kk' }))
//err
console.log(apiRouter.resolve({httpMethod : 'POST',path : '/api/not/found' }))