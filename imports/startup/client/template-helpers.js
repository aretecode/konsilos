import { Meteor } from 'meteor/meteor'

///////////////////////////
// Global template helpers:
///////////////////////////

Template.registerHelper('Schemas', Schemas)
Template.registerHelper('Collections', Collections)

Template.registerHelper('firstName', () => {
    return Meteor.user() && Meteor.user().profile.name.split(' ')[0]
})

Template.registerHelper('isVerifiedEmail', () => {
    return Meteor.user() && Meteor.user().emails[0].verified
})

Template.registerHelper('profile', () => Meteor.user() && Meteor.user().profile)

Template.registerHelper('currentYear', () => new Date().getFullYear())

Template.registerHelper('isMvpNotReadyYet', () => Meteor.isDevelopment)
