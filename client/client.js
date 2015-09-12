Meteor.subscribe('AdviceList');

Template.greeting.helpers({
    email: function() {
        return Meteor.user().emails[0].address.split('@')[0];
    },
    isVerifiedEmail: function() {
        return Meteor.user().emails[0].verified;
    }
});

Template.adviceListing.helpers({
    list: function () {
        return adviceList.find({}, { sort: { advice: 1 }});
    }
});

Template.adviceForm.events({
    'submit #advices-form': function(event, templateInstance) {
        event.preventDefault();

        var adviceName = templateInstance.find('.adviceName').value;
        var adviceDescription = templateInstance.find('.adviceDescription').value;
        var adviceWhen = templateInstance.find('.adviceWhen').value;

        Meteor.call('addAdvice', {
            advice: adviceName,
            description: adviceDescription,
            when: adviceWhen
        });
    }
});
