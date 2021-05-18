'use strict';

const DriverKlikAanKlikUitNew = require('./DriverKlikAanKlikUitNew');
const RFSignalKlikAanKlikUitNewDimable = require('./RFSignalKlikAanKlikUitNewDimable');

module.exports = class extends DriverKlikAanKlikUitNew {

  static SIGNAL = RFSignalKlikAanKlikUitNewDimable;

};
