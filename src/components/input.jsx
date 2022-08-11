const Input = (attributes) => {
  const changeHandler = (event) => {
    if (attributes.name === "title") {
      const currentText = event.target.value;
      attributes.onChange((MaxChar) =>
        currentText.length <= 50 ? currentText : MaxChar
      );
    } else {
      attributes.onChange(event.target.value);
    }
  };

  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea
          {...attributes}
          spellCheck={false}
          value={attributes.value}
          onChange={changeHandler}
        />
      ) : (
        <input
          {...attributes}
          spellCheck={false}
          value={attributes.value}
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default Input;
