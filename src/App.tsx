import React, { useEffect, useState } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Container,
  createMuiTheme,
  Paper,
  Theme,
  ThemeProvider,
} from '@material-ui/core';
import getBrota from './service/getBrota';
import getPlantas from './service/getPlantas';
import Brota from './model/Brota';
import Capsula from './model/Capsula';
import Planta, { ListaPlantas } from './model/Planta';

const theme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App(): React.ReactElement {
  const [brota, setBrota] = useState<Brota>(new Brota());
  const [events, setEvents] = useState<EventInput[]>([]);
  const [plantas, setPlantas] = useState<ListaPlantas>({} as ListaPlantas);

  useEffect(() => {
    getBrota().subscribe(res => setBrota(res));
    getPlantas().subscribe(res => setPlantas(res));
  }, []);

  useEffect(() => {
    const events: EventInput[] = [];
    brota.capsulas.forEach((capsula: Capsula) => {
      const planta = plantas[capsula.planta] as Planta;
      events.push({
        title: `Germinação - ${planta.nome}`,
        start: capsula.diasGerminacao.inicio?.toISOString(),
        end: capsula.diasGerminacao.fim?.toISOString(),
        backgroundColor: '#00af80',
        borderColor: 'black',
        editable: false,
        allDay: true,
      });

      events.push({
        title: `Inicio colheita - ${planta.nome}`,
        start: capsula.diasColheita.inicio?.toISOString(),
        backgroundColor: '#005500',
        borderColor: 'black',
        editable: false,
        allDay: true,
      });

      events.push({
        title: `Fim colheita - ${planta.nome}`,
        start: capsula.diasColheita.fim?.toISOString(),
        backgroundColor: '#ff0000',
        borderColor: 'black',
        editable: false,
        allDay: true,
      });
    });
    setEvents(events);
  }, [plantas, brota]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Paper style={{ height: '100vh' }}>
            <FullCalendar
              height={'100%'}
              stickyFooterScrollbar={true}
              headerToolbar={{
                start: '',
                center: 'title',
                end: '',
              }}
              buttonText={{
                today: 'Hoje',
              }}
              dayHeaderFormat={{ weekday: 'long' }}
              footerToolbar={{
                start: 'prev',
                center: 'today',
                end: 'next',
              }}
              titleFormat={{ dateStyle: 'short' }}
              locale={'pt-br'}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
