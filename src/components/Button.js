import React from 'react';
import { styled } from '@material-ui/styles';
import TheButton from '@material-ui/core/Button';

// const blue = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//     },
// });

// let classes = blue();
const MyButton = styled(TheButton)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'theme': props.theme || "blue"
        };
    }

    render() {
        return (
            <MyButton
                {...this.props}
            >
                {this.props.children}
            </MyButton>
        );
    }
}

export default Button;