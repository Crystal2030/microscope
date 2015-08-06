/**
 * Created by crystal on 2015/8/6.
 */
// check that the userId specified owns the documents
ownsDocument = function(userId, doc){
    return doc && doc.userId === userId;
}