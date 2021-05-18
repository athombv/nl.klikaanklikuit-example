'use strict';

const { RFError, RFUtil } = require('homey-rfdriver');
const RFSignalKlikAanKlikUitNew = require('./RFSignalKlikAanKlikUitNew');

/**
 * 433 Kaku signal description
 *
 * Example payload: 01110001110100101001100110 0     2        00      01   1111 (36 bits)
 *                  address (26 bit)           group dimflag  channel unit state (0x0 - 0xF)
 *
 */

module.exports = class extends RFSignalKlikAanKlikUitNew {

  static ID = 'kaku-new-dim';

  static commandToPayload({
    address,
    group,
    state,
    channel,
    unit,
  }) {
    // If state is a Boolean, don't use the Dim command
    if (typeof state === 'boolean') {
      return super.commandToPayload({
        address,
        group,
        state,
        channel,
        unit,
      });
    }

    if (typeof address !== 'string' || address.length !== 26) {
      throw new RFError(`Invalid Address: ${address}`);
    }

    if (typeof group !== 'boolean') {
      throw new RFError(`Invalid Group: ${group}`);
    }

    if (typeof state !== 'number' || state < 0 || state > 1) {
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
      2, // Indicate to use Dim at the end of the payload
      RFUtil.bitStringToBitArray(channel),
      RFUtil.bitStringToBitArray(unit),
      RFUtil.numberToBitArray(Math.ceil(state * 15), 4),
    );
  }

  static payloadToCommand(payload) {
    const dimflag = payload.slice(27, 28)[0];
    if (dimflag === 0 || dimflag === 1) {
      return super.payloadToCommand(payload);
    }

    const address = String(payload.slice(0, 26).join(''));
    const group = Boolean(payload.slice(26, 27)[0]);
    const channel = String(payload.slice(28, 30).join(''));
    const unit = String(payload.slice(30, 32).join(''));

    const state = RFUtil.bitArrayToNumber(payload.slice(32, 36)) / 15;
    if (Number.isNaN(state)) {
      throw new Error('Malformed Payload');
    }

    return {
      address,
      group,
      state,
      channel,
      unit,
    };
  }

};
