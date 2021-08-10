const MarkdownInput = ({ handleChange, initialText }) => {
  return (
    <div id="editor">
      <textarea
        name="text-area"
        onChange={handleChange}
      >{initialText}</textarea>
    </div>
  );
};

export default MarkdownInput;
