Accounts.config({
    sendVerificationEmail: true
});

Meteor.methods({
    configureEmailTemplates: function configureEmailTemplates(lang) {
        const welcomeToUsMsg = `${TAPi18n.__('welcome-to', {}, lang)} Konsilos`;
        const clickToVerifyMsg = TAPi18n.__('click-to-verify', {}, lang);

        Accounts.emailTemplates.siteName = 'Konsilos';
        //TODO change to .com.br and etc
        Accounts.emailTemplates.from = 'Konsilos <contact@konsilos.com>';
        var welcomeMessage = user => {
            var name = getUsernameFromUserEmail(user);
            return `${welcomeToUsMsg}, ${name}`;
        };
        Accounts.emailTemplates.enrollAccount.subject = welcomeMessage;
        Accounts.emailTemplates.verifyEmail.subject = welcomeMessage;
        Accounts.emailTemplates.verifyEmail.text = (user, url) => {
            var name = getUsernameFromUserEmail(user);
            return  `${welcomeToUsMsg}, ${name}........... ${clickToVerifyMsg}: ${url}`;
        };
    }
});

// function isAdmin(user) {
//     var adminEmails = ['lfilho@gmail.com'];
//     var adminUser = Meteor.users.findOne({ 'emails.address': adminEmails[0] });
//
//     return adminUser && adminUser._id === user._id;
// }
