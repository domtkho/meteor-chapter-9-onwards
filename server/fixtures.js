if (Posts.find().count === 0) {
  var now = new Date().getTime();

  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.user.findOne(tomId);

  var sachaId = Metoer.users.insert({
    profile: { name: 'Sacha Grief' }
  });
  var sacha = Meteor.findOne(sachaId);

  var telescopeId = Post.insert({
    title: "Introducing Telescope",
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId: telescopeId,
    userId: tomId._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "Interesting project Sacha, can I get involved?"
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: "Sure you can Tom!"
  });

  Posts.insert({
    title: "Meteor",
    userId: tom._id,
    author: tom.profile.name,
    url: "http://meteor.com",
    submitted: new Date(now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000)
  });
}