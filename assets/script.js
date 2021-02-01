const contributionsDisplay = document.getElementById('contributions-number')
const displayClass = document.getElementById('contributions-number').classList
let displayNumber = 0
let i = 0

function countUp() {
  const numberOfCards = document.getElementsByClassName('card').length
  const numberOfContributors = numberOfCards - 1 // minus the example card

  setTimeout(function() {
    displayNumber += 1
    // print result to html
    contributionsDisplay.textContent = displayNumber
    // increment and loop through
    i++
    if (i < numberOfContributors) {
      countUp()
    }

    if (i === numberOfContributors) {
      displayClass.add('rubberBand')
    }
  }, 15) // delay
}

document.getElementById('archiveObject').onload = function() {
  const archiveObject = document.getElementById('archiveObject')
  const cards = archiveObject.contentDocument.querySelectorAll('.card')
  const grid = document.querySelector('.grid')

  cards.forEach(card => {
    grid.append(card)
  })
  archiveObject.remove()
  countUp()
}

// night mode feature
$('#toggle-box-checkbox').on('change', function() {
  if (this.checked) {
    $('body').addClass('night')
  } else {
    $('body').removeClass('night')
  }
})

function demo() {
  setInterval(function() {
    $('#toggle-box-checkbox').trigger('click')
  }, 1000)
}
if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demo()
}
