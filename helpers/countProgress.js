function countProgress (data) {
  let total = null
  data.forEach(tutorial => {
    total += tutorial.nilai_tutorial
  })
  return total
}

module.exports = countProgress