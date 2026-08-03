// efeito suave no movimento da placa mãe


document.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth) * 10;


let y =
(e.clientY / window.innerHeight) * 10;



document.querySelector(".motherboard")
.style.transform =
`translate(${x}px,${y}px) scale(1.05)`;


});