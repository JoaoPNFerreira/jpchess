import { Junge } from "next/font/google";

const junge = Junge({
  	subsets: ["latin"],
  	weight: "400",
});

export default function Header() {
  	return (
		<div className="h-header fixed top-0 w-full flex items-center justify-center">
			<h1 className="text-6xl font-semibold text-white">JP Chess</h1>
		</div>
  	);
}
