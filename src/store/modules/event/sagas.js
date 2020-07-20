import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import {
  eventFailure,
  createEventSuccess,
  updateEventSuccess,
} from './actions';
import errors from '~/errors';

export function* createEvent({ payload }) {
  try {
    const { title, dateFormatted } = payload.data;

    const event = {
      title,
      date: dateFormatted,
    };

    const response = yield call(api.post, '/api/events', event);
    toast.success('Evento criado com sucesso');
    yield put(createEventSuccess(response.data));
    history.replace('/dashboard');
  } catch (error) {
    errors(error.response.data);
    // toast.error('Falha ao criar evento, verifique seus dados por favor');
    yield put(eventFailure());
  }
}

export function* updateEvent({ payload }) {
  try {
    const { title, dateFormatted } = payload.data;

    const event = {
      title,
      date: dateFormatted,
    };
    const idEvent = yield select((state) => state.event.active.id);
    const response = yield call(api.put, `/api/events/${idEvent}`, event);
    toast.success('Evento atualizado com sucesso');
    const data = {
      ...response.data,
      dateFormatted: format(
        parseISO(response.data.date),
        "dd 'de' MMMM', às' HH'h'",
        {
          locale: pt,
        }
      ),
      date: parseISO(response.data.date),
    };
    yield put(updateEventSuccess(data));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao atualizar evento, verifique seus dados por favor');
    console.tron.error(error);
    yield put(eventFailure());
  }
}

export default all([
  takeLatest('@event/CREATE_EVENT_REQUEST', createEvent),
  takeLatest('@event/UPDATE_EVENT_REQUEST', updateEvent),
]);
