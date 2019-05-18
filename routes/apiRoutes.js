const nodemailer = require('nodemailer');
module.exports = function (app) {
    app.post('/send', (req, res) => {
        const output = `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Company: ${req.body.company}</li>
                <li>Email: ${req.body.email}</li>
                <li>Phone: ${req.body.phone}</li>               
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `;
        // async..await is not allowed in global scope, must use a wrapper
        async function main() {

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "email-smtp.us-east-1.amazonaws.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.SES_USR, // SES username
                    pass: process.env.SES_PWD // SES password
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: "Trent Davis <trentdavisinc@gmail.com>", // sender address
                to: "trentdavisinc@gmail.com", // list of receivers
                subject: "New message from nodemailer", // Subject line
                html: output // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }

        main().catch(console.error);
        res.render('contact-us', { msg: 'Email has been sent' })
    });

}

