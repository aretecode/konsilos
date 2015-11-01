Meteor.methods({
    updateProfile(profileData) {
        //TODO proper authorization checks (Iron Router?)
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Meteor.users.update(
            { _id: Meteor.user()._id },
            { $set: { 'profile.name': profileData.name } }
        );
    }
});
