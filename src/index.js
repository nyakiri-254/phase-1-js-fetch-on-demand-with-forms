const init = () => {
  
const inputform = document.querySelector('form');
inputform.addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log(event);
    fetch ('http://localhost:3000/movies')
    .then(res => res.json())
    .then(data => { 
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails');
        title.innerText = data.title;
        summary.innerText =data.summary
        //LOG: (3)
    })
});
}
document.addEventListener('DOMContentLoaded', init);