function iniciarMap(){
		var coord = {lat:-34.5956145 ,lng: -58.4431949};
		var map = new google.maps.Map(document.getElementById('map'),{
		  zoom: 10,
		  center: coord
		});
		var marker = new google.maps.Marker({
		  position: coord,
		  map: map
		});
	}

const btnAbrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
	modal.showModal();
})
btnCerarModal.addEventListener("click",()=>{
	modal.closeModal();
})
	