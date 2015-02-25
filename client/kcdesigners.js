Designers = new Mongo.Collection("designers");

if (Meteor.isClient) {

  Template.designer.helpers({
    designers: function () {
      return Designers.find({});
    }
  });

  Template.form.events({
    "submit .signup": function (event) {

      var full_name = event.target.full_name.value;
      var email = event.target.email.value;
      var bio = event.target.bio.value;
      var website = event.target.website.value;
      var freelance = event.target.freelance.value;

      Designers.insert({
        full_name:  full_name,
        email:      email,
        bio:        bio,
        website:    website,
        freelance:  freelance,
        createdAt:  new Date()
      });
      event.target.value = "";
    }
  });
}