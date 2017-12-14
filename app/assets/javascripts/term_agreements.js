const termAgreements = document.getElementById('terms')
const submitBtn = document.getElementById('terms-btn')
const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))
const shareholderAddress = document.getElementById('term_agreement_shareholder_address')
const boxStatus = []
if (shareholderAddress) checkShareholderAddress()
if (termAgreements) scrollSpy()
if (checkboxes) checkBoxChecked()

function scrollSpy(){
  termAgreements.addEventListener('scroll', finishedScroll)
}

function finishedScroll(event){
  if(event.target.scrollTop > event.target.scrollHeight*(0.95)){
    checkboxes.map(function(checkbox){
      checkbox.disabled=false
    })
  }
}

function checkBoxChecked(){
  checkboxes.map(function(checkbox){
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

function checkShareholderAddress(){
  shareholderAddress.addEventListener('input', function(event){
    // console.log('event: ', event)
    if(event.target.value.length === 40) console.log('EUREKA')
  })
}
