import { Schema, model, models, Model } from "mongoose";
import { AppleAccountProps } from "../type";

const AppleAccountSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  first_q: {
    type: String,
    required: true,
  },
  second_q: {
    type: String,
    required: true,
  },
  third_q: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const AppleAccount: Model<AppleAccountProps> =
  models?.AppleAccount ||
  model<AppleAccountProps>("AppleAccount", AppleAccountSchema);

export default AppleAccount;
