var express = require('express');
var router = express.Router();
var controllers = require('../../controllers/v1');

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

router.get('/cm_aclgs/:id(\\d+)', controllers.cm_aclg_controller.search);


router.get('/cm_mdmms/:id(\\d+)', controllers.cm_mdmm_controller.findAll);
router.post('/cm_mdmms', controllers.cm_mdmm_controller.create);
router.put('/cm_mdmms/:id(\\d+)/:no(\\d+)', controllers.cm_mdmm_controller.update);
router.delete('/cm_mdmms/:id(\\d+)/:no(\\d+)', controllers.cm_mdmm_controller.destroy);
// router.get('/cm_mdmms/del/:id(\\d+)', controllers.cm_mdmm_controller.delete)


module.exports = router;
