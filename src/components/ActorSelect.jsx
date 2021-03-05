import React from 'react';
import defaultActor from '../static/images/Vector.png'
import styled from 'styled-components'
import { Smiley, Heart, Horse } from "phosphor-react";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 284px;
  height: 35px;  
  margin: 1em;
  margin-top: 1.4em; 
  color: #000;
  background: fff;
  border: none;
  border-radius: 4px;
  font-family: Sora;
  font-size: 0.875rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);  
`;

const Image = styled.img`
  width: 200px; 
  background: #FFFFFF;
  border: 3px solid #7A63FF;
  box-sizing: border-box;
  border-radius: 67px;
`

const PlaceHolder = styled.img`
  width: 200px;
  height: 297.22px; 
  background: #FFFFFF;
  border: 3px solid #7A63FF;
  box-sizing: border-box;
  border-radius: 67px;
`


export default function ActorSelect(props) {
  if (props.actorPic) {
    return (
      <Wrapper>
        <Image src={props.actorPic} alt="Actor" />
        <Input type='text' className='actor1' onChange={props.handleChangeActor} />

      </Wrapper>
    )
  } else {
    return(
      <Wrapper>
          <PlaceHolder src={defaultActor} alt="default placeholder" style={{ width:"100" }} />
        <Input type='text' className='actor1' onChange={props.handleChangeActor} />
      </Wrapper>
    )
  }
}