'use strict';

const { RFError, RFUtil } = require('homey-rfdriver');
const RFSignalKlikAanKlikUit = require('./RFSignalKlikAanKlikUit');

/**
 * 433 Kaku signal description
 *
 * Example payload: 011110011101 (12 bits)
 *
 * 011110    01    11       01
 * address   unit  channel  state
 *
 */

module.exports = class extends RFSignalKlikAanKlikUit {

  static ID = 'kaku-old';

  static commandToPayload({
    address,
    state,
    channel,
    unit,
  }) {
    if (typeof address !== 'string' || address.length !== 6) {
      throw new RFError(`Invalid Address: ${address}`);
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
      RFUtil.bitStringToBitArray(state ? '01' : '00'),
      RFUtil.bitStringToBitArray(channel),
      RFUtil.bitStringToBitArray(unit),
    );
  }

  static payloadToCommand(payload) {
    const address = String(payload.slice(0, 6).join(''));
    const unit = String(payload.slice(6, 8).join(''));
    const channel = String(payload.slice(8, 10).join(''));
    const state = Boolean(payload.slice(10, 12).join(''));

    return {
      address,
      state,
      channel,
      unit,
    };
  }

  static createPairCommand() {
    return {
      address: RFUtil.generateRandomBitString(6),
      state: true,
      channel: RFUtil.generateRandomBitString(2),
      unit: RFUtil.generateRandomBitString(2),
    };
  }

};
