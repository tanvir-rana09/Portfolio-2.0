import React, { ReactNode } from 'react'

const Button = ({
	type = 'submit',
	children,
	className = '',
}: {
	type: String;
	children: ReactNode;
	className: String;
}) => {
	return (
		<button className="uppercase px-12 py-2 border border-primary tracking-widest font-montserrat cursor-pointer">{children}</button>
	)
}

export default Button