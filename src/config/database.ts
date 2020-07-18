import { keys } from "./keys";
import { ConnectionOptions, connect } from "mongoose";

// https://github.com/polcham/mongoose-express-ts/blob/master/config/database.ts
const connectDB = async () => {
  try {
    const mongoURI = keys.mongoURI;
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log("MongoDB connected...");
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
