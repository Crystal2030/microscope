/**
 * Created by crystal on 2015/8/4.
 */
Meteor.publish('posts', function(){
    return Posts.find();
})