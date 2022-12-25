import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { authSlice } from "./authSlice";

export const authSignUpUser =
  ({ email, password, nickName }) =>
  async (dispatch) => {
    try {
      ///викликаю аунтифыкатор
      const auth = getAuth();

      /// свтворюю юзера, передаю аунтифыкатор, ы даны для входу, емейл пасворд
      await createUserWithEmailAndPassword(auth, email, password);

      /// обявляю поточного юзера
      const user = await getAuth().currentUser;

      /// оновлюю дані про нікнейм в юзера
      const currentUser = await updateProfile(user, { displayName: nickName });

      /// беру айді та оновлений нікНейм юераза
      const { uid, displayName } = await getAuth().currentUser;

      /// передаю в диспечер данні
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          nickName: displayName,
        })
      );
    } catch (error) {
      dispatch(
        authSlice.actions.errorStatusSignUpUser({
          statusSignUpUser: error.message,
        })
      );

      console.log(error);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      dispatch(
        authSlice.actions.errorSignInUser({
          statusSignInUser: error.message,
        })
      );

      console.log(error);
    }
  };

export const authStateChanged = () => async (dispatch) => {
  const auth = getAuth();

  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        nickName: user.displayName,
        userId: user.uid,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {
  const auth = getAuth();
  await signOut(auth);

  dispatch(authSlice.actions.authSignOut());
};
