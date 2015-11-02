// Meteor.methods({
//     addAdvice(adviceData) {
//         Advices.clean()
//         //TODO proper authorization checks (Iron Router?)
//         if (!Meteor.userId()) {
//             throw new Meteor.Error('not-authorized');
//         }
//         //TODO insert creator via hidden autoform field
//         adviceData.creator = Meteor.userId();
//         Advices.insert(adviceData);
//     }
// });

//TODO remove and do proper user logic later
function TEMP_ALLOW(userId) {
    return userId;
}

//TODO Do the following in a smarter way, check slides from spotify/soundcloud crew on how\
//they hire / interview code examples
Advices.allow({
    insert: TEMP_ALLOW,
    update: TEMP_ALLOW,
    remove: TEMP_ALLOW
});
