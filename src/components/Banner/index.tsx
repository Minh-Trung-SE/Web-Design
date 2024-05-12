import React from 'react';
import Container from "components/Container";

const Banner = () => {
    return (
        <Container className="space-y-4">
            <div className="space-y-2">
                <h1 className="font-medium text-deep-carrot-orange text-6xl">Web Design</h1>
                <h2 className="font-medium text-lg">Where Innovation Meets Affordability</h2>
            </div>
            <p>
                Our passionate team crafts visually stunning, high-performance websites tailored to your brand
                and business goals.
                <br/> With expertise in the latest technologies and a keen eye for detail, we
                deliver innovative yet cost-effective solutions that elevate your online presence and drive
                engagement. Experience the perfect blend of creativity, technical prowess, and affordability.
            </p>
        </Container>
    );
};

export default Banner;