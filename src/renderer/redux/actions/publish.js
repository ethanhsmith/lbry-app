import * as ACTIONS from 'constants/action_types';
import type { UpdatePublishFilePath } from 'redux/reducers/publish';

export type Action = UpdatePublishFilePath

// Basic thunk types
// It would be nice to import these from types/common
// Not sure how that would work since they rely on the Action type
type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | PromiseAction | Array<Action>) => any;
type ThunkAction = (dispatch: Dispatch) => any;

export const doUpdateFilePath = (filePath: string) => (dispatch: Dispatch): Action =>
  dispatch({ type: ACTIONS.UPDATE_PUBLISH_FILE, data: { filePath } });
