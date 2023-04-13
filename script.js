const canvas=document.querySelector('#drawingCanvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

cosmo=document.createElement('img');
wanda=document.createElement('img');

cosmo.src='imagenes/cosmo.png';
wanda.src='imagenes/wanda.png';

let paintbrush=cosmo;

const context=canvas.getContext('2d');

const handleMouseMove=(event)=>{
  const left = event.clientX;
  const top = event.clientY;
  context.drawImage(paintbrush, left, top);
console.log(event);
}

const handleClick=()=>{

  if (paintbrush===cosmo){
    paintbrush=wanda;
  } else{
    paintbrush=cosmo;
  }

}

canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('click', handleClick);
