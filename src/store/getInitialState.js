import * as DISPLAY_MODE from '../constants/displayMode';
import * as THEME from '../constants/theme';
import VERIFICATION_STATUS from '../constants/verificationStatus';

export default function getInitialState (apiConfiguration = {}) {
  return {
    input: {},
    verifiedSteps: [],
    verificationStatus: VERIFICATION_STATUS.DEFAULT,
    displayMode: DISPLAY_MODE.CARD,
    theme: THEME.BRIGHT,
    ...apiConfiguration
  };
}
