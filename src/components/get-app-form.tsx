import React, { useState } from "react";
import CustomButton from "./custom/custom-button";
import { NigeriaFlag, USAFlag } from "@/assets/icons";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@radix-ui/react-select";
import { Input } from "./ui/input";

const GetAppForm = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [countryCode, setCountryCode] = useState("+234");

	const handleGetAppLink = () => {
		// Handle app link generation
		console.log("Getting app link for:", countryCode + phoneNumber);
	};

	const getCountryFlag = (countryCode: string) => {
		if (countryCode === "+234") return <NigeriaFlag />;
		if (countryCode === "+1") return <USAFlag />;
	};

	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center max-w-md rounded-[10px] px-4 py-1" style={{ borderWidth: "0.4px", borderColor: "#5C5C5C" }}>
				<Select value={countryCode} onValueChange={setCountryCode}>
					<SelectTrigger className="bg-transparent border-none p-0 focus:ring-0 focus:outline-none">
						<div className="flex items-center lg:gap-3 ">
							{/* Flag image */}
							<span className="hidden lg:block">{getCountryFlag(countryCode)}</span>
							<span className="text-[#D9D9D9] text-xs lg:text-base">{countryCode}</span>
						</div>
					</SelectTrigger>
					<SelectContent className="bg-gray-900 border-gray-700">
						<SelectItem value="+234" className="flex items-center gap-2 text-white">
							{getCountryFlag("+234")}
							+234
						</SelectItem>
						<SelectItem value="+1" className="flex items-center gap-2 text-white">
							{getCountryFlag("+1")}
							+1
						</SelectItem>
					</SelectContent>
				</Select>

				{/* Divider */}
				<div className="h-full w-[1px] bg-gray-100"></div>

				<Input
					type="tel"
					placeholder="Enter phone number"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					className="flex-1 px-2 text-sm lg:text-base bg-transparent border-none text-white placeholder:text-[#5C5C5C] !ring-0 ring-transparent outline-transparent outline-none ml-0"
				/>
			</div>
			<CustomButton onClick={handleGetAppLink}>Get App Link</CustomButton>
		</div>
	);
};

export default GetAppForm;
