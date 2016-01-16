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
                description: __(member.relationship).capitalizeFirstLetter()
            }
        });
        const otherOptions = [
            { label: __('my-future-child'), value: 'future-child', icon: 'wait icon' },
            { label: __('a-future-someone'), value: 'future-someone', icon: 'wait icon' },
            { label: __('add-a-new-family-member'), value: 'add-new-family-member', icon: 'add user icon', description: '»' }
        ];

        const options = familyMembersOptions.concat([{
            itemGroup: __('not-here-yet'),
            items: otherOptions
        }]);

        return options;
    },

    whenTypeOptions: () => {
        const selectedAdviseeLabel = Session.get('selectedAdviseeLabel') || '____';
        const when =  __('when');
        const turns = __('turns-__-years-old');
        const specificAgeLabel =  `${when} ${selectedAdviseeLabel} ${turns}`;
        const options = [
            { value: 'specific-age', label: specificAgeLabel, description: '»' },
            { value: 'specific-date', label: __('at-an-specific-date'), description: '»' },
            { value: 'important-moment', label: __('upon-an-important-lifes-moment'), description: '»' },
        ];

        return options;
    },

    importantMomentOptions: () => {
        const options = [
            { label: __('graduation'), value: 'graduation' },
            { label: __('first-day-of-school'), value: 'first-day-of-school' },
            { label: __('first-girl/boyfriend'), value: 'first-girl-boyfriend' },
            { label: __('first-breakup'), value: 'first-breakup' },
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
