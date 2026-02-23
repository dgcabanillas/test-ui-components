import React from 'react';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

const Button = ({ children, onClick = () => {} }: ButtonProps) => {
	const handleClick = () => {
		console.log('@indigitalxp/Button clicked!');
		onClick();
	}

	return (
		<button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Custom Button { children }
		</button>
	);
}

export default Button;