let card =  document.getElementById('card')
let textCard = document.getElementById('text-card')

let card2 =  document.getElementById('card2')
let textCard2 = document.getElementById('text-card2')

let card3 =  document.getElementById('card3')
let textCard3 = document.getElementById('text-card3')

let card4 =  document.getElementById('card4')
let textCard4 = document.getElementById('text-card4')


// Card 1
card.addEventListener('mouseover', () => {
  textCard.style.display = 'flex'
})

card.addEventListener('mouseout', () => {
  textCard.style.display = 'none'
})


// Card 2
card2.addEventListener('mouseover', () => {
  textCard2.style.display = 'flex'
})

card2.addEventListener('mouseout', () => {
  textCard2.style.display = 'none'
})


// Card 3
card3.addEventListener('mouseover', () => {
  textCard3.style.display = 'flex'
})

card3.addEventListener('mouseout', () => {
  textCard3.style.display = 'none'
})


// Card 4
card4.addEventListener('mouseover', () => {
  textCard4.style.display = 'flex'
})

card4.addEventListener('mouseout', () => {
  textCard4.style.display = 'none'
})