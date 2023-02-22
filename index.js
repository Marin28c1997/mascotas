var app = new Vue({
  el: "#app",
  data: {
    users: [],
    username: "",
    password: "",

  },
  methods: {
    login() {
      const user = this.users.filter(
        (user) =>
          user.login.username === this.username &&
          user.login.password === this.password
      );

      if (!user.length) {
        swal("Error", "Usuario o contraseña incorrectas", "error");
        return;
      }
      Swal.fire({
        icon: "success",
        title: "Entrando",
        showConfirmButton: false,
      });

      localStorage.setItem("logueado", JSON.stringify(user[0]));

      setTimeout(() => {
        if (this.login) {
          location.href = "pagina.html";
        }
      }, 1600);
    
    },

    async getUsers() {

      const response = await fetch(
        `https://randomuser.me/api/?results=10`
      );
      const data = await response.json();
      this.users = data.results;

      this.users.map((item) => {
        const cargo = this.getRandomInt(2);
        item.cargo = cargo;
      });

      localStorage.setItem('users', JSON.stringify(this.users));
    },

    
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
  },
  },
  created() {
    this.getUsers();
},

});
