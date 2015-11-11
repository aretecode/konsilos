Schemas = {};

Schemas.advice = new SimpleSchema({
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
        type: String,
        optional: true,
        label: "Who's this advice for?"

    },
    created_at: {
        type: Date,
        autoValue: () => new Date(),
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

Schemas.profile = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    }
});

Advices = new Mongo.Collection('Advices');
Advices.attachSchema(Schemas.advice);
