var express = require('express');
var router = express.Router();
let landing=require('../controllers/landing');
/* GET home page. */
router.get('/', landing.get_landing);
/* POST email and return to home page */
router.post('/',landing.submit_lead);
// About page route.
router.get('/about', landing.get_about);
module.exports = router;
