Advices = new Mongo.Collection('Advices');

Advices.attachSchema(new SimpleSchema({
    creator: {
        type: String,
        autoValue: () => Meteor.userId(),
        autoform: {
            afFieldInput: {
                type: 'hidden'
            }
        }
    },
    advice: {
        type: String,
        label: 'Title'
    },
    description: {
        type: String,
        label: 'Description',
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'textarea'
            }
        }
    },
    when: {
        type: Date,
        optional: true
    }
}));
