Meteor.startup(function () {
    Meteor.publish('AdviceList', function() {
        return adviceList.find();
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

