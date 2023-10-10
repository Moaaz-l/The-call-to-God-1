function welcome({ title, id }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <div id=""><div className="welcome" id={id}>{title}</div></div>;
}

export default welcome;
