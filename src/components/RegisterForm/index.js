import React from "react";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: '',
            yourPhone: '',
            accounts: []
        };

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(value, name);
        this.setState({
            [name]: value
        });
    };

    register = (event) => {
        console.log('---');
        event.preventDefault();
        let accounts = this.state.accounts;
        accounts.push({
            name: this.state.yourName,
            phone: this.state.yourPhone
        });
        this.setState({
            accounts,
            yourName: '',
            yourPhone: ''
        })
    };

    render() {
        return (
            <div>
                <h3>Register an account</h3>
                <p className="description">Handling Events, setState, Conditional Rendering, Lists and Keys</p>
                <form onSubmit={this.register}>
                    <input type="text" placeholder="Your name" value={this.state.yourName} name="yourName"
                           onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Your phone" value={this.state.yourPhone} name="yourPhone"
                           onChange={this.handleInputChange}/>
                    <button type="submit">Save</button>
                </form>

                <div className="">
                    {!!this.state.accounts.length ? (
                        <React.Fragment>
                            <h3>Registered accounts</h3>
                            <ul>
                                {this.state.accounts.map((account, index) => (
                                    <li key={index}>Name: {account.name || 'Null'}, phone: {account.phone || 'Null'}</li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ) : (
                        <p>There is no accounts</p>
                    )}
                </div>
            </div>
        );
    }
}

export default RegisterForm
