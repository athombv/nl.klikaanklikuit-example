'use strict';

const { RFUtil, RFError } = require('homey-rfdriver');
const RFSignalKlikAanKlikUit = require('./RFSignalKlikAanKlikUit');

/**
 * 433 Kaku signal description
 *
 * Example payload: 01110001110100101001100110 0     1     00      01 (32 bits)
 *                  address (26 bit)           group state channel unit
 *
 */

module.exports = class extends RFSignalKlikAanKlikUit {

  static ID = 'kaku-new';

  static commandToPayload({
    address,
    group,
    state,
    channel,
    unit,
  }) {
    if (typeof address !== 'string' || address.length !== 26) {
      throw new RFError(`Invalid Address: ${address}`);
    }

    if (typeof group !== 'boolean') {
      throw new RFError(`Invalid Group: ${group}`);
    }

    if (typeof state !== 'boolean') {
      throw new RFError(`Invalid State: ${state}`);
    }

    if (typeof channel !== 'string' || channel.length !== 2) {
      throw new RFError(`Invalid Channel: ${channel}`);
    }

    if (typeof unit !== 'string' || unit.length !== 2) {
      throw new RFError(`Invalid Unit: ${unit}`);
    }

    return [].concat(
      RFUtil.bitStringToBitArray(address),
      group ? 1 : 0,
      state ? 1 : 0,
      RFUtil.bitStringToBitArray(channel),
      RFUtil.bitStringToBitArray(unit),
    );
  }

  static payloadToCommand(payload) {
    console.log('Payload:', payload.join(''));
    const address = String(payload.slice(0, 26).join(''));
    const group = Boolean(payload.slice(26, 27)[0]);
    const state = Boolean(payload.slice(27, 28)[0]);
    const channel = String(payload.slice(28, 30).join(''));
    const unit = String(payload.slice(30, 32).join(''));

    return {
      address,
      group,
      state,
      channel,
      unit,
    };
  }

  static createPairCommand() {
    return {
      address: RFUtil.generateRandomBitString(26),
      group: false,
      state: true,
      channel: RFUtil.generateRandomBitString(2),
      unit: RFUtil.generateRandomBitString(2),
    };
  }

};
