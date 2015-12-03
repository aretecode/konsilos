//TODO remove and do proper user logic later
function TEMP_ALLOW(userId) {
    return userId;
}

//TODO Do the following in a smarter way, check slides from spotify/soundcloud crew on how\
//they hire / interview code examples
Collections.Advices.allow({
    insert: TEMP_ALLOW,
    update: TEMP_ALLOW,
    remove: TEMP_ALLOW
});
