/**
 * Created by crystal on 2015/8/4.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    update: function(userId, post){
        return ownsDocument(userId, post);
    },
    remove: function(userId, post){
        return ownsDocument(userId, post);
    }
});

Posts.deny({
    update: function(userId, post, fieldsNames){
        //only can update the following fields
        //这个数组应该是空的，它的长度应该是0。
        // 如果有人采取其他操作，这个数组的长度将变为1或更多，回调函数将返回 true （因此禁止更新）。
        return (_without(fieldsNames, 'url', 'title').length > 0);
    }
})

Meteor.methods({
    postInsert: function(postAttributes){
        check(Meteor.userId(), String);
        check(postAttributes,{
            title: String,
            url: String
        });

        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if(postWithSameLink){
            return {
                postExists: true,
                _id: postWithSameLink._id
            };
        }

        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        var postId = Posts.insert(post);

        return {
            _id: postId
        };
    }
})