var express = require('express');
var router = express.Router();

require('dotenv').config();

router.all('/tgtest', function(req, res, next) {
  
  console.log('-------- Get --------');
  console.log(req.query);

  console.log('-------- Post --------');
  console.log(req.body);

  const request = req.body;
  // request = {
  //   update_id: 295590028,
  //   message: {
  //     message_id: 150,
  //     from: {
  //       id: 2137765932,
  //       is_bot: false,
  //       first_name: 'Kami',
  //       last_name: 'Green',
  //       username: 'kami8319',
  //       language_code: 'zh-hans'
  //     },
  //     chat: {
  //       id: 2137765932,
  //       first_name: 'Kami',
  //       last_name: 'Green',
  //       username: 'kami8319',
  //       type: 'private'
  //     },
  //     date: 1709446367,
  //     text: '/start',
  //     entities: [ [Object] ]
  //   }
  // }

  // 获取 chat id 
  const chat_id = request.message?request.message.chat.id:2137765932;
  const chat_text = request.message?request.message.text:'';

  // // npm install axios
  // const axios = require('axios');
  // // 我们需要首先设置我们的bot token
  // const token
  // = process.env.CONST_TG_TOKEN;
  // // 然后我们需要设置我们的API URL
  // const url = `https://api.telegram.org/bot${token}/sendMessage`;
  // console.log('Debug:', url);
  // // 然后我们需要设置我们的消息
  // const text = 'Hello World';
  // // 然后我们需要发送我们的消息
  // axios.post(url, {
  //   chat_id: chat_id,
  //   text: text
  // })
  // .then(response => {
  //   console.log('Message posted');
  //   res.end('ok');
  // })

  res.send({
    sendMessage: {
      chat_id: chat_id,
      text: `Yes no need token, ${chat_text}`
    }
  });
});

// router.all('/', function(req, res, next) {
  
//   console.log('-------- Get --------');
//   console.log(req.query);

//   console.log('-------- Post --------');
//   console.log(req.body);

//   const request = req.body;
//   // 获取 chat id 
//   const chat_id = request.message?request.message.chat.id:2137765932;
//   // npm install axios
//   const axios = require('axios');
//   // 我们需要首先设置我们的bot token
//   const token
//   = process.env.CONST_TG_TOKEN;
//   // 然后我们需要设置我们的API URL
//   const url = `https://api.telegram.org/bot/sendMessage`;
//   console.log('Debug:', url);
//   // 然后我们需要设置我们的消息
//   const text = 'Hello World 22';
//   // 然后我们需要发送我们的消息
//   axios.post(url, {
//     chat_id: chat_id,
//     text: text
//   })
//   .then(response => {
//     console.log('Message posted');
//     res.end('ok');
//   })

//   res.send('Tg test page');
// });



module.exports = router;
