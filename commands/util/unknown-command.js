const { Command } = require('discord.js-commando');
const path = require('path');


module.exports = class UnknownCommandCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'unknown-command',
      group: 'util',
      memberName: 'unknown-command',
      description: 'Displays help information for when an unknown command is used.',
      examples: ['unknown-command kickeverybodyever'],
      unknown: true,
      hidden: true
    });
  }

  run(msg) {
    return msg.reply(
      `Uunknown command. Use ${msg.anyUsage(
                'help',
                msg.guild ? undefined : null,
                msg.guild ? undefined : null
            )} to view the command list.`
    );
  }
};