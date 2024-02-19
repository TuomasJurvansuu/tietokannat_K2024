var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

router.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

router.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

router.get('/example2/:firstName&:lastName',
    function(request, response){
       response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

router.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = router;
module.exports = router;
