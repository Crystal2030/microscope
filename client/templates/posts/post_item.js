/**
 * Created by crystal on 2015/8/3.
 * 首先，我们创建一个空的锚（a）HTML 标签并储存在内存中。

 然后我们将其 href 属性设置为当前 post 的 URL （正如我们刚刚讲到的，this 在 helper 中正是当前被操作的对象）。

 最后，我们利用 a 标签的特别的 hostname 属性来返回 URL 的域名。
 */
Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});