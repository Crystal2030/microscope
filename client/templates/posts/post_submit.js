/**
 * Created by crystal on 2015/8/6.
 */
Template.postSubmit.events({
    'submit form': function(e){
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name="url"]').val(),
            title: $(e.target).find('[name="title"]').val()
        };

        Meteor.call('postInsert', post, function(error, result){
            //display error msg
            if(error){
                return alert(error.reason);
            }

            Router.go('postPage', {_id: result._id});
        })
    }
})