/**
 * Created by crystal on 2015/8/4.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        //only allow login user
        return !!userId;
    }
})