const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

if(menuBtn&&menu){
  menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("abierto");
    menuBtn.textContent=menu.classList.contains("abierto")?"✕":"☰";
  });
}

const contador=document.getElementById("contador");
if(contador){
  let visitas=Number(localStorage.getItem("sabor_urbano_visitas"))||0;
  visitas++;
  localStorage.setItem("sabor_urbano_visitas",visitas);
  contador.textContent=visitas;
}
