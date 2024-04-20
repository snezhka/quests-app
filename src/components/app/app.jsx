import { ThemeProvider } from 'styled-components';
import {
  useLoaderData,
} from "react-router-dom";
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import {useStore} from '../../store/app-store.js';


export default function App () {
    const data = useLoaderData();
    console.log('DATA', data);
    const setQuests = useStore(state => state.setQuests); 
    setQuests([...data]);
  return (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
          <Home />
  </ThemeProvider>
  )
}


