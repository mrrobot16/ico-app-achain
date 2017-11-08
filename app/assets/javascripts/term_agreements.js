var termAgreements = document.getElementById('terms')
var checkboxes = document.querySelectorAll("input[type='checkbox']")
var submitBtn = document.getElementById('terms-btn')
var boxStatus = []
if (termAgreements) scrollSpy(termAgreements)
if(checkboxes) checkBoxChecked()

function scrollSpy(element){
  termAgreements.addEventListener('scroll', function(event){
    if(event.target.scrollTop > event.target.scrollHeight*(0.95)){
      checkboxes.forEach(function(checkbox){
        checkbox.disabled=false
      })
    }
  })
}

function checkBoxChecked(){
  checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('click', checkBoxes)
  })
}

function checkBoxes(){
  if(this.checked){
    boxStatus.push(this.checked)
    enableButton()
  }
  else {
    boxStatus.shift()
    enableButton()
  }
}

function enableButton(){
  boxStatus.length === checkboxes.length ? submitBtn.disabled=false : submitBtn.disabled=true
}
