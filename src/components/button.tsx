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
        <button
            {...rest}
            type={type}
            className={clsx(
                "hover:bg-secondary-500/25 ring-primary-300 dark:ring-primary-700 ring-offset-primary-50 dark:ring-offset-primary-950",
                "cursor-pointer rounded-sm text-center ring-offset-2 focus:ring-2 focus:outline-none",
                className
            )}
        >
            {children}
        </button>
    )
}
