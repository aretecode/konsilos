//TODO remove and do proper user logic later
function TEMP_DISALLOW() { return false; }
function TEMP_ALLOW() { return true; }

//TODO Do the following in a smarter way, check slides from spotify/soundcloud crew on how\
//they hire / interview code examples
Collections.LaunchGathering.allow({
    insert: TEMP_ALLOW,
    update: TEMP_DISALLOW,
    remove: TEMP_DISALLOW
});
