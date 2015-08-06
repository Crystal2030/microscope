/**
 * Created by crystal on 2015/8/6.
 * 如何告诉我们的账户系统要求用户需要通过用户名密码来登录？只需配置一个 Accounts.ui 模块到一个名叫 config.js 的文件里面，并把文件放在 client/helpers/ 中
 */
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
})