import { setBoard } from './Utils';

const smallGlider = () => {
  let height = 3
  let width = 3
  let grid = [
                [0,0,1],
                [1,0,1],
                [0,1,1]
              ]
  let name = 'Small Glider'
  return {name, height, width, cells: setBoard(height, width, grid)}
}

const smallShip = () => {
  let height = 4
  let width = 5
  const grid = [
    [0,0,1,1,0],
    [1,1,0,1,1],
    [1,1,1,1,0],
    [0,1,1,0,0]
  ]
  let name = 'Lightweight Spaceship'
  return {name, height, width, cells: setBoard(height, width, grid)}
}

const pulsar = () => {
  let height=13
  let width=13
  let grid = [
               [0,0,1,1,1,0,0,0,1,1,1,0,0],
               [0,0,0,0,0,0,0,0,0,0,0,0,0],
               [1,0,0,0,0,1,0,1,0,0,0,0,1],
               [1,0,0,0,0,1,0,1,0,0,0,0,1],
               [1,0,0,0,0,1,0,1,0,0,0,0,1],
               [0,0,1,1,1,0,0,0,1,1,1,0,0],
               [0,0,0,0,0,0,0,0,0,0,0,0,0],
               [0,0,1,1,1,0,0,0,1,1,1,0,0],
               [1,0,0,0,0,1,0,1,0,0,0,0,1],
               [1,0,0,0,0,1,0,1,0,0,0,0,1],
               [1,0,0,0,0,1,0,1,0,0,0,0,1],
               [0,0,0,0,0,0,0,0,0,0,0,0,0],
               [0,0,1,1,1,0,0,0,1,1,1,0,0]
              ]

  let name = 'Pulsar'
  return {name, height, width, cells: setBoard(height, width, grid)}
}

export const presets = [smallGlider(), smallShip(), pulsar()]
