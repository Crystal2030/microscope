/**
 * Created by crystal on 2015/8/10.
 * 为实现它，我们在 client 文件夹中创建错误
 * （确保这集合只在客户端存在），我们将它的 MongoDB
 * 集合命名为 null （因为集合的数据将不会保存在服务器端的数据库中）
 *
 * 一开始，我们应该建立一个可以储存错误的集合。介于错误只是对于当前的会话，
 * 我们将采用及时性集合。这就意味着错误集合只存在于当前的浏览器，该集合不会与服务端同步。
 */
Errors = new Mongo.Collection(null);

throwError = function(message){
    Errors.insert({message: message});
}