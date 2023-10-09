import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { Types } = Schema;

const supplier = new Schema(
  {
    nameSupplier: {
      type: Types.String,
      required: true,
    },
    imageBanner: [
      {
        pathImage: {
          type: Types.String,
        },
      },
    ],
    profileImage: {
      type: Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Supplier", supplier);
