import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    const errorShow = useRouteError();
    console.log(errorShow);
    return (
        <div>
    <section className="flex items-center h-[640px] p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>{errorShow.status}
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">{errorShow.statusText}</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;