let galaxy = require('../index')
let apiRouter = galaxy.Galaxy('api')

//Test handler
handler = (api) => {
    return api
}
let test1Router = galaxy.Star('test1')
test1Router.append(galaxy.Moon('$id', handler, 'POST'))
let starRouter = galaxy.Star('streams')
starRouter.append(galaxy.Moon('hello', handler, 'GET'))
apiRouter.append(starRouter, test1Router)
apiRouter.append(galaxy.Moon('hello/$id', handler, 'GET'))
apiRouter.append(galaxy.Moon('hello/$kk/mnop', handler, 'GET'))
apiRouter.append(galaxy.Moon('helloB', handler, 'GET'))
console.log(apiRouter.resolve({
    httpMethod: 'GET',
    path: '/api/hello/l'
}))
console.log(apiRouter.resolve({
    httpMethod: 'GET',
    path: '/api/helloB?abc=k'
}))
console.log(apiRouter.resolve({
    httpMethod: 'GET',
    path: '/api/hello/abc/mnop?abc=k'
}))
console.log(apiRouter.resolve({
    httpMethod: 'POST',
    path: '/api/test1/a'
}))
console.log(apiRouter.resolve({
    httpMethod: 'GET',
    path: '/api/streams/kk'
}))
//err
console.log(apiRouter.resolve({
    "body": "",
    "resource": "/{proxy+}",
    "path": "/api/not/found",
    "httpMethod": "GET",
    "isBase64Encoded": true,
    "queryStringParameters": {
        "foo": "bar"
    },
    "multiValueQueryStringParameters": {
        "foo": [
            "bar"
        ]
    },
    "pathParameters": {
        "proxy": "/api/not/found"
    },
    "stageVariables": {
        "baz": "qux"
    },
    "headers": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, sdch",
        "Accept-Language": "en-US,en;q=0.8",
        "Cache-Control": "max-age=0",
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "US",
        "Host": "1234567890.execute-api.us-east-1.amazonaws.com",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Custom User Agent String",
        "Via": "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
        "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
        "Accept": [
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
        ],
        "Accept-Encoding": [
            "gzip, deflate, sdch"
        ],
        "Accept-Language": [
            "en-US,en;q=0.8"
        ],
        "Cache-Control": [
            "max-age=0"
        ],
        "CloudFront-Forwarded-Proto": [
            "https"
        ],
        "CloudFront-Is-Desktop-Viewer": [
            "true"
        ],
        "CloudFront-Is-Mobile-Viewer": [
            "false"
        ],
        "CloudFront-Is-SmartTV-Viewer": [
            "false"
        ],
        "CloudFront-Is-Tablet-Viewer": [
            "false"
        ],
        "CloudFront-Viewer-Country": [
            "US"
        ],
        "Host": [
            "0123456789.execute-api.us-east-1.amazonaws.com"
        ],
        "Upgrade-Insecure-Requests": [
            "1"
        ],
        "User-Agent": [
            "Custom User Agent String"
        ],
        "Via": [
            "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)"
        ],
        "X-Amz-Cf-Id": [
            "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA=="
        ],
        "X-Forwarded-For": [
            "127.0.0.1, 127.0.0.2"
        ],
        "X-Forwarded-Port": [
            "443"
        ],
        "X-Forwarded-Proto": [
            "https"
        ]
    }
}))
console.log(apiRouter.resolve('String'))