const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 
                            '@primary-color': '#7800EF',
                            '@border-radius-base': '2px', // major border radius,
                            '@font-family': 'SF Pro Display',
                            '@font-size-base': '16px', // major text font size
                            '@picker-border-color': '#EDEEEF',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};