import React from "react";

class Record extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  fetch(process.env.REACT_APP_API_ENDPOINT + "users/delete", {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: this.props.id }),
  }).then(async response => {
      if (!response.ok) {
          return <h1>Something went wrong.</h1>;
      } else {
          if (await response.json()) {
            this.props.update()
          }
      }
  })
}


render() {
  return (
    <div className="bp4-card single-record">
      <p>{this.props.day}</p>
      <h2>{this.props.answer ? '🥳' : '🙂'}</h2>
      <p>{this.props.notes}</p>
      <button
        onClick={this.handleClick}
      >
        DELETE
      </button>
    </div>
  );
}
}

export default Record;