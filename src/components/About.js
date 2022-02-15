import React from "react";

function About(props) {
    const { members } = props;

    return (

        <div >
            <ul>
                {members.map((member, index) => (
                    <ul key={index}>{member}</ul>
                ))}
            </ul>
        </div >
    );
};

export default About;