import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: "primary" | "secondary";
}

const CustomButton = ({ children, variant = "primary", className, ...props }: CustomButtonProps) => {
	const buttonClass = variant === "primary" ? "bg-primary text-black hover:bg-primary/90" : "bg-white text-black hover:bg-gray-200/90";

	return (
		<Button className={cn(buttonClass, "text-xs lg:text-sm font-semibold py-5 lg:px-6", className)} {...props}>
			{children}
		</Button>
	);
};

export default CustomButton;
