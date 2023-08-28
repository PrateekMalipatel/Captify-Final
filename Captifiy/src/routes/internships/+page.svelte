<script lang="ts">
	import { dataset_dev } from "svelte/internal";

	const internships = [
		{
			name: "IBM Internship Program",
			url: "https://www.indeed.com/q-IBM-Internship-jobs.html"
		},
		{
			name: "Walt Disney World Internship Program",
			url: "https://www.indeed.com/q-Walt-Disney-World-Internship-jobs.html"
		},
		{
			name: "Lockheed Martin Internship Program",
			url: "https://www.indeed.com/q-Lockheed-Martin-Internship-jobs.html"
		},
		{
			name: "Amazon Internship Program",
			url: "https://www.indeed.com/q-Amazon-Internship-jobs.html"
		},
		{
			name: "Pfizer Internship Program",
			url: "https://www.indeed.com/q-Pfizer-Internship-jobs.html"
		},
		{
			name: "General Electric Internship Program",
			url: "https://www.indeed.com/q-General-Electric-Internship-jobs.html"
		},
		{
			name: "Intel Internship Program",
			url: "https://www.indeed.com/q-Intel-Internship-jobs.html"
		},
		{
			name: "Microsoft Internship Program",
			url: "https://www.indeed.com/q-Microsoft-Internship-jobs.html"
		},
		{
			name: "JP Morgan Chase Internship Program",
			url: "https://www.indeed.com/q-JP-Morgan-Chase-Internship-jobs.html"
		},
		{
			name: "Goldman Sachs Internship Program",
			url: "https://www.indeed.com/q-Goldman-Sachs-Internship-jobs.html"
		},
		{
			name: "Boeing Internship Program",
			url: "https://www.indeed.com/q-Boeing-Internship-jobs.html"
		},
		{
			name: "Facebook Internship Program",
			url: "https://www.indeed.com/q-Facebook-Internship-jobs.html"
		},
		{
			name: "Salesforce Internship Program",
			url: "https://www.indeed.com/q-Salesforce-Internship-jobs.html"
		},
		{
			name: "Deloitte Internship Program",
			url: "https://www.indeed.com/q-Deloitte-Internship-jobs.html"
		},
		{
			name: "Apple Internship Program",
			url: "https://www.indeed.com/q-Apple-Internship-jobs.html"
		},
		{
			name: "ExxonMobil Internship Program",
			url: "https://www.indeed.com/q-ExxonMobil-Internship-jobs.html"
		},
		{
			name: "Coca-Cola Internship Program",
			url: "https://www.indeed.com/q-Coca-Cola-Internship-jobs.html"
		},
		{
			name: "Procter & Gamble Internship Program",
			url: "https://www.indeed.com/q-Procter-&-Gamble-Internship-jobs.html"
		},
		{
			name: "Cisco Internship Program",
			url: "https://www.indeed.com"
		},
		{
			name: "General Electric Internship Program",
			url: "https://www.ge.com/careers/students/internships"
		},
		{
			name: "Caterpillar Internship Program",
			Url: "https://www.caterpillar.com/en/careers/career-areas/students-and-graduates"
		},
		{
			name: "Marketing Internship at Nike",
			url: "https://www.internships.com/marketing/marketing-internship-at-nike"
		},
		{
			name: "Software Development Internship at Google",
			url: "https://www.internships.com/computer-science/software-development-internship-at-google"
		},
		{
			name: "Finance Internship at J.P. Morgan",
			url: "https://www.internships.com/finance/finance-internship-at-jp-morgan"
		},
		{
			name: "Social Media Internship at BuzzFeed",
			url: "https://www.internships.com/social-media/social-media-internship-at-buzzfeed"
		},
		{
			name: "Human Resources Internship at Disney",
			url: "https://www.internships.com/human-resources/human-resources-internship-at-disney"
		},
		{
			name: "Graphic Design Internship at Adobe",
			url: "https://www.internships.com/graphic-design/graphic-design-internship-at-adobe"
		},
		{
			name: "Marketing and Communications Internship at IBM",
			url: "https://www.internships.com/marketing/marketing-and-communications-internship-at-ibm"
		},
		{
			name: "Data Analytics Internship at Microsoft",
			url: "https://www.internships.com/computer-science/data-analytics-internship-at-microsoft"
		},
		{
			name: "Journalism Internship at CNN",
			url: "https://www.internships.com/journalism/journalism-internship-at-cnn"
		},
		{
			name: "Business Development Internship at Amazon",
			url: "https://www.internships.com/business/business-development-internship-at-amazon"
		},
		{
			name: "Environmental Science Internship at the National Park Service",
			url: "https://www.internships.com/environmental-science/environmental-science-internship-at-the-national-park-service"
		},
		{
			name: "Public Relations Internship at Edelman",
			url: "https://www.internships.com/public-relations/public-relations-internship-at-edelman"
		},
		{
			name: "Web Development Internship at Facebook",
			url: "https://www.internships.com/computer-science/web-development-internship-at-facebook"
		},
		{
			name: "Artificial Intelligence Internship at Intel",
			url: "https://www.internships.com/computer-science/artificial-intelligence-internship-at-intel"
		},
		{
			name: "Medical Research Internship at Mayo Clinic",
			url: "https://www.internships.com/medical/medical-research-internship-at-mayo-clinic"
		},
		{
			name: "Fashion Internship at Vogue",
			url: "https://www.internships.com/fashion/fashion-internship-at-vogue"
		},
		{
			name: "Product Design Internship at Apple",
			url: "https://www.internships.com/design/product-design-internship-at-apple"
		},
		{
			name: "Marketing Analytics Internship at Netflix",
			url: "https://www.internships.com/marketing/marketing-analytics-internship-at-netflix"
		},
		{
			name: "Engineering Internship at SpaceX",
			url: "https://www.internships.com/engineering/engineering-internship-at-spacex"
		},
		{
			name: "Architecture Internship at Gensler",
			url: "https://www.internships.com/architecture/architecture-internship-at-gensler"
		}
	];

	let searchString = "";
	$: selectedInternship = internships.filter((internships) => {
		return internships.name.toLowerCase().includes(searchString.toLocaleLowerCase());
	});

	import * as THREE from "three";
	// @ts-ignore
	import WAVES from "vanta/dist/vanta.waves.min";
	// @ts-ignore
	function vanta(node) {
		WAVES({
			el: node,
			THREE: THREE,
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			zoom: 1.0,
			color: 0x818cf8
		});
	}
</script>

<div class="relative">
	<!-- <div id="bg-canvas" use:vanta class="absolute w-full h-full -z-10" /> -->
	<div class="grid place-items-center mt-4">
		<input
			bind:value={searchString}
			type="search"
			class="relative m-0 mt-4 w-1/3 min-w-0 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 black:placeholder:text-black dark:focus:border-primary"
			id="exampleSearch"
			placeholder="Search Internships..."
		/>
	</div>
	<div class="flex w-full h-full justify-center items-center mt-2 px-24">
		<div class="courses grid grid-cols-3 gap-4">
			{#each selectedInternship as internship}
				<div
					class="course flex flex-col text-white justify-between items-center border-2 bg-[#2B3148] w-[500px] h-[300px] p-4 rounded-xl hover:border-2 hover:border-indigo-400 shadow-none hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 transition cursor-pointer py-16"
				>
					<h1 class="text-2xl font-bold text-center">{internship.name}:</h1>
					<a
						class="bg-indigo-400 hover:bg-indigo-600 py-3 px-8 rounded-lg text-white text-lg border-b-4 border-indigo-500 hover:border-indigo-800 transition duration-300"
						href={internship.url}
						target="_blank">Apply Now</a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
