/**
 * Created by crystal on 2015/8/4.
 */
Router.configure({
    layoutTemplate: 'Layout',
    loadingTemlate: 'loading',
    waitOn: function(){
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});