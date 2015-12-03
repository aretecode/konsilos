Meteor.startup(() => {
    Meteor.subscribe('Advices');
});

////////////////////
// Template helpers:
////////////////////

Template.AdviceListing.helpers({
    list: () => Collections.Advices.find({}, { sort: { advice: 1 }}),
    fromNow: when => moment(when).fromNow()
});

Template.AdviceForm.helpers({
    adviseeList: () => {
        const familyMembers = Meteor.user().profile.family || [];
        const familyMembersOptions = familyMembers.map(member => {
            return {
                label: `${member.name} (${member.relationship})`,
                value: member.id,
                icon: 'users icon'
            }
        });
        const otherOptions = [
            { label: 'My future child', value: 'future-child', icon: 'wait icon' },
            { label: 'A future someone', value: 'future-someone', icon: 'wait icon' },
            { label: 'Add a new family member...', value: 'add-new-family-member', icon: 'add user icon' }
        ];

        const finalOptions = familyMembersOptions.concat([{
            itemGroup: 'Not here yet:',
            items: otherOptions
        }]);

        return finalOptions;
    }
});
