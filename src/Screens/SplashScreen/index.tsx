import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    height: 100%;

    align-items: center;
`;
const SplashImage = Styled.Image`
    position: absolute;
    width: 100%;
    height: 105%;
`;

const Title = Styled.Text`
    margin-top: 80%;
    width: 90%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;
`;
const title = `
Find new places to explore and sights
`;
const Desc1 = Styled.Text`
    margin-top: -10%;
    width: 70%;
    left: -10%;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    color: #F1F1F1;
`;
const desc1 = `
Explore interesting places to live and choose something for yourself.
`;
const Button = Styled.TouchableOpacity`
    margin-top: 7%;

    width: 35%;
    height: 39px;
    border-radius: 16px;

    background: #326E6C;
`;
const ButtonLabel = Styled.Text`
    top: 8px;
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`;
const buttonLabel = `Sign in`;
const Link = Styled.Text`
    margin-top: 10px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;

    color: rgba(255, 255, 255, 0.70);
`;
const link = `Create account`;

interface Props {}
const SplashScreen = ({}: Props) => {
   return(
       <Container>
       <SplashImage source={require('~/Assets/Pictures/splashScreen.jpg')}/>    
           <Title>{title}</Title>
           <Desc1>{desc1}</Desc1>
           <Button>
               <ButtonLabel>{buttonLabel}</ButtonLabel>
           </Button>
           <Link>{link}</Link>
           
       </Container>
       
   );
}

export default SplashScreen;