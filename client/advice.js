Template.AdviceListing.helpers({
    list() {
        return Advices.find({}, { sort: { advice: 1 }});
    }
});

// Template.AdviceForm.events({
//     'submit #advices-form': (event, templateInstance) => {
//         event.preventDefault();
//
//         const adviceName = templateInstance.find('.adviceName').value;
//         const adviceDescription = templateInstance.find('.adviceDescription').value;
//         const adviceWhen = templateInstance.find('.adviceWhen').value;
//
//         Meteor.call('addAdvice', {
//             advice: adviceName,
//             description: adviceDescription,
//             when: adviceWhen
//         });
//     }
// });
