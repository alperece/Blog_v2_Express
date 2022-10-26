const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);

router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

router.get('/delete/:id', customerController.delete);

// !=============================================================

/* router.get('/admin/signin', customerController.signinGet); */
/* router2.post('/', accountController.signinPost); */

/* router.post('/admin/signin',  function(req, res){
    customerController.signinPost
  }); */

module.exports = router;
