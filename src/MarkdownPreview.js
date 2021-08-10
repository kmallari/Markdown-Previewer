const MarkdownPreview = ({ source }) => {
  console.log("source", source);
  let marked = require("marked");
  return (
    <div id="preview">
      <div
        dangerouslySetInnerHTML={{
          __html: marked(source),
        }}
      ></div>
      {/* <hr /> */}
      {/* {marked(source)} */}
    </div>
  );
};

export default MarkdownPreview;
