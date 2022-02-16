class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    return (
      <div className="Machine">
        <h2>
          {s1} {s2} {s3}
        </h2>
        <h2>{winner ? "Winner!" : "Loser!"}</h2>
      </div>
    );
  }
}
