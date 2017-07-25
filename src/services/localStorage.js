const STORAGE_KEY = 'app_state';

/**
 * Save give state into the local storage
 * @param {Object} state
 */
export const writeState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Cannot writeState to local storage, app state is not persisted');
  }
};

/**
 * Returns a JSON object from the local storage | undefined
 */
export const readState = () => {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (state === null) {
      return void 0;
    }
  } catch (err) {
    return void 0;
  }
};
