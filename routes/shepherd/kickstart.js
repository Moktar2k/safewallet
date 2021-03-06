const fs = require('fs-extra');
const path = require('path');

module.exports = (shepherd) => {
  /*
   *  type: GET
   *  params: coin, type
   */
  shepherd.get('/kick', (req, res, next) => {
    if (shepherd.checkToken(req.query.token)) {
      const _coin = req.query.coin;
      const _keepWallet = req.query.keepwallet;

      if (!_coin) {
        const errorObj = {
          msg: 'error',
          result: 'no coin name provided',
        };

        res.end(JSON.stringify(errorObj));
      } else {
        const _location = path.join(_coin === 'SAFE' ? shepherd.safecoinDir : `${shepherd.safecoinDir}/${_coin}`);

        if (fs.existsSync(_location)) {
          const items = fs.readdirSync(_location);

          for (let i = 0; i < items.length; i++) {
            if (items[i].indexOf('wallet.dat') === -1) {
              fs.removeSync(`${_location}/${items[i]}`);
            } else if (!_keepWallet) {
              fs.removeSync(`${_location}/${items[i]}`);
            }
          }
        }

        const successObj = {
          msg: 'success',
          result: `${_coin} native is kicked`,
        };

        res.end(JSON.stringify(successObj));
      }
    } else {
      const errorObj = {
        msg: 'error',
        result: 'unauthorized access',
      };

      res.end(JSON.stringify(errorObj));
    }
  });

  return shepherd;
};