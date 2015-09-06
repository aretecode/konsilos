Meteor.startup(function () {
    Meteor.publish('AdviceList', function() {
        return adviceList.find();
    });
});
