Meteor.startup(function () {
    Meteor.publish('Advices', function() {
        return Advices.find({ adviser: this.userId });
    });

    process.env.MAIL_URL = 'smtp://postmaster%40mg.futureadvices.com:1231u1z456130n4rd0789@smtp.mailgun.org:587';
});

