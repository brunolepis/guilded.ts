import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler, ReactNode } from 'react';

export default function NavLink({
	children,
	href,
	onClick,
}: {
	children: ReactNode;
	href: string;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	const { asPath } = useRouter();

	return (
		<Link
			href={href}
			className="rounded-md overflow-hidden text-white text-sm font-semibold transition ease-in-out duration-300"
			onClick={onClick}
		>
			<div
				className={`hover:bg-guilded-grey-dark py-2 px-3 ${
					(href === '/' ? asPath === href : asPath.startsWith(href)) &&
					'bg-guilded-grey-light border-b-4 border-guilded-gilded'
				}`}
			>
				{children}
			</div>
		</Link>
	);
}
