import React from "react";
import Container from "../custom/container";
import CustomButton from "../custom/custom-button";
import Link from "next/link";

const Header = () => {
	return (
		<header className="">
			<Container className="border-b-[0.2px]" style={{ borderColor: "rgba(66,66,66,0.5)" }}>
				<div className="flex items-center justify-between py-5">
					<Link href="./" className="">
						<img src="/images/logo.png" alt="Gaffer Logo" className="h-14" />
					</Link>
					<Link href="./#footer">
						<CustomButton variant="primary">Get App Link</CustomButton>
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Header;
