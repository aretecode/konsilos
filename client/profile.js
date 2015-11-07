Template.Profile.helpers({
    profileSchema: () => Schemas.profile,
    profile: () => Meteor.user().profile
});
