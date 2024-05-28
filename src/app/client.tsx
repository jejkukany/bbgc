"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

export default function Client(props: { countries: [any] }) {
	return (
		<div className="text-white gap-4 flex flex-col">
			{props.countries.map((country: any) => (
				<Card>
					<CardHeader>
						<CardTitle>
							<div className="flex items-center flex-row gap-2">
								<div>{country.flag}</div>
								<div>{country.name.common}</div>
							</div>
						</CardTitle>
					</CardHeader>
					<CardContent>{country.region}</CardContent>
				</Card>
			))}
		</div>
	);
}
