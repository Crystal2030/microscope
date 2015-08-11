/**
 * Created by crystal on 2015/8/6.
 */
Template.postSubmit.onCreated(function(){
    Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
    errorMessage: function(field){
        return Session.get('postSubmitErrors')[field];
    },
    errorClass: function(field){
        return !!Session.get('postSubmitErrors')[field]?'has-error':'';
    }
});

Template.postSubmit.events({
    'submit form': function(e){
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name="url"]').val(),
            title: $(e.target).find('[name="title"]').val()
        };

        var errors = validatePost(post);
        if(errors.title || errors.url){
            return Session.set('postSubmitErrors', errors);
        }

        Meteor.call('postInsert', post, function(error, result){
            //display error msg
            if(error){
                Errors.throw(error.reason);
            }

            //display results, redirec the page
            if(result.postExists){
                throwError("This link has already been posted.")
            }

            Router.go('postPage', {_id: result._id});
        })
    }
})