import React from "react";
import Container from "@/components/custom/container";

const JoinTheActionSection = () => {
	const boxClass = "text-center rounded-2xl p-6 flex flex-col justify-between min-h-[260px] shadow-lg ";
	return (
		<Container className="lg:mt-[140px] mt-20">
			<h2 className="text-4xl lg:text-5xl font-bold text-center pb-6">Join the Action</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-8 gap-x-6 mx-auto" style={{ marginTop: "40px" }}>
				<img src="/images/1-join-public-contest.png" alt="Join Public Contest" className="w-full h-full" />
				<img src="/images/2-simple-rule.png" alt="Simple Rule" className="w-full h-full" />
				<img src="/images/3-private-contest.png" alt="Private Contest" className="w-full h-full" />
				<img src="/images/4-leaderboard.png" alt="Leaderboard" className="w-full h-full" />
			</div>
		</Container>
	);
};

export default JoinTheActionSection;
