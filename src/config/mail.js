const email  = require("emailjs");
let server  = email.server.connect({
          user:    "445698839@qq.com",      // 你的QQ用户
          password:"gjmagzzxmifzcaee",           // 注意，不是QQ密码，而是刚才生成的授权码
          host:    "smtp.qq.com",         // 主机，不改
          ssl:     true                   // 使用ssl
        });

        let message = {
          text: '邮件内容',       //邮件内容
          from: '445698839@qq.com',        //谁发送的
          to: '1358280824@qq.com',       //发送给谁的
          subject: '邮件主题'          //邮件主题
        }

        server.send(message,function (error) {
          console.log(error);
        })
