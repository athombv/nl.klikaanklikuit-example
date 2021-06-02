# KlikAanKlikUit
This repository serves as inspiration for your own Homey app, to help you understand Homey Apps SDK concepts in a real-life context.

Read the [Homey Apps SDK Documentation](https://apps.developer.homey.app) for more information about developing apps for Homey.

> Because this repository is a clone of the live code, pull requests will be ignored.

## What does this app do?
The KlikAanKlikUit app uses [`homey-rfdriver`](https://athombv.github.io/node-homey-rfdriver/) to communicate with KlikAanKlikUit devices using the 433 MHz transceiver on Homey. Devices are added by sending a 433 MHz command to the receiving KlikAanKlikUit device or by listening to emitted 433 MHz messages.

Read more about 433 MHz and 868 MHz radio-signals on Homey at https://apps.developer.homey.app/wireless/rf-433mhz-868mhz.
