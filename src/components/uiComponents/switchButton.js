import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
// import { orange } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const color = '#ff6987';
const OrangeSwitch = withStyles({
    switchBase: {
        color: color,
        '&$checked': {
            color: color,
        },
        '&$checked + $track': {
            backgroundColor: color,
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function SwitchButton(props) {
    const { label, onChange, checked } = props;
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="top"
                    control={<OrangeSwitch checked={checked}
                    onChange={() => onChange(label.toLowerCase())}/>
                    }
                    label={label}
                    labelPlacement="start"
                   
                />
                {/* <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Switch color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="End"
                    labelPlacement="end"
                /> */}
            </FormGroup>
        </FormControl>
    );
}