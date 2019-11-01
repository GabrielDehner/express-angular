import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import {NgForm} from "@angular/forms";
import {Notes} from "../../models/notes";

//para usar materialize
declare var M: any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.getNotes();
  }

  //agregar nota
  addNotes(form?: NgForm) {
    if(form.value._id) {
      this.notesService.putNotes(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getNotes();
          M.toast({html: 'Actualizado correctamente'});
        });
    } else {
      this.notesService.postNotes(form.value)
        .subscribe(res => {
          this.getNotes();
          this.resetForm(form);
          M.toast({html: 'Guardado correctamente'});
        });
    }

  }
  getNotes(){
    this.notesService.getNotes()
      .subscribe(res =>{
        this.notesService.notes = res as Notes[];
        console.log(res);
      })
  }
  editNotes(notes: Notes){
    this.notesService.selectedNotes = notes;
  }

  deleteNotes(_id: string){
    if(confirm('Estas seguro de querer eliminarlo?')){
      this.notesService.deleteNotes(_id)
        .subscribe(res=>{
          this.getNotes();
          M.toast({html: 'Eliminado satisfactoriamente'});
        });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.notesService.selectedNotes = new Notes();
    }

  }


}
