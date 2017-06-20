export const setBoard = (h, w, grid = [[]]) => {

  let cells = {}
  let alive = []

  grid.forEach((row, y) => {
    row.forEach((item, x) => {
      if (item === 1) {
        alive.push(`${y}:${x}`)
      }
    })
  })

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
        alive: alive.includes(id) ? true : false,
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

  return cells;
}
