// Note tipi tanımlanıyor
export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

// State tipimiz
export interface NotesState {
  notes: Note[];
}
