import clsx from "clsx"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
}

export default function Button({
	children,
	className,
	type = "button",
	...rest
}: ButtonProps) {
	return (
		<button {...rest} type={type} className={clsx("btn", className)}>
			{children}
		</button>
	)
}
