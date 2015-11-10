Template.AdviceListing.helpers({
    list: () => Advices.find({}, { sort: { advice: 1 }}),
    fromNow: when => moment(when).fromNow()
});
