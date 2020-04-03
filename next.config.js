/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const path = require('path');

module.exports = {
    webpack: (cfg) => {
        const originalEntry = cfg.entry;
        cfg.entry = async () => {
            const entries = await originalEntry();
            const polyfills = path.join(__dirname, 'polyfills.js');
            if (entries['main.js'] && !entries['main.js'].includes(polyfills)) {
                entries['main.js'].unshift(polyfills);
            }

            return entries;
        };

        return cfg;
    },
};
