import React from 'react'

const Header = (props) => {
    return (
        <div class="container-sm">
            <header className="App-header">
                <h2>{props.text}</h2>
            </header>
        </div>
    );
};

export default Header;