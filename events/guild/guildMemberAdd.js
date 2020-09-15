module.exports = async (client, member) => {
    const dbUser = await client.getUser(member)
    if (!dbUser) {
        client.createUser({
            guildID: member.guild.id,
            guildName: member.guild.name,
            userID: member.id,
            username: member.user.tag,
        });
    }
}