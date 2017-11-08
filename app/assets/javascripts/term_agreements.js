var termAgreements = document.getElementById('terms')
var checkboxes = document.querySelectorAll("input[type='checkbox']")

var submitBtn = document.getElementById('terms-btn')
var boxStatus = []
if (termAgreements) {
  scrollSpy(termAgreements)
  checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('click', function(){
      console.log('CHECK')
    })
    checkbox.disabled=false
  })
}
// Create logic where each time you check or uncheck a box
//  he is gonna check if all box are checked or not all checked
//  if all Boxes checked then enableButton
// checkboxes.forEach(function(checkbox){
//   boxStatus.push(checkbox.disabled)
// })

function scrollSpy(element){
  termAgreements.addEventListener('scroll', function(event){
    if(event.target.scrollTop > event.target.scrollHeight*(0.95)){
      checkboxes.forEach(function(checkbox){
        checkbox.disabled=false
      })
    }
  })
}

// function enableSubmit(){
//   submitBtn.disabled=false
// }
