import './timeline'
import './advice-list.html'

Template.AdviceListing.helpers({
    list: () => Collections.Advices.find({}, { sort: { advice: 1 }}),
    fromNow: when => moment(when).fromNow()
});
