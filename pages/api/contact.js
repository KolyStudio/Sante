export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "pieerretorres@gmail.com",
      pass: "aqeuhagabqpuyjnd",
    },
    secure: true,
  });

  const mailData = {
    from: "pieerretorres@gmail.com",
    to: "support@kolysupport.reamaze.com",
    subject: `Mookea Support: ${req.body.name} - ${req.body.orderid}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div style="background:red">${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
}
