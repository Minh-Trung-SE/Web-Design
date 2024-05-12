import React from 'react';
import Container from "components/Container";

const Team = () => {
    const members = [
        {
            name: "John Doe",
            position: "CEO",
            image: "https://viatour-reactjs.ibthemespro.com/img/destinationCards/1/1.png",
        },
        {
            name: "Jane Doe",
            position: "CTO",
            image: "https://viatour-reactjs.ibthemespro.com/img/destinationCards/1/2.png",
        },
        {
            name: "John Smith",
            position: "Lead Developer",
            image: "https://viatour-reactjs.ibthemespro.com/img/destinationCards/1/3.png",
        },
        {
            name: "Jane Smith",
            position: "Lead Designer",
            image: "https://viatour-reactjs.ibthemespro.com/img/destinationCards/1/4.png",
        },
    ]
    return (

        <Container className="space-y-20">
            <div className="w-fit mx-auto">
                <h2 className="text-2xl font-semibold text-center">Meet the Team</h2>
                <p>Meet our team Of professionals to serve you</p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {
                    members.map(
                        (member, index) => (
                            <li
                                key={index}
                                className="space-y-2"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 block mx-auto rounded-full"
                                />
                                <div>
                                    <h3 className="text-center font-medium text-lg">{member.name}</h3>
                                    <p className="text-center text-sm">{member.position}</p>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        </Container>
    );
};

export default Team;