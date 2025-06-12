import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CustomButton from "../custom/custom-button";
import Container from "../custom/container";

const faqData = [
	{
		id: "faq-1",
		question: "How do I join a contest?",
		answer:
			"Go to the Contests page, tap on any contest you like, view the rules and prize info, and select Join Contest. Make sure you've picked your team and have enough funds in your wallet.",
	},
	{
		id: "faq-2",
		question: "Can I change my team after joining a contest?",
		answer: "No, once you've joined a contest, your team is locked for that contest.",
	},
	{
		id: "faq-3",
		question: "What happens if a player I selected doesn't play?",
		answer: "If a player doesn't play, they will score zero points for that contest.",
	},
	{
		id: "faq-4",
		question: "Can I join multiple contests at once?",
		answer: "Yes, you can join as many contests as you like, as long as you meet the entry requirements.",
	},
	{
		id: "faq-5",
		question: "How do I add money to my wallet?",
		answer: "Go to the Wallet section and follow the instructions to add funds using your preferred payment method.",
	},
	{
		id: "faq-6",
		question: "Why was my withdrawal request rejected?",
		answer: "Withdrawal requests may be rejected if you have not met the minimum withdrawal amount or if your account information is incomplete.",
	},
	{
		id: "faq-7",
		question: "How can I change my account details?",
		answer: "Go to your profile settings to update your account details.",
	},
];

const FAQSection = () => (
	<section className="">
		<Container className="mt-28">
			<div className="grid lg:grid-cols-2 gap-12 items-start">
				{/* Left Content */}
				<div className="space-y-6">
					<h2 className="text-3xl lg:text-4xl leading-tight font-semibold mb-4 max-w-md">Frequently Asked Questions</h2>
					<p className="text-gray-350 text-sm lg:text-base max-w-xl">
						Can't find the answers you are looking for or you've got more questions? reach out to us today
					</p>

					<CustomButton variant="secondary" className="w-fit">
						Contact Us
					</CustomButton>
				</div>
				{/* Right Content - FAQ Accordion */}
				<div className="space-y-4">
					<Accordion type="single" collapsible className="w-full">
						{faqData.map((faq) => (
							<AccordionItem key={faq.id} value={faq.id} className="border-gray-800">
								<AccordionTrigger className="text-left text-white hover:text-yellow-400 hover:no-underline py-6">{faq.question}</AccordionTrigger>
								<AccordionContent className="text-gray-400 pb-6">{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</Container>
	</section>
);

export default FAQSection;
