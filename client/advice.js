Template.AdviceListing.helpers({
    list() {
        return adviceList.find({}, { sort: { advice: 1 }});
    }
});

Template.AdviceForm.events({
    'submit #advices-form': (event, templateInstance) => {
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
