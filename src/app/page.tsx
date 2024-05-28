import Client from "./client";

export default async function Home() {
	const countries = await fetch("https://restcountries.com/v3.1/all");
	const countriesData = await countries.json();
	console.log(
		countriesData.map((country: { name: { common: string } }) => country)
	);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{/* {countriesData.map(
				(country: { name: { common: string } }, index: number) => (
					<div key={index}>
						<h1>{country.name.common}</h1>
					</div>
				)
			)} */}
			<Client countries={countriesData} />
		</main>
	);
}
