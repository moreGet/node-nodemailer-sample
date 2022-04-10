const nodemailer = require('nodemailer')
const email = {
  'host': 'smtp.mailtrap.io',
  'port': 2525,
  // 'secure': false,
  'auth' : {
    'user': '6016ae00269371',
    'pass': '55a42afca8fbed'
  }
}

const send = async (payload) => {
  nodemailer.createTransport(email).sendMail(payload, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
      return info.response
    }
  })
}

let contents =  {
  from: 'dkdlwmzhs@naver.com',
  to: 'dkdlwmzhs@naver.com',
  subject: '테스트 메일 입니다.',
  text: 'nodemailer test'
}

send(contents)