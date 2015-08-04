/**
 * Created by crystal on 2015/8/3.
 */
var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers({
    posts: postsData
})