import { UserProfile } from '../../interface/UserState';
import { UPDATE_PROFILE } from './constant';
import { APILogin } from '../../api/auth';
import store from '../index';
import { APIGetProfile } from '../../api/user';

export const updateProfile = (userProfile: UserProfile) => {
  return {
    type: UPDATE_PROFILE,
    payload: userProfile,
  };
};

export const login = async (userDetails: UserProfile) => {
  const [data, error] = await APILogin(userDetails);
  if (error) console.log(error);
  store.dispatch(updateProfile(data));
};

export const getProfile = async () =>{
  const [data, error] = await APIGetProfile();
  if(error){ 
    console.log(error);
    return;
  };
  store.dispatch(updateProfile(data.profile));
}