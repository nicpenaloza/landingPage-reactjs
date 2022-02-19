import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize
// }) => {
//     const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//     const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return (
//         <Link to='/sign-up' className='btn-mobile'>
//             <button
//                 className={`btn ${btnStyle} ${btnSize}`}
//                 onClick={onClick}
//                 type={type}
//             >
//                 {children}
//             </button>
//         </Link>
//     );
// };

export default function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) {
    const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/contact' className='btn-mobile'>
            <button
                className={`btn ${btnStyle} ${btnSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
}