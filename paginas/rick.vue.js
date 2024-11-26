var RyM = { 
	template:'<div><h1>Personajes Rick & Morty</h1></div> '
	+'<div v-for="item in personajes">'
	+' <div class="card m-5 bg-dark" style="width:640px;"> '
    +'        <div class="card-body"> '
    +'            <div class="row"> '
    +'                <div class="col"> '
    +'                    <img class="card-img-top" '
    +'                    v-bind:src=item.image> '
    +'                </div> '
    +'                <div class="col"> '
    +'                    <h3 class="card-title text-warning">{{item.name}}</h3> '
    +'                    <p class="card-text text-light">{{item.status}}</p> '
    +'  <p class="card-text text-light">{{item.species}} :{{item.gender}}</p> '
    +'  <p class="card-text text-light">{{item.origin.name}}</p> '
    
	+'<p class="card-text text-light">{{item.gender}}</p> '
	                       
    +'                </div> '
    +'            </div> '
    +'        </div> '
	+'     </div>'
    +'    </div> ',

	data:function(){
		return{
			personajes:[]
		};
	},
	mounted(){
		this.pedirDatos();
	},
    methods:{
		pedirDatos(){
			fetch("http://192.168.1.2/rym/personajes")
			.then(resultado=>resultado.json())
			.then(resultado=>{
				this.personajes=resultado.results;
				console.log(this.personajes);
			})
		}

	},  
};