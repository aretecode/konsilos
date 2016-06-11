import momentHelper from '../../imports/util/momentHelper'

// Translate function helper:
__ = key => TAPi18n.__.bind(TAPi18n, key);

Schemas = {};

//////////
// Advice:
//////////

Schemas.Advice = new SimpleSchema({
    adviser: {
        type: String,
        autoValue: () => Meteor.userId(),
        autoform: {
            afFieldInput: { type: 'hidden' },
            omit: true
        }
    },
    advisee: {
        type: String,
        label: __('whos-this-advice-for?'),
        autoform: { search: true }
    },
    created_at: {
        type: Date,
        autoValue: function() {
            return this.value || new Date();
        },
        autoform: { omit: true }
    },
    advice: {
        type: String,
        label: __('whats-your-advice?')
    },
    description: {
        type: String,
        label: __('why-does-this-advice-matters?'),
        optional: true,
        autoform: {
            afFieldInput: { type: 'textarea' }
        }
    },
    when: {
        type: Object,
        optional: true
    },
    'when.type': {
        label: __('when'),
        type: String,
        allowedValues: ['specific-age', 'specific-date', 'important-moment', 'my-own']
    },
    'when.value': {
        // Note: Dependending on when's type, it will assume diferent values, so the details are specified in their template/client files.
        type: String,
        label: __('when-is-the-best-time-for-this-advice?'),
        autoValue: function() {
            // If it's a date, let's store it in ISO format instead of the picker's format
            if (this.field('when.type').value === 'specific-date') {
                return moment(this.value, momentHelper.WHEN_DATE_FORMAT).format();
            }
        }
    }
});

Collections.Advices.attachSchema(Schemas.Advice);

///////////
// Profile:
///////////

Schemas.Profile = new SimpleSchema({
    name: {
        type: String,
        label: __('name'),
        optional: true
    },
    language: {
        type: String,
        label: __('language'),
        autoValue: function () {
            return this.value || getUserLanguage();
        },
        allowedValues: ['en', 'pt'],
        autoform: {
            options: [
                { label: __('english-usa'), value: 'en', icon: 'us flag' },
                { label: __('portuguese-brazil'), value: 'pt', icon: 'br flag' },
            ],
        }
    },
    family: {
        type: Array,
        label: __('my-family'),
        optional: true
    },
    'family.$': {
        type: Object,
        label: function() {
            //TODO try to find a way of labeling each family object:
            console.log('heeeeeeere', arguments);
        }
    },
    'family.$.id': {
        type: String,
        autoValue: function () {
            return this.value || Random.id();
        },
        autoform: {
            afFieldInput: { type: 'hidden' },
            omit: true
        }
    },
    //TODO to be used in the future:
    'family.$.token': {
        type: String,
        autoValue: () => function() {
            return this.value || Random.id()
        },
        autoform: {
            afFieldInput: { type: 'readonly' },
            omit: true
        }
    },
    'family.$.name': {
        type: String,
        label: __('name')
    },
    'family.$.gender': {
        type: String,
        label: __('gender'),
        allowedValues: ['male', 'female', 'other/nd'],
        autoform: {
            options: [
                { label: __('male'), value: 'male' },
                { label: __('female'), value: 'female' },
                { label: __('other'), value: 'other' },
                { label: __('i-prefer-not-to-say'), value: 'rather-not' },
            ],
        }
    },
    'family.$.birhdate': {
        type: Date,
        label: __('date-of-birth')
    },
    'family.$.relationship': {
        type: String,
        label: __('relationship'),
        allowedValues: ['child', 'father', 'mother', 'sibling', 'other'],
        autoform: {
            options: [
                { label: __('child'), value: 'child' },
                { label: __('father'), value: 'father' },
                { label: __('mother'), value: 'mother' },
                { label: __('sibling'), value: 'sibling' },
                { label: __('other'), value: 'other' },
            ],
        }
    }
});

