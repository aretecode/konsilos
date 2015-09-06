var adviceList = new Mongo.Collection('adviceLists');

if (Meteor.isClient) {
    Meteor.subscribe('AdviceList');

    Template.adviceListing.helpers({
        list: function () {
            return adviceList.find({}, { sort: { Advice: 1 }});
        }
    });

    Template.adviceForm.events({
        'submit #advices-form': function(event, templateInstance) {
            event.preventDefault();

            var adviceName = templateInstance.find('.adviceName').value;
            var adviceDescription = templateInstance.find('.adviceDescription').value;
            var adviceWhen = templateInstance.find('.adviceWhen').value;

            adviceList.insert({
                Advice: adviceName,
                Description: adviceDescription,
                When: adviceWhen
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        Meteor.publish('AdviceList', function() {
            return adviceList.find();
        });
    });
}
