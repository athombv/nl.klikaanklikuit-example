'use strict';

const { RFDriver } = require('homey-rfdriver');
const RFSignalKlikAanKlikUitOld = require('./RFSignalKlikAanKlikUitOld');

module.exports = class extends RFDriver {

  static SIGNAL = RFSignalKlikAanKlikUitOld;

};
