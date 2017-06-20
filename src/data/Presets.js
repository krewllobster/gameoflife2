import { setBoard } from './Utils';

const smallGlider = () => {
  let height = 3
  let width = 3
  let alive = ['1:0', '2:1', '2:2', '1:2', '0:2']
  let cells = setBoard(height, width, alive)
  let name = 'Small Glider'
  return {name, height, width, cells}
}

const smallShip = () => {
  let height = 4
  let width = 5
  let alive = [              '0:2', '0:3',
               '1:0', '1:1',        '1:3', '1:4',
               '2:0', '2:1', '2:2', '2:3',
                      '3:1', '3:2'
              ]
  let cells = setBoard(height, width, alive)
  let name = 'Lightweight Spaceship'
  return {name, height, width, cells}
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
  let alive = []
  grid.forEach((row, y) => {
    row.forEach((item, x) => {
      if (item === 1) {
        alive.push(`${y}:${x}`)
      }
    })
  })
  let name = 'Pulsar'
  return {name, height, width, cells: setBoard(height, width, alive)}
}

export const presets = [smallGlider(), smallShip(), pulsar()]
