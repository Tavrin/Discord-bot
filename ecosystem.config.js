module.exports = {
  apps : [{
    name: 'bot-discord-tavrin',
    script: './bot.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
