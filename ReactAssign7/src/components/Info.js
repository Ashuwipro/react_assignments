export default function Info(props) {
  const styles = {
    color: "blue",
    fontWeight: "bold",
    fontSize: "30px",
    marginLeft: "30px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  return (
    <div style={styles}>
      <div>Display Song Info using in memory JSON</div>
      <div>Number of songs in the playlist : {props.count}</div>
    </div>
  );
}
