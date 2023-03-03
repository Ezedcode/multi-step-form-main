import React from 'react';
import Container from './styles';

const Step = ({ step, name, active }) => {
    return (
        <Container active={active}>
            <span>{step}</span>
            <div>
                <span>
                    STEP {step}
                </span>
                <br />
                <span>
                    {name}
                </span>
            </div>
        </Container>
    );
};

export default Step;