const nodemailer = require('nodemailer')
// let mailTransporter = nodemailer.createTransport({

//     // service: "gmail",
//     // auth: {
//     //     user: "",
//     //     pass: ""
//     // }
// })
let smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: '',
        pass: ''
    }
};
let transporter = nodemailer.createTransport(smtpConfig);
let maildetails = {
    from: "",
    to: "",
    subject: "Sending A Email with node.js",
    html: '<h1>Welcome</h1><p>WOW!That was not easy!</p>'

}
transporter.sendMail(maildetails, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent', info.messageId);
    }
})