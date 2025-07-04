import React from "react";
import Container from "../custom/container";
import CustomButton from "../custom/custom-button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Header = () => {
	return (
		<header className="">
			<Container className="border-b-[0.2px]" style={{ borderColor: "rgba(66,66,66,0.5)" }}>
				<div className="flex items-center justify-between py-5">
					<Link href="./" className="">
						<img src="/images/logo.png" alt="Gaffer Logo" className="h-7" />
					</Link>

					<a href="./#how-to-play" className="items-center gap-1 hidden lg:flex">
						<text className="text-[#FBF9FF] text-base">How to Play</text>
						<ChevronRight className="w-4 h-4" />
					</a>

					<Link href="./#app-link">
						<CustomButton variant="primary">Get App Link</CustomButton>
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Header;
