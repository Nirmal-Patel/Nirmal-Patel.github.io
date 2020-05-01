const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const radios = document.getElementsByName("option");
myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{     
    e.preventDefault();
    if(radios[0].checked === true)
    {
        msg.classList.add('error');
        msg.innerHTML = "Sorry!! Correct Answer is 3.";
    }
    else if(radios[1].checked === true)
    {
        msg.classList.add('error');
        msg.innerHTML = "Sorry!! Correct Answer is 3.";
    }
    else if(radios[2].checked === true)
    {
        msg.classList.add('error');
        msg.innerHTML = "Congratulation!! Correct Answer.";
    }
    else if(radios[3].checked === true)
    {
        msg.classList.add('error');
        msg.innerHTML = "Sorry!! Correct Answer is 3.";
    }
    else
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please Select Option';
    }  
}