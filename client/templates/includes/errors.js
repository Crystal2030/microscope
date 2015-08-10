/**
 * Created by crystal on 2015/8/10.
 */
Template.errors.helpers({
    errors: function(){
        return Errors.find();
    }
})