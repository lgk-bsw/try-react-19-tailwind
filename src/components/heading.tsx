import clsx from "clsx"

export interface HeadingProps {
	children: React.ReactNode
	level: 1 | 2 | 3 | 4 | 5 | 6
	className?: string
	pageHeader?: boolean
}

export default function Heading({
	children,
	level,
	className,
	pageHeader
}: HeadingProps) {
	return (
		<div
			role="heading"
			aria-level={level}
			className={clsx(
				"text-secondary-800 dark:text-secondary-100 mt-4 mb-3 font-bold tracking-tight",
				{
					"text-3xl": level === 1,
					"text-2xl": level === 2,
					"text-xl": level === 3,
					"text-lg": level === 4,
					"text-md": level === 5,
					"text-sm": level === 6,
					"border-secondary-200 dark:border-secondary-800 border-b-4 pb-1":
						pageHeader
				},
				className
			)}
		>
			{children}
		</div>
	)
}
