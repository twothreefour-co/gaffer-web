import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const Container = ({ children, className, style }: ContainerProps) => {
	return (
		<div className={`container mx-auto px-6 lg:px-16 2xl:px-6 xl:max-w-[1320px] ${className ?? ""}`} style={style}>
			{children}
		</div>
	);
};

export default Container;
