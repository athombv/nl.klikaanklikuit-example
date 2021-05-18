'use strict';

const { RFDriver } = require('homey-rfdriver');
const RFSignalKlikAanKlikUitNew = require('./RFSignalKlikAanKlikUitNew');

module.exports = class extends RFDriver {

  static SIGNAL = RFSignalKlikAanKlikUitNew;

};
