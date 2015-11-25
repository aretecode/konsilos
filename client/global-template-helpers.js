Template.registerHelper('Schemas', Schemas);

Template.registerHelper('firstName', () => {
    return Meteor.user() && Meteor.user().profile.name.split(' ')[0];
});

Template.registerHelper('isVerifiedEmail', () => {
    return Meteor.user() && Meteor.user().emails[0].verified;
});

Template.registerHelper('profile', () => Meteor.user() && Meteor.user().profile);
