import React from 'react';
import Styled from 'styled-components/native';
 
const Container = Styled.View`
   width: 100%;
   height: 100%;
`;
const Bar = Styled.View`
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 77px;

    padding: 10px;
    flex-direction: row;

    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 1px 47px rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(13px);

    borderTopLeftRadius: 23px;
    borderTopRightRadius: 23px;
`;
const Icon = Styled.Image``;
const Light = Styled.View``;
const Desc = Styled.Text``;
interface Props {}
const StatusBar = ({}: Props) => {
   return(
        <Container>
            <Bar >
                <Desc>Test</Desc>
                <Desc>Test</Desc>
            </Bar>
        </Container>
   );
}
export default StatusBar;
