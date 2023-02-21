var app = new Vue({
    el: "#app",
    data: {
      nombre: '',
      raza: '',
      edad: 0,
      color:'',
      especie:'',
      genero:'',
      descripcion:'',
      mascotas: [],
      imagenSeleccionada: '',
      estado:true,
      mostrarVentana: true,
      ventanaMascotas:false,
      ventanaAdmin:false,
      ventanaAdoptar:false,
      user: JSON.parse(localStorage.getItem("logueado")),
    },

  methods: {
    agregarUsuario() {
      
      this.mascotas.push({
        nombre: this.nombre,
        raza: this.raza,
        edad: this.edad,
        color: this.color,
        especie: this.especie,
        genero: this.genero,
        descripcion: this.descripcion,
        imagen: this.imagenSeleccionada,
        estado: this.estado,
      });

      localStorage.setItem('mascota', JSON.stringify(this.mascotas));

      this.nombre = '';
      this.raza = '';
      this.edad = 0;
      this.color= '';
      this.especie= '';
      this.genero=  '';
      this.descripcion= '';
      this.imagenSeleccionada = '';
    },

    seleccionarImagenPredeterminada(evento) {
      const archivo = evento.target.files[0];
      const lector = new FileReader();
      lector.onload = () => {
        this.imagenSeleccionada = lector.result;
      };
      lector.readAsDataURL(archivo);
    },
    cerrarVentana() {
      this.mostrarVentana = false;
    },

    
    abrirVentana() {
      this.mostrarVentana = true;
    },

    adoptar() {
      this.mascotas = JSON.parse(localStorage.getItem("mascota"))
      this.mostrarVentana = false;
      this.ventanaMascotas=true;
    },
    admin() {
      this.mascotas = JSON.parse(localStorage.getItem("mascota"))
      this.mostrarVentana = false;
      this.ventanaAdmin=true;
    },
    darAdopcion() {
      this.mostrarVentana = false;
      this.ventanaAdoptar=true;
    },
    salir() {
      console.log("loguot")
      this.username = "";
      this.password = "";
      setTimeout(() => {
        if (this.salir) {
          location.href = "index.html";
        }
      }, 100);
    },


  },
  mounted() {
    // console.log(this.user,this.user.cargo)
    // Activar ventana flotante al cargar la página
    this.mostrarVentana = true;
    const listaMascota = JSON.parse(localStorage.getItem("mascotas"))
    if (listaMascota!==null) {
      this.mascotas = listaMascota;
    }

    if (this.user === undefined || this.user === null) {
      window.location='index.html'
    }
  }
});
  