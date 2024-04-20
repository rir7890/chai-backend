import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //   console.log("RegisterUser function is running in user controller");
  return res.status(200).json({
    message: "Ok",
  });
});

export { registerUser };
