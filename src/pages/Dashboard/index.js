import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch } from 'react-redux';

import { Container, Event, Scroll } from './styles';

import api from '~/services/api';
import history from '~/services/history';
import errors from '~/errors';

import { setEvent, newEvent } from '~/store/modules/event/actions';

function Dashboard() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await api.get('/api/events');
        const data = response.data.map((event) => ({
          ...event,
          dateFormatted: format(
            parseISO(event.date),
            "dd 'de' MMMM', às' HH'h' mm'm.'",
            {
              locale: pt,
            }
          ),
        }));
        setEvents(data);
      } catch (error) {
        console.tron.log(error.response);
        errors(error.response.data, dispatch);
      }
    }
    loadEvents();
  }, [dispatch]);

  function handleDetails(event) {
    dispatch(setEvent(event));
    history.push('/events');
  }

  function handleNewEvent() {
    dispatch(newEvent());
    history.push('/events');
  }

  return (
    <Container>
      <header>
        <h2>Eventos</h2>

        <button type="button" onClick={handleNewEvent}>
          Novo evento
        </button>
      </header>

      <Scroll>
        <ul>
          {events.map((meetup) => (
            <Event key={meetup.id} onClick={() => handleDetails(meetup)}>
              <p>{meetup.title}</p>
              <time>{meetup.dateFormatted}</time>
            </Event>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}

export default Dashboard;
