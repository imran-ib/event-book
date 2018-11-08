import moment from "moment";
import { toastr } from "react-redux-toastr";

export const updateProfile = user => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const { isEmpty, isLoaded, ...updatedUser } = user;
  if (updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
    updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
    toastr.success("Success", "Profile has been updated");
  }
  try {
    await firebase.updateProfile(updatedUser);
  } catch (error) {
    console.log(error);
  }
};
