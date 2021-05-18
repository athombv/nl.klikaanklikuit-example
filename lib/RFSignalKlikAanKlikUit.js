'use strict';

const { RFSignal } = require('homey-rfdriver');

module.exports = class extends RFSignal {

  static FREQUENCY = '433';

  static commandToDeviceData(command) {
    return {
      address: command.address,
      channel: command.channel,
      unit: command.unit,
    };
  }

};
