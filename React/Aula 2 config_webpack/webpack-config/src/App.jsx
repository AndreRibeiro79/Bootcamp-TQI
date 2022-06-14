import React from "react";
import mock from './mock'
import Button from './componets/Button'


const App = () => {

    const handleClick = (id) => {
        console.log('Deletar Cliente')
        alert(`ID do clinte: $(id)`)
    }
    
    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <button onClick={() => handleClick(customer.id)}>Deletar Cliente</button>
                </li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px'}} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
        
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a aula =D</p>
            <div>
                <ul>
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;