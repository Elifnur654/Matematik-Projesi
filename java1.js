const dogru=['8','72','10','3'];
const form=document.querySelector('.question-form ');
const result=document.querySelector('.result');
const successMessage=document.querySelector('#successMessage');
const button=document.querySelector('.btn');
form.addEventListener('submit', e =>{
    e.preventDefault();
    let score=0;
    const dogrular=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
   dogrular.forEach((answer,index) =>{
     if(answer ===dogru[index]){
        score+=25;
     }
   });
   if(score==100){
    successMessage.classList.remove('d-none');
    button.setAttribute('disabled','');
   }
   result.classList.remove('d-none');
   result.querySelector('#percentage').textContent=`${score}%`;
});

