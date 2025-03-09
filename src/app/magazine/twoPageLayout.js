const twoPageLayout = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {props.pages.map((page) => (
        <div key={page.key} style={{ flex: "0 0 50%" }}>
          {page.renderPage()}
        </div>
      ))}
    </div>
  );
};
