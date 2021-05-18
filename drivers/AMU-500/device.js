'use strict';

const DeviceKlikAanKlikUitNewReceiver = require('../../lib/DeviceKlikAanKlikUitNewReceiver');

module.exports = class extends DeviceKlikAanKlikUitNewReceiver {

  async onCapability(capabilityId, value) {
    // Set a timer to reset the capability value since the device hardware support this.
    if (capabilityId === 'onoff' && value === true) {
      const timerSetting = this.getSetting('timeout');
      if (timerSetting !== '0') {
        clearTimeout(this.deviceTimeout);
        this.deviceTimeout = setTimeout(() => {
          this.setCapabilityValue('onoff', false);
        }, Number(timerSetting) * 60 * 1000);
      }
    }
    return super.onCapability(capabilityId, value);
  }

};
