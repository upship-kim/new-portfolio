import React, { useState } from 'react';
import SwitchForm from './SwitchForm';

const SwitchContainer = () => {
    const [state, setState] = useState<boolean>(false);

    const onChange = () => {
        setState(() => !state);
    };

    return <SwitchForm state={state} onChange={onChange} />;
};

export default SwitchContainer;
