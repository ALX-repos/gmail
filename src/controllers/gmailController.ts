import { Request, Response } from "express";
import { AddGmailBodyProps, GetGmailQueryProps, GmailProps } from "../type";
import Gmail from "../models/gmailModel";

const addGmail = async (
  req: Request<{}, {}, AddGmailBodyProps>,
  res: Response
) => {
  const { email, password } = req.body;

  try {
    await Gmail.create({ email, password });

    res.status(200).send("Gmail added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong adding the gmail");
  }
};

const getGmail = async (
  req: Request<{}, {}, {}, GetGmailQueryProps>,
  res: Response
) => {
  const { password } = req.query;

  try {
    let gmail: GmailProps[];

    if (password) {
      gmail = await Gmail.find({ password: password });
    } else {
      gmail = await Gmail.find();
    }

    const gmailText = gmail.map((el) => el.email).join("<br />");

    res.status(200).send(`<p>${gmailText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the gmail");
  }
};

export { addGmail, getGmail };
