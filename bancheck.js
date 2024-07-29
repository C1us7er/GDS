handlers.checkUserBan = function (args, context) {
    var playFabId = args.playFabId;
    var banData = server.GetUserBans({ PlayFabId: playFabId });
    return banData;
};
