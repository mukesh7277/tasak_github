import React from 'react';
import styled from 'styled-components';


const Label = styled.span`
    background-color : #${props => (props.bgColor
    ? props.bgColor : '#fff')};
`;

// const tagColor={
//   backgroundColor: `color` ? {color}:"#fff"
// }

const Labels = ({ labels }) => (
  <span className="LabelsWrapper">
    {
      labels.length > 0
      && labels.map(({ id, color, name }) => (
        <Label 
        // style={color?{backgroundColor:`"${color}"`}:{backgroundColor:"#fff"}}
        key={id}
        bgColor={color}
        className='Label'
        >
          {name}
        </Label>
      ))
    }
  </span>
);

export default Labels;


