module.exports = (interaction, commandObj) => {
  if (commandObj.devOnly) {
    if (interaction.member.id !== "768077016477335562") {
      interaction.reply("This command only available for the devleloper");
      return true;
    }
  }
};
