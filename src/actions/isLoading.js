import { TOGGLE_LOADING } from '../actionTypes';

export default function setLoading(toggleLoading) {
  return {
    type: TOGGLE_LOADING,
    toggleLoading,
  };
}
