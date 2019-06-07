var models = require('../../db/models');

const path = require('path');
const basename = path.basename(__filename);
var log4js = require('log4js');
var logger = log4js.getLogger(basename);

exports.findAll = async (req, res, next) => {
  await models.cm_mdmm.findAll ({
    where: {
      md_cdcstm: req.params.id
    }
  })
  .then(result => {
    if (result.length === 0) {
      res.status(404).json({msg: 'Not Found Data'});
      logger.info(`Searched: md_cdcstm:${req.params.id},msg: Not Found Data`);
    } else {
      res.status(200).json({cm_mdmms: result});
      logger.info(`Searched: md_cdcstm:${req.params.id}`);
    }
  })
  .catch(error => {
    res.status(500).json({msg: error.message});
    logger.error(`Searched: md_cdcstm:${req.params.id},message:${error.message}`);
  });
}

exports.destroy = (req, res, next) => {
  models.sequelize.transaction(async (t) => {
    const beforeData = await models.cm_mdmm.findAll ({
      where: {
        md_cdcstm: req.params.id,
        md_nommrb: req.params.no
      }
    })
    if (beforeData.length===0) {
      res.status(404).json({msg: 'Not Found Data'});
    } else {
      var headerip = req.headers ? getip(req) : 'unknown'
      headerip = headerip.length>15 ? headerip.match(/\d+\.\d+\.\d+\.\d/g)[0] : headerip
      await models.cm_mdmm.destroy({
        where: {
          md_cdcstm: req.params.id,
          md_nommrb: req.params.no
        }
      },{transaction: t}).then((result) => {
        res.status(204).json({msg: 'Deleted'});
      }).catch((error) => {
        res.status(500).json({msg: error.message});
      })
      logger.info(`Deleted: md_cdcstm:${req.params.id}、md_nommrb:${req.params.no}、ip:${headerip}`)
    }
  })


};

exports.create = (req, res, next) => {
  models.sequelize.transaction(async (t) => {
    const maxNo = await models.cm_mdmm.max('md_nommrb', {where : {'md_cdcstm': req.body.md_cdcstm }})
    var renban = !maxNo ? 1 : maxNo + 1
    data = req
    var headerip = req.headers ? getip(req) : 'unknown'
    headerip = headerip.length>15 ? headerip.match(/\d+\.\d+\.\d+\.\d/g)[0] : headerip
    // if (headerip.length>15) {
    //   headerip = headerip.match(/\d+\.\d+\.\d+\.\d/g)[0]
    // }
    data.body.md_nommrb = renban
    data.body.md_ccadip = headerip
    await models.cm_mdmm.create(data.body,{
    },{transaction: t}).then((result) => {
      res.status(201).json({msg: 'Created'});
    }).catch((error) => {
      res.status(500).json({msg: error.message});
    })
    logger.info(`create: md_cdcstm:${req.body.md_cdcstm}、md_nommrb:${renban}`);
  });
};

exports.update = (req, res, next) => {
  models.sequelize.transaction(async (t) => {
    const beforeData = await models.cm_mdmm.findAll ({
      where: {
        md_cdcstm: req.params.id,
        md_nommrb: req.params.no
      }
    })
    if (beforeData.length !== null) {
      data = req
      var headerip = req.headers ? getip(req) : 'unknown'
      headerip = headerip.length>15 ? headerip.match(/\d+\.\d+\.\d+\.\d/g)[0] : headerip
      data.body.md_idmdmm = beforeData.md_idmdmm
      data.body.md_cdcstm = req.params.id
      data.body.md_nommrb = req.params.no
      data.body.md_ccadip = headerip
      await models.cm_mdmm.update(data.body,{
        where: {
          md_cdcstm: req.params.id,
          md_nommrb: req.params.no
        }
      },{transaction: t}).then((result) => {
        res.status(204).json({msg: 'Updated'});
      }).catch((error) => {
        res.status(500).json({msg: error.message});
      })
      logger.info(`Updated: md_cdcstm:${req.params.id}、md_nommrb:${req.params.no}`)
    } else {
      res.status(404).json({msg: 'Not Found Data'});
    }
  })
};

// exports.upsert = async(req, res, next) => {
//     const transaction = await models.sequelize.transaction();
//     try {
//         await models.cm_mdmm.upsert(req.body, {
//         transaction
//         });
//       await transaction.commit();
//     } catch (ex) {
//           await transaction.rollback();
//       res.json({ success: 0});
//     }
//   };




// exports.create = async(req, res, next) => {
//     const transaction = await models.sequelize.transaction();
//     try {
//         await models.cm_mdmm.create(req.body, {
//         transaction
//         });
//       await transaction.commit();
//     } catch (ex) {
//           await transaction.rollback();
//       res.json({ success: 0});
//     }
//   };


//  exports.create = function(req, res, next) {
//   var properties = ["md_idmdmm", "md_cdcstm", "md_nommrb", "md_nmmmbr", "md_txmdmm", "md_fganch", "md_clmdmm", "md_ccadip", "md_ccmodu", "createdAt", "updatedAt"];
//   var new_values = {};
//   properties.forEach(function(prop) {
//     new_values[prop] = req.body[prop];
//   });
//   models.cm_mdmm.create(
//     new_values
//   ).then(new_cm_mdmm => {
//     res.redirect(302, '/cm_mdmms');
//   });
// };

//   models.cm_mdmm.findAll
//   ({
//     where: { md_cdcstm: req.params.id }
//    }).then(cm_mdmms => {
//      res.json({ cm_mdmms: cm_mdmms });
//      logger.info(req.params.id);
//    });
//  };


// exports.update = function(req, res, next) {
//   log.info('exports.update is executed');
//   models.cm_mdmm.findById(req.params.id).then(cm_mdmm => {
//     var properties = ["md_idmdmm", "md_cdcstm", "md_nommrb", "md_nmmmbr", "md_txmdmm", "md_fganch", "md_clmdmm", "md_ccadip", "md_ccmodu", "createdAt", "updatedAt"];
//     var update_values = {};
//     properties.forEach(function(prop){
//       update_values[prop] = req.body[prop];
//     });
//     cm_mdmm.update(update_values);
//     res.redirect(302, "/cm_mdmms/" + cm_mdmm.id);
//   });
// };

// exports.destroy = function(req, res, next) {
//   models.cm_mdmm.destroy
//   ({
//     where: { md_idmdmm: req.params.id }
//   }).then(cm_mdmm => {
//     res.redirect(302, "/cm_mdmms");
//   });
// };

function getip(req) {
  return req.headers['x-forwarded-for']
  ? req.headers['x-forwarded-for']
  : (req.connection && req.connection.remoteAddress)
  ? req.connection.remoteAddress
  : (req.connection.socket && req.connection.socket.remoteAddress)
  ? req.connection.socket.remoteAddress
  : (req.socket && req.socket.remoteAddress)
  ? req.socket.remoteAddress
  : '0.0.0.0';
}