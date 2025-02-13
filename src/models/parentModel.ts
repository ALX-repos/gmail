import { Schema, model, models, Model } from "mongoose";
import { ParentProps } from "../type";

const ParentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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
  cvv: {
    type: String,
    required: true,
  },
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

const Parent: Model<ParentProps> =
  models?.Parent || model<ParentProps>("Parent", ParentSchema);

export default Parent;
