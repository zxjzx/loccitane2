let email   = require("emailjs/email");

let server  = email.server.connect({
  user:    "445698839@qq.com",      // 你的QQ用户
  password:"gjmagzzxmifzcaee",      //注意，不是QQ密码，而是刚才生成的授权码,授权码在QQ邮箱'设置'>
  // '账户'>'POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务'>'开启服务'（按照指示即可）
  host:    "smtp.qq.com",         // 主机，不改
  ssl:     true                   // 使用ssl
});

server.send({
  text: '我是测试邮件内容2',       //邮件内容
  from: '445698839@qq.com',        //谁发送的
  to: '1358280824@qq.com',       //发送给谁的
  subject: '我是邮件主题2'          //邮件主题
}, function (err, message) {
  //回调函数
  console.log(err || message)
})
