Meteor.startup(function () {
    Meteor.publish('AdviceList', function() {
        return adviceList.find({ creator: this.userId });
    });
});

Accounts.validateNewUser(function (user) {
    //TODO validate email
    return true;
});

function isAdmin(user) {
    var adminEmails = ['lfilho@gmail.com'];
    var adminUser = Meteor.users.findOne({ 'emails.address': adminEmails[0] });

    return adminUser && adminUser._id === user._id;
}

//TODO remove and do proper user logic later
function TEMP_ALLOW(userId) {
    return userId;
}

//TODO Do the following in a smarter way, check slides from spotify/soundcloud crew on how\
//they hire / interview code examples
adviceList.allow({
    insert: TEMP_ALLOW,
    update: TEMP_ALLOW,
    remove: TEMP_ALLOW
});
