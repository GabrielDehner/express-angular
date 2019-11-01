import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Notes } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  selectedNotes: Notes;
  notes: Notes[];

  readonly URL_API = 'http://localhost:3000/api/notes';

  constructor(private http: HttpClient) {
    this.selectedNotes = new Notes();
  }

  postNotes(notes: Notes) {
    return this.http.post(this.URL_API, notes);
  }

  getNotes() {
    return this.http.get(this.URL_API);
  }

  putNotes(notes: Notes) {
    return this.http.put(this.URL_API + `/${notes._id}`, notes);
  }

  deleteNotes(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}