import Link from "next/link";

export default function ExperiencesTimeline() {
    return (
        <div className="w-full md:w-1/2 flex flex-col mx-auto md:mx-0 md:items-start md:justify-start md:pr-2 border-b pb-5 md:pb-0 md:border-0">
            <h2 className="font-medium text-2xl mb-2 px-2">EXPERIENCES</h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        October 2021 - Sep 2022 | 11 month
                    </time>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Erasmus+ Internship
                    </h3>
                    <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                        Volunteer Software Engineer
                    </h5>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        I implemented various artificial intelligence projects with Python & Java.
                    </p>
                </li>
               {/*  <li className="mb-4 px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        November 2021 - Mar 2022 | 5 month
                    </time>
                    <h3>
                        <Link
                            href="https://balikesir.edu.tr/"
                            target="_blank"
                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                        >
                            IT Intern
                        </Link>
                    </h3>
                    <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                        Balikesir University
                    </h5>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Completed a valuable IT internship at Balikesir University, gaining hands-on experience in supporting and maintaining IT infrastructure while contributing effectively to the universitys technology initiatives.
                    </p>
                </li> */}
            </ol>
        </div>
    );
}
