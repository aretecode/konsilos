import './advice-list'
import './advice-form'
import './advice-home.html'

Meteor.startup(() => {
    Meteor.subscribe('Advices');
});
