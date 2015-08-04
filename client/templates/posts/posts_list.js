/**
 * Created by crystal on 2015/8/3.
 */

Template.postsList.helpers({
    posts: function(){
        return Posts.find();
    }
})