import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	id?: string;
}

const Container = ({ children, className, style, id }: ContainerProps) => {
	return (
		<div className={`container mx-auto px-6 lg:px-16 2xl:px-6 xl:max-w-[1320px] ${className ?? ""}`} style={style} id={id}>
			{children}
		</div>
	);
};

export default Container;
