import { Input } from "@/components/ui/input";
import React from "react";

interface CustomInputProps {
	label: string;
	id: string;
	name: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	id,
	name,
	type = "text",
	placeholder,
	value,
	onChange,
	className = "",
	required = false,
}) => (
	<div className="flex flex-col gap-2">
		<label htmlFor={id} className="text-xs text-gray-350 mb-1">
			{label}
		</label>
		<Input
			id={id}
			name={name}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={`p-6 border-gray-350 text-white placeholder:text-gray-350 !ring-0 focus-visible:border-primary ${className}`}
			required={required}
		/>
	</div>
);

export default CustomInput;
