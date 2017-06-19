export const setBoard = (h, w, preset = []) => {

  let cells = {}

  const cID = (r,c,h,w) => {
    if (r < 0) {r = h - 1}
    if (r >= h) {r = 0}
    if (c < 0) {c = w - 1}
    if (c >= w) {c = 0}
    return `${r}:${c}`
  }

  for (let i = 0; i < h; i ++ ) {
    for (let j = 0; j < w; j ++ ) {
      let id = `${i}:${j}`;
      let newCell = {
        alive: preset.includes(id) ? true : false,
        xpos: j,
        ypos: i,
        nsum: 0,
        neighbors: [
          cID(i-1,j-1, h, h),
          cID(i,j-1, h, w),
          cID(i+1,j-1, h, w),
          cID(i-1, j, h, w),
          cID(i+1, j, h, w),
          cID(i-1, j+1, h, w),
          cID(i, j+1, h, w),
          cID(i+1, j+1, h, w)
        ]
      }
      cells[id] = newCell;
    }
  }

  const setNeighbors = (cells) => {
    Object.keys(cells).forEach(id => {
      let cell = cells[id];
      if (cell.alive) {
        cell.neighbors.forEach(cellId => {
          let nCell = cells[cellId];
          cells[cellId] = {...nCell, nsum: nCell.nsum + 1}
        })
      }
    })
    return cells;
  }

  return setNeighbors(cells);
}
