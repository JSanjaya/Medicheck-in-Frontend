import React from "react"

class CreateRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch(process.env.REACT_APP_API_ENDPOINT + "users/create", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answer: this.props.answer, notes: this.state.value, day: new Date().toLocaleString().slice(0, 8)}),
        }).then(async response => {
            if (!response.ok) {
                console.log("Something went wrong");
            } else {
                if (await response.json()) {
                    this.props.navigate('/');
                }
            }
        })
    }

    render() {
        return (
                <form className="creation-form" onSubmit={this.handleSubmit}>
                    <textarea rows={10} cols={50} alue={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
        );
    }

}

export default CreateRecord
