import { setBoard } from './Utils';

const smallGlider = () => {
  let height = 15
  let width = 15
  let alive = ['7:7', '8:8', '8:9', '7:9', '6:9']
  let cells = setBoard(height, width, alive)
  let name = 'Small Glider'
  return {name, height, width, cells}
}

export const presets = [smallGlider()]
