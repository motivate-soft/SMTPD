// function closeMenuAndGoTo(query) {
//   document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
//   setTimeout(() => {
//     const element = document.querySelector(query)
//     window.scrollTo({
//       top: element.getBoundingClientRect().top,
//       behavior: 'smooth'
//     })
//   }, 250);
// }

// document.querySelector('#hero-menu').
//   querySelectorAll('[href]').
//   forEach(function (link) {
//     link.onclick = function (event) {
//       event.preventDefault()
//       closeMenuAndGoTo(link.getAttribute('href'))
//     }
//   })

// /* Pricing Table =============================  */

// function insertContent(state, planListPlaceholder, planCardName, planOldPrice, planNewPrice, planDiscount, planDuration, planActionButton) {
//   if (planCardName)
//     planCardName.textContent = state.planName

//   if (planOldPrice)
//     planOldPrice.textContent = state.oldPrice

//   if (planDiscount)
//     planDiscount.textContent = state.discount

//   if (planNewPrice)
//     planNewPrice.textContent = state.newPrice

//   if (planDuration)
//     planDuration.textContent = state.duration

//   if (planActionButton) {
//     planActionButton.setAttribute('href', state.action)
//   }

//   planListPlaceholder
//     .parentNode
//     .querySelectorAll('.plan-features__li').forEach(function (item) {
//       if (item.getAttribute('id') !== 'plan-features__li--placeholder') {
//         item.remove()
//       }
//     })

//   state.features.forEach(function (item) {
//     var clonedListItem = planListPlaceholder.cloneNode(true)
//     clonedListItem.removeAttribute('style')
//     clonedListItem.removeAttribute('id')

//     clonedListItem.querySelector('.plan-features__li-text').textContent = item.text
//     if (item.disabled) {
//       clonedListItem.classList.add('plan-features__li--disabled')
//     }

//     planListPlaceholder.parentNode.insertBefore(clonedListItem, planListPlaceholder)
//   })
// }

// plans.forEach(function (plan, index) {
//   var planCard = document.querySelectorAll('.plan-card')[index]
//   var planCardName = planCard.querySelector('.plan-card__name')
//   var planOldPrice = planCard.querySelector('.discount__old-price')
//   var planDiscount = planCard.querySelector('.discount__percentage')
//   var planNewPrice = planCard.querySelector('.plan-card__price')
//   var planDuration = planCard.querySelector('.plan-card__duration')
//   var planListPlaceholder = planCard.querySelector('#plan-features__li--placeholder')
//   var planActionButton = planCard.querySelector('.btn')

//   insertContent(plan.state1, planListPlaceholder, planCardName, planOldPrice, planNewPrice, planDiscount, planDuration, planActionButton)
// })


// var currentState = 1

// function changePlan(e) {
//   e.preventDefault()

//   plans.forEach(function (plan, index) {
//     var planCard = document.querySelectorAll('.plan-card')[index]
//     var planCardName = planCard.querySelector('.plan-card__name')
//     var planOldPrice = planCard.querySelector('.discount__old-price')
//     var planDiscount = planCard.querySelector('.discount__percentage')
//     var planNewPrice = planCard.querySelector('.plan-card__price')
//     var planDuration = planCard.querySelector('.plan-card__duration')
//     var planListPlaceholder = planCard.querySelector('#plan-features__li--placeholder')
//     var planActionButton = planCard.querySelector('.btn')

//     var state = null

//     if (currentState === 1) {
//       state = plan.state2
//     } else {
//       state = plan.state1
//     }

//     insertContent(state, planListPlaceholder, planCardName, planOldPrice, planNewPrice, planDiscount, planDuration, planActionButton)
//   })

//   var switchs = document.querySelectorAll('.plan-switch__type')

//   if (currentState === 1) {
//     currentState = 2

//     switchs[0].classList.remove('plan-switch__type--selected')
//     switchs[1].classList.add('plan-switch__type--selected')
//   } else {
//     currentState = 1

//     switchs[1].classList.remove('plan-switch__type--selected')
//     switchs[0].classList.add('plan-switch__type--selected')
//   }
// }