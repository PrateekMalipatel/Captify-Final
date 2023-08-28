<script lang="ts">
	import { dataset_dev } from "svelte/internal";

	const courses = [
		{
			name: "Computer Science from Harvard University",
			url: "https://www.edx.org/course/cs50s-introduction-to-computer-science"
		},
		{
			name: "Data Science Essentials from Microsoft",
			url: "https://www.edx.org/course/data-science-essentials"
		},
		{
			name: "Python: Absolute Beginner from Microsoft",
			url: "https://www.edx.org/course/introduction-to-python-absolute-beginner"
		},
		{
			name: "Blockchain Basics from Linux Foundation",
			url: "https://www.edx.org/course/blockchain-basics"
		},
		{
			name: "The Science of Happiness from UC Berkeley",
			url: "https://www.edx.org/course/the-science-of-happiness"
		},
		{
			name: "Artificial Intelligence (AI) from IBM",
			url: "https://www.edx.org/course/artificial-intelligence-ai"
		},
		{
			name: "Project Management from the University of Adelaide",
			url: "https://www.edx.org/course/introduction-to-project-management-2"
		},
		{
			name: "Cloud Computing from IBM",
			url: "https://www.edx.org/course/introduction-to-cloud-computing"
		},
		{
			name: "Data Analysis: Take it to the MAX() from Microsoft",
			url: "https://www.edx.org/course/data-analysis-take-it-to-the-max"
		},
		{
			name: "C++ from Microsoft",
			url: "https://www.edx.org/course/introduction-to-c-plus-plus"
		},
		{
			name: "Supply Chain Technology and Systems from MIT",
			url: "https://www.edx.org/course/supply-chain-technology-and-systems"
		},
		{
			name: "Machine Learning Fundamentals from IBM",
			url: "https://www.edx.org/course/machine-learning-fundamentals-4"
		},
		{
			name: "Critical Thinking & Problem-Solving from Rochester Institute of Technology",
			url: "https://www.edx.org/course/critical-thinking-problem-solving"
		},
		{
			name: "Data Science in Python from the University of Michigan",
			url: "https://www.edx.org/course/python-data-science-introduction"
		},
		{
			name: "Java Programming: Starting to Code with Java from LearnQuest",
			url: "https://www.edx.org/course/introduction-to-java-programming-starting-to-code-with-java"
		},
		{
			name: "Cybersecurity from IBM",
			url: "https://www.edx.org/course/introduction-to-cybersecurity"
		},
		{
			name: "Robotics from Columbia University",
			url: "https://www.edx.org/course/robotics-2"
		},
		{
			name: "Marketing Analytics from Berkeley",
			url: "https://www.edx.org/course/marketing-analytics"
		},
		{
			name: "Linux from Linux Foundation",
			url: "https://www.edx.org/course/introduction-to-linux"
		},
		{
			name: "Computer Vision from Microsoft",
			url: "https://www.edx.org/course/introduction-to-computer-vision"
		},
		{
			name: "Microsoft Power Platform Fundamentals",
			url: "https://skillshop.exceedlms.com/student/path/4484-microsoft-power-platform-fundamentals"
		},
		{
			name: "Salesforce Trailhead: Learn CRM Basics",
			url: "https://skillshop.exceedlms.com/student/path/5189-salesforce-trailhead-learn-crm-basics"
		},
		{
			name: "Adobe Photoshop CC for Beginners",
			url: "https://skillshop.exceedlms.com/student/path/4385-adobe-photoshop-cc-for-beginners"
		},
		{
			name: "Digital Marketing Foundations with Google Digital Garage",
			url: "https://skillshop.exceedlms.com/student/path/5376-digital-marketing-foundations-with-google-digital-garage"
		},
		{
			name: "Introduction to AWS Identity and Access Management (IAM)",
			url: "https://skillshop.exceedlms.com/student/path/4006-introduction-to-aws-identity-and-access-management-iam"
		},
		{
			name: "Data Analytics Fundamentals with Microsoft Excel",
			url: "https://skillshop.exceedlms.com/student/path/5082-data-analytics-fundamentals-with-microsoft-excel"
		},
		{
			name: "Facebook Blueprint: Introduction to Facebook Marketing",
			url: "https://skillshop.exceedlms.com/student/path/5149-facebook-blueprint-introduction-to-facebook-marketing"
		},
		{
			name: "Introduction to Tableau Desktop",
			url: "https://skillshop.exceedlms.com/student/path/3722-introduction-to-tableau-desktop"
		},
		{
			name: "AWS Cloud Practitioner Essentials",
			url: "https://skillshop.exceedlms.com/student/path/4416-aws-cloud-practitioner-essentials"
		},
		{
			name: "Introduction to Python",
			url: "https://skillshop.exceedlms.com/student/path/3723-introduction-to-python"
		},
		{
			name: "HubSpot Academy: Content Marketing",
			url: "https://skillshop.exceedlms.com/student/path/5314-hubspot-academy-content-marketing"
		},
		{
			name: "IBM Data Science Professional Certificate",
			url: "https://skillshop.exceedlms.com/student/path/5353-ibm-data-science-professional-certificate"
		},
		{
			name: "Introduction to Project Management",
			url: "https://skillshop.exceedlms.com/student/path/4181-introduction-to-project-management"
		},
		{
			name: "Introduction to Cybersecurity",
			url: "https://skillshop.exceedlms.com/student/path/4646-introduction-to-cybersecurity"
		},
		{
			name: "Social Media Marketing with Hootsuite",
			url: "https://skillshop.exceedlms.com/student/path/5378-social-media-marketing-with-hootsuite"
		},
		{
			name: "Introduction to Machine Learning",
			url: "https://skillshop.exceedlms.com/student/path/5190-introduction-to-machine-learning"
		},
		{
			name: "Coursera: Programming for Everybody (Getting Started with Python)",
			url: "https://skillshop.exceedlms.com/student/path/5145-coursera-programming-for-everybody-getting-started-with-python"
		},
		{
			name: "Introduction to AWS Database Services",
			url: "https://skillshop.exceedlms.com/student/path/4186-introduction-to-aws-database-services"
		},
		{
			name: "Introduction to Digital Accessibility",
			url: "https://skillshop.exceedlms.com/student/path/5351-introduction-to-digital-accessibility"
		},
		{
			name: "OpenAI: Deep Learning with Python",
			url: "https://skillshop.exceedlms.com/student/path/5211-openai-deep-learning-with-python"
		}
	];

	let searchString = "";
	$: selectedCourse = courses.filter((courses) => {
		return courses.name.toLowerCase().includes(searchString.toLocaleLowerCase());
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
			class="relative m-0 mt-4 block w-1/3 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 black:placeholder:text-neutral-200 dark:focus:border-primary"
			id="exampleSearch"
			placeholder="Search Courses..."
		/>
	</div>
	<div class="flex w-full h-full justify-center items-center mt-2 px-24">
		<div class="courses grid grid-cols-3 gap-4">
			{#each selectedCourse as course}
				<div
					class="course flex flex-col text-white justify-between items-center border-2 bg-[#2B3148] w-[500px] h-[300px] p-4 rounded-xl hover:border-2 hover:border-indigo-400 shadow-none hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 transition cursor-pointer py-16"
				>
					<h1 class="text-2xl font-bold text-center">{course.name}:</h1>
					<a
						class="bg-indigo-400 hover:bg-indigo-600 py-3 px-8 rounded-lg text-white text-lg border-b-4 border-indigo-500 hover:border-indigo-800 transition duration-300"
						href={course.url}
						target="_blank">Join Now</a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
