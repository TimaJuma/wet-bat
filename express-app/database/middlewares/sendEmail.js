require("dotenv").config({ path: "../.env" });

// const nodemailer = require("nodemailer");
// const smtpTransport = require("nodemailer-smtp-transport");
// const { google } = require("googleapis");

const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

let transporter = nodemailer.createTransport({
  service: "Yahoo",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

let MailGenerator = new Mailgen({
  theme: "salted",
  product: {
    name: "PKFANTARES",
    link: "http://localhost:7000",
  },
});

const signup = (req, res) => {
  const { email, name } = req.body;

  // sign up the user .....
  console.log("Hi, Now I am", email, name);
  // then send the email
  let response = {
    body: {
      name,
      intro: "Welcome to Nodemailer! We're very excited to have you on board.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: "mister.xpl@yahoo.com",
    to: email,
    subject: "signup successful",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: "you should receive an email from us" });
    })
    .catch((error) => console.error(error));
};

const registerConfirm = (req, res, next) => {
  const { email, name } = req.body;
  console.log("Hi, Now I am", email, name);
  const response = {
    body: {
      name,
      intro: "Your account has been registered!",
      table: {
        data: [
          {
            item: "Access for 500 clients",
            description: "YOu have ermission to create 500 accounts per month",
            price: "$10.99/month",
          },
        ],
      },
      outro: "Looking forward to do more business with you",
    },
  };

  const mail = MailGenerator.generate(response);

  const message = {
    from: process.env.EMAIL,
    to: email,
    subject: "Registration",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({ msg: "Registered" });
      next();
    })
    .catch((error) => console.error(error));
};

module.exports = {
  signup,
  registerConfirm,
};
