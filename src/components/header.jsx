import Input from "./input";

const Header = ({ search, updateQuery }) => {
  return (
    <header className="note-app__header">
      <h1 className="note-app__title">Notes</h1>
      <span className="note-search">
        <Input
          className="note-search"
          value={search}
          onChange={updateQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Cari catatan..."
        />
      </span>
    </header>
  );
};

export default Header;
