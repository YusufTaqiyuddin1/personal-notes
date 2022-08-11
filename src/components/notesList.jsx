import NoteCard from "./noteCard";

const NotesList = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2>{label}</h2>
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan.</p>
      ) : (
        <div className="notes-list">
          {notes?.map((note) => (
            <NoteCard key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NotesList;
