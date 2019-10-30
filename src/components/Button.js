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

const MyButtonASU = styled(TheButton)({
    background: 'linear-gradient(45deg, #8C1D40 30%, #bb3434 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(140,29,64, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

const MyButtonBlue = styled(TheButton)({
    background: 'linear-gradient(30deg, #1b40de, #2cb4ed)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(44, 180, 237, .1)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'theme': props.theme || "red"
        };
    }

    render() {
        return (
            <div>
                {
                    (this.state.theme == "red") && (

                        <MyButton
                            {...this.props}
                        >
                            {this.props.children}
                        </MyButton>
                    )
                }

                {
                    (this.state.theme == "blue") && (
                        <MyButtonBlue
                            {...this.props}
                        >
                            {this.props.children}
                        </MyButtonBlue>
                    )
                }

                {
                    (this.state.theme == "asu") && (
                        <MyButtonASU
                            {...this.props}
                        >
                            {this.props.children}
                        </MyButtonASU>
                    )
                }

            </div>
        );
    }
}

export default Button;