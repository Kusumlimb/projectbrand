import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play this game</h2>
        <div className="text">
            <p>Select any number</p>  
            <p>Click on the dice</p>
            <p>IF the number you selected and the number that appears on
                the dice is same, you will gain those points. Otherwise, you'll lose two points.
            </p>
        </div>
      
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`

    background-color: grey;
    padding: 20px;
    h2{
        font-size: 24px;
        
    }
    .text{
        margin-top: 24px;
    }
    

`
