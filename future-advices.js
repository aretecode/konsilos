var adviceList = new Mongo.Collection('adviceLists');

if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  Template.adviceListing.helpers({
    list: function () {
        return adviceList.find({}, { sort: { Advice: 1 }});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
