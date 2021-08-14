import React, { useState } from 'react';
import Switch from '../../components/Atoms/Switch';

const SwitchContainer = () => {
    const [state, setState] = useState<boolean>(false);

    const onChange = () => {
        setState(() => !state);
    };

    return <Switch state={state} onChange={onChange} />;
};

export default SwitchContainer;
