var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer(function(req,res){
  var pathObj = url.parse(req.url,true)
  switch(pathObj.pathname){
    case '/getWeather' :
    var ret
    if(pathObj.query.city === 'beijing'){
      ret = {
        city: 'beijing',
        weather: '阴天'
      }
    }else{
      ret = {
        city: pathObj.query.city,
        weather: '未知'
      }
    }
    res.end(JSON.stringify(ret))
    break;
    case '/introduce':
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end(fs.readFileSync(__dirname + '/README.md'))
    break;
    default: 
    res.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
  }
    

})
server.listen(9000)
