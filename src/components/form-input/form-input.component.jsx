import React from 'react';

import {FormInputContainer, FormInputLabel, GroupContainer} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer type="text" onChange={handleChange} {...otherProps} />
        {
            label ?
                (<FormInputLabel>
                    {label}
                </FormInputLabel>)
                : null
        }
    </GroupContainer>
);
export default FormInput;
