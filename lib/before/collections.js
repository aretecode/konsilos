Schemas = {};
Collections = {};

Schemas.Advice = new SimpleSchema({
    adviser: {
        type: String,
        autoValue: () => Meteor.userId(),
        autoform: {
            afFieldInput: {
                type: 'hidden'
            },
            omit: true
        }
    },
    advisee: {
        type: 'select',
        label: "Who's this advice for?",
        autoform: {
            search: true
        }
    },
    created_at: {
        type: Date,
        autoValue: function() {
            return this.value || new Date();
        },
        autoform: {
            omit: true
        }
    },
    advice: {
        type: String,
        label: "What's your advice?"
    },
    description: {
        type: String,
        label: 'Why does this advice matters?',
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'textarea'
            }
        }
    },
    when: {
        type: Date,
        optional: true,
        label: 'When is the best time for this advice?'
    }
});

Schemas.Profile = new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
        optional: true
    },
    family: {
        type: Array,
        // label: 'My Family',
        optional: true
    },
    'family.$': {
        type: Object,
        // label: 'Family Member'
    },
    'family.$.id': {
        type: String,
        autoValue: function () {
            return this.value || Random.id();
        },
        autoform: {
            afFieldInput: {
                type: 'hidden'
            },
            omit: true
        }
    },
    'family.$.name': {
        type: String,
        label: 'Name'
    },
    'family.$.gender': {
        type: String,
        label: 'Gender',
        allowedValues: ['male', 'female', 'other/nd'],
        autoform: {
            options: [
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
                { label: 'I prefer not to say', value: 'rather-not' },
            ],
        }
    },
    'family.$.birhdate': {
        type: Date,
        label: 'Date of Birth'
    },
    'family.$.relationship': {
        type: String,
        allowedValues: ['child', 'father', 'mother', 'sibling', 'other'],
        autoform: {
            options: [
                { label: 'Child', value: 'child' },
                { label: 'Father', value: 'father' },
                { label: 'Mother', value: 'mother' },
                { label: 'Sibling', value: 'sibling' },
                { label: 'Other', value: 'other' },
            ],
        }
    }
});

Collections.Advices = new Mongo.Collection('Advices');
Collections.Advices.attachSchema(Schemas.Advice);