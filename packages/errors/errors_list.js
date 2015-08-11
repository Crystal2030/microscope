/**
 * Created by crystal on 2015/8/11.
 */
Template.meteorErrors.helpers({
    errors: function() {
        return Errors.collection.find();
    }
});

Template.meteorError.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.collection.remove(error._id);
    }, 3000);
};