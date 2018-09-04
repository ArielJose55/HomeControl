'use-strict'
const process = require('process');

const init = doClose => async () => {
  try {
    await doClose();
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
};

module.exports = { init };