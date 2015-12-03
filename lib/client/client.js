Meteor.startup(() => {
    AutoForm.setDefaultTemplate('semanticUI');

    //TODO move this to Advices module
    Meteor.subscribe('Advices');
});

