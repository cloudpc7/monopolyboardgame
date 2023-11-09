import React from 'react'
import Board from '../components/Board'
import BoardData from '../components/BoardData'
export default function App() {
  const [boardGame,setBoardGame] = React.useState(BoardData)

  const spaceColor = (color) => {
    if(color){
      return {backgroundColor: color, borderBottom: '2px solid #000000'}
    }
  }
  const spaceStyles = (space) => {
    if(space >= 1 && space <= 10){
      return {gridColumnEnd:-space,gridRowStart:11}
    }
    if(space >=11 && space <= 21){
      return {
              gridColumn:1,
              gridRow:9 - space,
              transform: 'rotate(90deg)'
            }
    }
    if(space >=22 && space < 32){
      return {transform: 'rotate(180deg)'}
    }
    if(space >=32 && space <=40){
      return {transform: 'rotate(-90deg)'}
    }
  }

  const board = boardGame.data.boardSpaces.map(boardSpace => {
      return (
        <div style={spaceStyles(boardSpace.space)}  className="board-space">
            <div style={spaceColor(boardSpace.color)} className="color-box"></div>
            <Board
              key={boardSpace.id}
              id={boardSpace.id}
              space={boardSpace.space}
              name={boardSpace.name}
              value={boardSpace.value}
              color={boardSpace.color}
              img={boardSpace.img}
          />
        </div>

      )
  })
  


  return (
    <main className="board">
      {board}
      <div className="monopoly-space">
      </div>
      <span className="description">Fast-Dealing Property Trading Game</span>
      <img className="monopoly-guy" src="./monopolyman.png"/>
      <div className="board-title">
        <h1>MONOPOLY</h1>
      </div>
    </main>
  )
}

