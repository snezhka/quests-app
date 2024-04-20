import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import {
  Link, 
  BrowserRouter as Router,
  convertQuestLevel
} from 'components/common/common';
import * as S from './quests-catalog.styled';
import {useStore} from '../../../../store/app-store.js';

export default function QuestsCatalog(){
    const quests = useStore(state => state.quests); 
    const activeGenre = useStore(state => state.activeGenre); 
    const setActiveGenre = useStore(state => state.setActiveGenre); 
    console.log('activeGenre', activeGenre);
    const filtered = (activeGenre != 'all') ? quests.filter((quest) => quest.type == activeGenre) : quests;
    console.log('filtered', filtered);
  return (
  <>
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn isActive onClick={() => setActiveGenre("all")}>
          <IconAllQuests />
          <S.TabTitle><Link to="/">Все квесты</Link></S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={() => setActiveGenre("adventures")}>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={() => setActiveGenre("horror")}>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={() => setActiveGenre("mystic")}>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={() => setActiveGenre("detective")}>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn onClick={() => setActiveGenre("sci-fi")}>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>
    <S.QuestsList>
    {filtered.map((quest) => {
      console.log(quest.coverImg);
      return (
      <S.QuestItem>
        <S.QuestItemLink to={'quests/' + quest.id}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
              width="344"
              height="232"
              alt={"квест" + quest.title}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {quest.peopleCount[0] + "-" + quest.peopleCount[1]}
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {convertQuestLevel(quest.level)}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
      )})}
        </S.QuestsList>
  </>
  )
}


