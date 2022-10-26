const router = require('express').Router();
const accountController = require('../controllers/accountContreller');

router.get('/signin', accountController.signinGet);
/* router2.post('/', accountController.signinPost); */

router.post('/signin',  function(req, res){
    accountController.signinPost
  });


  router.get('/signup', accountController.signupGet);
/*   router2.post('/admin/signup', accountController.signupPost); */
/*   router.post('/admin/signup',  function(req, res){
    accountController.signupPost
  });  */
module.exports = router;
