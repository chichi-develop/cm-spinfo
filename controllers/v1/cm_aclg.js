var models = require('../../db/models');

const path = require('path');
const basename = path.basename(__filename);
var log4js = require('log4js');
var logger = log4js.getLogger(basename);

exports.search = async (req, res, next) => {
  const cm_aclgs = await models.cm_aclg.findAll ({ where: { al_cdsqsk: req.params.id } });
  res.json({ cm_aclgs: cm_aclgs });
  logger.info(`search:${req.params.id}`);
}

/**
 * show all cm_aclg list
 */
// exports.index = function(req, res, next) {
//   models.cm_aclg.all().then(cm_aclgs => {
//     res.json({ cm_aclgs: cm_aclgs });
//   });
// };

/**
 * show cm_aclg details
 */
// exports.show = function(req, res, next) {
//   models.cm_aclg.findById(req.params.id).then(cm_aclg => {
//     res.json({ cm_aclg: cm_aclg });
//   });
// };

/**
 * create cm_aclg
 */
// exports.create = function(req, res, next) {
//   var properties = ["id","kodokukubun","keiyakunennsu","ky_sukiyk","ky_ymkiyk","ky_cdsqsk","sq_kokyakukb","sq_name1","sq_name2","sq_kana1","sq_kana2","sq_company","sq_cmpkana","ct_nmtnbu","ct_noyubn","ct_adcst1","ct_adcst2","ct_adcst3","sq_ct_tel1","sq_ct_tel2","sq_ct_tel3","ct_dtsngp1","ct_dtsngp2","ct_dtsngp3","ct_cdsyok","ct_admail","ky_cdshsk","sh_kokyakukb","sh_name1","sh_name2","sh_kana1","sh_kana2","sh_company","sh_cmpkana","sh_ct_nmtnbu","sh_ct_noyubn","sh_ct_adcst1","sh_ct_adcst2","sh_ct_adcst3","sh_ct_notel","sh_ct_notel2","sh_ct_notel3","note","nyuryokusha","tool","douki","shain","shosai"];
//   var new_values = {};
//   properties.forEach(function(prop) {
//     new_values[prop] = req.body[prop];
//   });
//   models.cm_aclg.create(
//     new_values
//   ).then(new_cm_aclg => {
//     res.redirect(302, '/cm_aclgs');
//   });
// };

/**
 * update cm_aclg
 */
// exports.update = function(req, res, next) {
//   console.log('exports.update is executed');
//   models.cm_aclg.findById(req.params.id).then(cm_aclg => {
//     var properties = ["id","kodokukubun","keiyakunennsu","ky_sukiyk","ky_ymkiyk","ky_cdsqsk","sq_kokyakukb","sq_name1","sq_name2","sq_kana1","sq_kana2","sq_company","sq_cmpkana","ct_nmtnbu","ct_noyubn","ct_adcst1","ct_adcst2","ct_adcst3","sq_ct_tel1","sq_ct_tel2","sq_ct_tel3","ct_dtsngp1","ct_dtsngp2","ct_dtsngp3","ct_cdsyok","ct_admail","ky_cdshsk","sh_kokyakukb","sh_name1","sh_name2","sh_kana1","sh_kana2","sh_company","sh_cmpkana","sh_ct_nmtnbu","sh_ct_noyubn","sh_ct_adcst1","sh_ct_adcst2","sh_ct_adcst3","sh_ct_notel","sh_ct_notel2","sh_ct_notel3","note","nyuryokusha","tool","douki","shain","shosai"];
//     var update_values = {};
//     properties.forEach(function(prop){
//       update_values[prop] = req.body[prop];
//     });
//     cm_aclg.update(update_values);
//     res.redirect(302, "/cm_aclgs/" + cm_aclg.id);
//   });
// };

/**
 * destroy cm_aclg
 */
// exports.destroy = function(req, res, next) {
//   models.cm_aclg.destroy
//   ({
//     where: { AL_IDACTV: req.params.id }
//   }).then(cm_aclg => {
//     res.redirect(302, "/cm_aclgs");
//   });
// };

/**
 * search cm_aclg
 */
// exports.search = function(req, res, next) {
//   models.cm_aclg.findAll
//   ({
//     where: { al_cdsqsk: req.params.id }
//    }).then(cm_aclgs => {
//      res.json({ cm_aclgs: cm_aclgs });
//      logger.debug(req.params.id);
//    });
//  };
//   }).then(function(books){
//     console.log(books);
//     res.redirect(302, "/cm_aclgs");
//   });
// };

// exports.index = function(req, res, next) {
//   models.cm_aclg.all().then(cm_aclgs => {
//     res.json({ cm_aclgs: cm_aclgs });
//   });
// };


//   cm_aclg => {
//     res.redirect(302, "/cm_aclgs");
//   });
// };

