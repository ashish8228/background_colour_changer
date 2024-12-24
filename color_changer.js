const root = document.getElementById('root')

root.addEventListener('click',(event)=>{
    console.log(event.target.classname);
    document.body.style.backgroundColor = event.target.id;
})