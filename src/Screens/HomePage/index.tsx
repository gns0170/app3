import React from 'react';
import Styled from 'styled-components/native';
import StatusBar from '~/Screens/StatusBar'; 

const Container = Styled.View`
   width: 100%;
   height: 100%;
   background: #C9BFB2;
`;
const Desc1 = Styled.Text``;
const Title = Styled.Text``;
const title = ``;

const SearchBar = Styled.View``;
const SmallTitle= Styled.Text``;
const Category = Styled.View``;
const CateBtn = Styled.View``;
const Popular = Styled.View``;
const PopuView = Styled.View``;
const NearbyResidence = Styled.View``;
const NRView = Styled.View``;

interface Props {}
const HomePage = ({}: Props) => {
   return(
      <Container>
         <Title></Title>
         <SearchBar />
         <Category>
            <CateBtn />
         </Category>
         <Popular>
            <PopuView />
         </Popular>
         <NearbyResidence>
            <NRView />
         </NearbyResidence>
         <StatusBar />
      </Container>
   );
}
export default HomePage;
