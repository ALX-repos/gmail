import { Schema, model, models } from "mongoose";

const GmailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Gmail = models?.Gmail || model("Gmail", GmailSchema);

export default Gmail;
