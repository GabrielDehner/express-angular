export class Notes {

    constructor(_id= '', titulo='', descripcion='', importancia=''){
      this._id =_id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.importancia = importancia;
  
    }
    _id: string;
    titulo: string;
    descripcion: string;
    importancia: string;
  }
  