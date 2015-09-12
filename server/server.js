Meteor.startup(function () {
    Meteor.publish('AdviceList', function() {
        return adviceList.find({ creator: this.userId });
    });
    process.env.MAIL_URL = 'smtp://postmaster%40mg.futureadvices.com:1231u1z456130n4rd0789@smtp.mailgun.org:587';
});

Meteor.methods({
    addAdvice: function(adviceData) {
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
