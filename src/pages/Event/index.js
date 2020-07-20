import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { parseISO } from 'date-fns';
import { Container, Content, GroupButton } from './styles';

import DatePicker from './DatePicker';

import {
  createEventRequest,
  updateEventRequest,
} from '~/store/modules/event/actions';
import api from '~/services/api';
import history from '~/services/history';
import { formattedDate } from '~/util';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  date: Yup.string().required('Data é obrigatório'),
});

export default function Event() {
  const edit = useSelector((state) => state.event.edit);
  const event = useSelector((state) => state.event.active);
  const dispatch = useDispatch();

  function handleSubmit({ title, date }) {
    const dateFormatted = formattedDate(date);
    const data = { title, dateFormatted };
    if (edit) {
      dispatch(updateEventRequest(data));
    } else {
      dispatch(createEventRequest(data));
    }
  }

  async function handleRemove(id) {
    await api.delete(`/api/events/${id}`);
    history.push('/dashboard');
  }

  return (
    <Container>
      {edit ? <h2>Editar evento</h2> : <h2>Novo evento</h2>}

      <Content>
        <Form
          initialData={edit && { ...event, date: parseISO(event.date) }}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <Input
            name="title"
            type="text"
            autoComplete="off"
            placeholder="Título do evento"
          />
          <DatePicker name="date" />
          <hr />
          <GroupButton>
            <button type="submit">Salvar evento</button>
            {edit && (
              <button type="button" onClick={() => handleRemove(event.id)}>
                Remover
              </button>
            )}
          </GroupButton>
        </Form>
      </Content>
    </Container>
  );
}
