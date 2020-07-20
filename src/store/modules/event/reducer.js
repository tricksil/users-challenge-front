import produce from 'immer';

const INITIAL_STATE = {
  active: null,
  edit: false,
};
export default function event(state = INITIAL_STATE, actions) {
  return produce(state, (draft) => {
    switch (actions.type) {
      case '@event/SET_EVENT': {
        draft.active = actions.payload.event;
        draft.edit = true;
        break;
      }
      case '@event/NEW_EVENT': {
        draft.active = null;
        draft.edit = false;
        break;
      }
      case '@event/EVENT_EDIT': {
        draft.edit = true;
        break;
      }
      case '@event/CREATE_EVENT_SUCCESS': {
        draft.active = actions.payload.event;
        draft.edit = false;
        break;
      }

      case '@event/UPDATE_EVENT_SUCCESS': {
        draft.active = actions.payload.event;
        draft.edit = false;
        break;
      }

      default:
    }
  });
}
