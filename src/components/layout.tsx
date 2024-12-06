import clsx from "clsx"
import { useState } from "react"
import { List } from "react-bootstrap-icons"
import Button from "./button"

export interface LayoutProps {
    children?: React.ReactNode
    className?: string
    breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export default function Layout({
    children,
    className,
    breakpoint = "md"
}: LayoutProps) {
    const [expandSidebar, setExpandSidebar] = useState(true)

    return (
        <div
            className={clsx(
                "bg-secondary-50 dark:bg-secondary-950 grid h-dvh",
                "grid-cols-[0_3rem_15rem_auto] grid-rows-[3rem_auto]",
                className
            )}
        >
            <Button
                className="col-start-2 m-1"
                onClick={() => setExpandSidebar(!expandSidebar)}
                title="Toggle sidebar"
            >
                <List className="inline-block" />
            </Button>
            <header className="col-start-3 col-end-5">Header</header>
            <nav
                className={clsx("overflow-auto", {
                    [`${breakpoint}:col-start-2 ${breakpoint}:col-end-4`]:
                        expandSidebar
                })}
            >
                My nav
            </nav>
            <main
                className={clsx(
                    "dark:text-secondary-400 border-secondary-200 dark:bg-secondary-900 dark:border-secondary-800 mx-1 mb-1 overflow-auto rounded-md border bg-white shadow-sm",
                    "col-start-2 col-end-5",
                    { [`${breakpoint}:col-start-4`]: expandSidebar }
                )}
            >
                {children}
            </main>
        </div>
    )
}
