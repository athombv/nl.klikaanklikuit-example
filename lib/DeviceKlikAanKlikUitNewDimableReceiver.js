'use strict';

const DeviceKlikAanKlikUitNew = require('./DeviceKlikAanKlikUitNew');

module.exports = class extends DeviceKlikAanKlikUitNew {

  static CAPABILITIES = {
    onoff: ({ value, data }) => ({
      ...data,
      state: !!value,
      group: false,
    }),
    async dim({ value, data }) {
      // Turn off entirely when dim value is zero
      if (value === 0) {
        value = false;
        if (this.hasCapability('onoff')) {
          await this.setCapabilityValue('onoff', false);
        }
      } else if (this.hasCapability('onoff')) {
        await this.setCapabilityValue('onoff', true);
      }

      return {
        ...data,
        state: value,
        group: false,
      };
    },
  };

  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', true);
    }

    if (this.hasCapability('dim')) {
      await this.setCapabilityValue('dim', 1);
    }
  }

};
