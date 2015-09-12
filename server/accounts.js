Accounts.config({
    sendVerificationEmail: true
});

//TODO i18n
Accounts.emailTemplates.siteName = 'Future Advices';
Accounts.emailTemplates.from = 'Future Advices <contact@futureadvices.com>';
var welcomeMessage = function(user) {
    //TODO we currently have no user.profile
    var name = user.emails[0].address.split('@')[0];
    return 'Welcome to Future Advices, ' + name;
};
Accounts.emailTemplates.enrollAccount.subject = welcomeMessage;
Accounts.emailTemplates.verifyEmail.subject = welcomeMessage;
Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    var name = user.emails[0].address.split('@')[0];
    return 'Welcome to Future Advices, ' + name + '........... Click to verify you email: ' + url;
};

// function isAdmin(user) {
//     var adminEmails = ['lfilho@gmail.com'];
//     var adminUser = Meteor.users.findOne({ 'emails.address': adminEmails[0] });
//
//     return adminUser && adminUser._id === user._id;
// }
