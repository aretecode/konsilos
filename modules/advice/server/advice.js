Meteor.publish('Advices', function() {
    return Collections.Advices.find({ adviser: this.userId });
});

//TODO remove and do proper user logic later
function TEMP_ALLOW(userId) {
    // User is logged in:
    return userId;
}

//TODO Do the following in a smarter way, check slides from spotify/soundcloud crew on how\
//they hire / interview code examples
Collections.Advices.allow({
    insert: TEMP_ALLOW,
    update: TEMP_ALLOW,
    remove: TEMP_ALLOW
});
