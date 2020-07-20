export function setEvent(event) {
  return {
    type: '@event/SET_EVENT',
    payload: { event },
  };
}
export function newEvent() {
  return {
    type: '@event/NEW_EVENT',
  };
}
export function eventEdit() {
  return {
    type: '@event/EVENT_EDIT',
  };
}

export function createEventRequest(data) {
  return {
    type: '@event/CREATE_EVENT_REQUEST',
    payload: { data },
  };
}

export function createEventSuccess(event) {
  return {
    type: '@event/CREATE_EVENT_SUCCESS',
    payload: { event },
  };
}

export function updateEventRequest(data) {
  return {
    type: '@event/UPDATE_EVENT_REQUEST',
    payload: { data },
  };
}

export function updateEventSuccess(event) {
  return {
    type: '@event/UPDATE_EVENT_SUCCESS',
    payload: { event },
  };
}

export function eventFailure() {
  return {
    type: '@event/EVENT_FAILURE',
  };
}
