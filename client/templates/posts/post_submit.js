/**
 * Created by crystal on 2015/8/6.
 */
Template.postSubmit.events({
    'submit form': function(e){
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name="url"]').val(),
            title: $(e.target).find('[name="name"]').val()
        };

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
})