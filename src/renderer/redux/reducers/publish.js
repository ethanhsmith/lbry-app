// @flow
import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

type PublishState = {
  filePath: ?string,
}

export type UpdatePublishFilePath = {
  type: string,
  data: {
    filePath: string
  },
}

const defaultState: PublishState = {
  filePath: undefined
};

export default handleActions(
  {
    [ACTIONS.UPDATE_PUBLISH_FILE]: (state: PublishState, action: UpdatePublishFilePath): PublishState => {
      const { data: { filePath } } = action;
      return {
        ...state,
        filePath
      }
    }
  },
  defaultState
);
