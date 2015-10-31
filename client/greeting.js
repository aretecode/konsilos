Template.greeting.helpers({
    email() {
        return Meteor.user().emails[0].address.split('@')[0];
    },
    isVerifiedEmail() {
        return Meteor.user().emails[0].verified;
    }
});
