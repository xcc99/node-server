var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer(function(req,res){
  var pathObj = url.parse(req.url,true)
  switch(pathObj.parsename){
    case '/getWeather' :
    var ret
    if(pathObj.query.city === 'beijing'){
      ret{
        city: 'beijing',
        weather: '阴天'
      }
    }else{
      ret{
        city: pathObj.query.city,
        weather: '未知'
      }
    }
    res.end(JOSON.strinfify(ret))
    break;
    case '/introduce':
    res.end(fs.readFlieSync(__dirname + '/README.md'))
  }
  break;
  default:
  res.end(fs.readFlieSync(__dirname + '/sample' + pathObj.pathname))
  
})
server.listen(8080)
