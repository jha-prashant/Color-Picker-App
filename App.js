const colorbox=document.getElementById('colorbox');

const redbutton=document.getElementById('redbutton');
const blueutton=document.getElementById('bluebutton');
const greenbutton=document.getElementById('greenbutton');

redbutton.addEventListener('click',()=>{
    colorbox.style.backgroundColor='red';
    colorbox.textContent='Red';
});
blueutton.addEventListener('click',()=>{
    colorbox.style.backgroundColor='blue';
    colorbox.textContent='Blue';
});
greenbutton.addEventListener('click',()=>{
    colorbox.style.backgroundColor='green';
    colorbox.textContent='Green'
})