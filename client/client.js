Meteor.startup(() => {
    AutoForm.setDefaultTemplate('semanticUI');

    Meteor.subscribe('Advices');
});

