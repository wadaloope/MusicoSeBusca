let selectHome = false;
let selectBusqueda = false;
let selectPublicacion = false;
//---------------------------------- Desplegado menu hamburguesa -------------------------------
let banderaHamburguesa = undefined;
const botonSuperior = document.getElementById("botonHamburguesa");
const botonSuperiorCierre = document.getElementById("botonCruz");
const divisor = document.getElementById("lineaSeparacion");
const nuevaPosFooter = document.getElementsByClassName("areaDeRelleno")[0];
const nuevaPosFooterAvisos =
	document.getElementsByClassName("avisosEncontrados")[0];
botonSuperior.addEventListener("click", (e) => {
	document.getElementById("linksNavegacion").classList.remove("hidden");
	divisor.classList.remove("hidden");
	botonSuperior.classList.add("hidden");
	botonSuperiorCierre.classList.remove("hidden");
	banderaHamburguesa = 1;
	if (
		window.innerWidth < 810 &&
		selectBusqueda == false &&
		selectPublicacion == false
	) {
		let areaDisponible = window.innerHeight - 178;
		nuevaPosFooter.style.minHeight = `${areaDisponible}px`;
	}
});

//---------------------------------- Guardado menu hamburguesa ---------------------------------
botonSuperiorCierre.addEventListener("click", (e) => {
	document.getElementById("linksNavegacion").classList.add("hidden");
	divisor.classList.add("hidden");
	botonSuperior.classList.remove("hidden");
	botonSuperiorCierre.classList.add("hidden");
	banderaHamburguesa = 2;
	if (window.innerWidth < 810) {
		let areaDisponible = window.innerHeight - 96.11;
		nuevaPosFooter.style.minHeight = `${areaDisponible}px`;
	}
	if (window.innerWidth > 360) {
		let areaDisponible = window.innerHeight - 178;
		nuevaPosFooterAvisos.style.minHeight = `${areaDisponible}px`;
	}
});

//-------------------------------- Seleccion distintas secciones -------------------------------
const botonHome = document.getElementById("homeSweetHome");
const botonBuscar = document.getElementById("botonSeccionBuscar");
const botonPublicar = document.getElementById("botonSeleccionPublicar");

//---------------------------------- Seleccion seccion home ---------------------------------
botonHome.addEventListener("click", (e) => {
	if (true) {
		/* 		if (selectBusqueda) resetearBusqueda(); */
		document.getElementsByClassName("home")[0].classList.remove("hidden");
		document.getElementsByClassName("seccionBuscar")[0].classList.add("hidden");
		document
			.getElementsByClassName("seccionPublicar")[0]
			.classList.add("hidden");
		selectHome = true;
		selectBusqueda = false;
		selectPublicacion = false;
	}
	if (window.innerWidth < 810) {
		document.getElementById("linksNavegacion").classList.add("hidden");
		divisor.classList.add("hidden");
		botonSuperior.classList.remove("hidden");
		botonSuperiorCierre.classList.add("hidden");
		{
			let areaDisponible = window.innerHeight - 96.11;
			nuevaPosFooter.style.minHeight = `${areaDisponible}px`;
		}
	}
});

//--------------------------------- Seleccion seccion buscar -------------------------------
botonBuscar.addEventListener("click", (e) => {
	if (!selectBusqueda) {
		document.getElementsByClassName("home")[0].classList.add("hidden");
		document
			.getElementsByClassName("seccionBuscar")[0]
			.classList.remove("hidden");
		document
			.getElementsByClassName("seccionPublicar")[0]
			.classList.add("hidden");
		selectHome = false;
		selectBusqueda = true;
		selectPublicacion = false;
	}
	if (window.innerWidth < 810) {
		document.getElementById("linksNavegacion").classList.add("hidden");
		divisor.classList.add("hidden");
		botonSuperior.classList.remove("hidden");
		botonSuperiorCierre.classList.add("hidden");
	}
});

//--------------------------------- Seleccion seccion publicar -------------------------------
botonPublicar.addEventListener("click", (e) => {
	if (!selectPublicacion) {
		/* 		if (selectBusqueda) resetearBusqueda(); */
		document.getElementsByClassName("home")[0].classList.add("hidden");
		document.getElementsByClassName("seccionBuscar")[0].classList.add("hidden");
		document
			.getElementsByClassName("seccionPublicar")[0]
			.classList.remove("hidden");
		document
			.getElementsByClassName("displayDetalleCardPublic")[0]
			.classList.remove("hidden");
		selectHome = false;
		selectBusqueda = false;
		selectPublicacion = true;
	}
	if (window.innerWidth < 810) {
		document.getElementById("linksNavegacion").classList.add("hidden");
		divisor.classList.add("hidden");
		botonSuperior.classList.remove("hidden");
		botonSuperiorCierre.classList.add("hidden");
	}
});
//-----------------------------probando flujo de ventanas--------------------------------
document.getElementById("iniciarBusqueda").addEventListener("click", (e) => {
	document
		.getElementsByClassName("contenedorCards")[0]
		.classList.remove("hidden1");
	/* 	llamarSpinner(); */
	/* 	renderizarResultados(); */
});

document.getElementById("masInformacion").addEventListener("click", (e) => {
	document
		.getElementsByClassName("displayDetalleCard")[0]
		.classList.remove("hidden1");
	document
		.getElementsByClassName("contenedorCards")[0]
		.classList.add("hidden1");
});

document.getElementById("iniciarEdicion").addEventListener("click", (e) => {
	document.getElementsByClassName("edicionCard")[0].classList.remove("hidden2");
});
