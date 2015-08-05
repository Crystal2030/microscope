/**
 * Created by crystal on 2015/8/4.
 */
Router.configure({
    layoutTemplate: 'Layout',
    loadingTemlate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function(){
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function(){
        return Posts.findOne(this.params._id);
    }
});

Router.onBeforeAction('dataNotFound', {only:'postPage'});