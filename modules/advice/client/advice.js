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
    adviseeOptions: () => {
        const familyMembers = Meteor.user() && Meteor.user().profile.family || [];
        const familyMembersOptions = familyMembers.map(member => {
            return {
                label: `${member.name}`,
                value: member.id,
                icon: 'users icon',
                description: member.relationship.capitalizeFirstLetter()
            }
        });
        const otherOptions = [
            { label: 'My future child', value: 'future-child', icon: 'wait icon' },
            { label: 'A future someone', value: 'future-someone', icon: 'wait icon' },
            { label: 'Add a new family member...', value: 'add-new-family-member', icon: 'add user icon', description: '»' }
        ];

        const options = familyMembersOptions.concat([{
            itemGroup: 'Not here yet:',
            items: otherOptions
        }]);

        return options;
    },

    whenTypeOptions: () => {
        const selectedAdviseeLabel = Session.get('selectedAdviseeLabel') || '____';
        const options = [
            { value: 'specific-age', label: `When ${selectedAdviseeLabel} turns __ years old...`, description: '»' },
            { value: 'specific-date', label: 'At an specific date...', description: '»' },
            { value: 'important-moment', label: `Upon an important life's moment...`, description: '»' },
        ];

        return options;
    },

    importantMomentOptions: () => {
        const options = [
            { label: 'Graduation', value: 'graduation' },
            { label: 'First day of school', value: 'first-day-of-school' },
            { label: 'First girl/boyfriend', value: 'first-girl-boyfriend' },
            { label: 'First breakup', value: 'first-breakup' },
        ];

        return options;
    }
});

Template.AdviceForm.onRendered(function() {
    const addFamilyModal = this.$('.family-member')
        .modal('setting', 'transition', 'scale')
        .modal('attach events', '.positive.button', 'hide');

    this.$('.advisee').dropdown({
        onChange: (newValue, newText, $newEl) => {
            // TODO: make an unit test for ensuring the following value correctness:
            if (newValue === 'add-new-family-member') {
                addFamilyModal.modal('show');
            }
            Session.set('selectedAdviseeLabel', getTagOrphanTextOnly($newEl));
        }
    });
});
