import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/api/auth/signin', {
      email,
      password,
    });

    const { token, userDTO } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, userDTO));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/api/auth/signup', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
