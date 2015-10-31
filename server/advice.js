Meteor.methods({
    addAdvice(adviceData) {
        //TODO proper authorization checks (Iron Router?)
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        adviceData.creator = Meteor.userId();
        adviceList.insert(adviceData);
    }
});

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
