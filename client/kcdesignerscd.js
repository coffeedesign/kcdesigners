Template.content.helpers({
  users: function(){
    return Meteor.users.find();
  },

});

Template.user.helpers({
  profileURL: function (url) {
    return url.replace("_normal", "");
  }
});