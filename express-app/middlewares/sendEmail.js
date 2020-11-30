require("dotenv").config({ path: "../.env" });

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
    name: "WET BAT Agency",
    link: "http://localhost:7000",
  },
});

const registerConfirm = (req, res, next) => {
  const {
    email,
    depart_date,
    first_name,
    last_name,
    price,
    return_date,
  } = req.body;

  const response = {
    body: {
      name: `${first_name} ${last_name}`,
      intro: "Please, find your quote",
      table: {
        data: [
          {
            route: `Toronto to Calgary`,
            dates: `${depart_date} - ${return_date}`,
            price: `$ ${price / 100}`,
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
    subject: "Quotation",
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
  registerConfirm,
};
