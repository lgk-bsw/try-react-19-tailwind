import clsx from "clsx"

export interface LayoutProps {
	children?: React.ReactNode
	sideChildren?: React.ReactNode
	rootClass?: string
	togglerClass?: string
	sideClass?: string
	contentClass?: string
	drawerClass?: string
}

export default function Layout({
	children,
	sideChildren,
	rootClass = "bg-secondary-50 dark:bg-secondary-950",
	togglerClass = "btn m-1",
	sideClass = "transition-transform duration-300 ease-out will-change-transform dark:max-lg:bg-secondary-900 max-lg:bg-white max-lg:shadow-2xl",
	contentClass = "dark:text-secondary-400 border-secondary-200 dark:bg-secondary-900 dark:border-secondary-800 mx-1 mb-1 rounded-md border bg-white shadow-sm",
	drawerClass = "bg-secondary-950/50"
}: LayoutProps) {
	return (
		<div
			className={clsx(
				"root relative grid h-dvh grid-cols-[0_3rem_15rem_auto] grid-rows-[3rem_auto]",
				rootClass
			)}
		>
			<svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
				<symbol id="bi-list" viewBox="0 0 16 16">
					<path
						fill-rule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
					></path>
				</symbol>
			</svg>

			<input
				id="layout-expand"
				type="checkbox"
				className="hidden-input peer/expand fixed h-0 w-0 appearance-none opacity-0"
			/>
			<input
				id="layout-drawer"
				type="checkbox"
				className="hidden-input peer/drawer fixed h-0 w-0 appearance-none opacity-0"
			/>

			<label
				className={clsx(
					"toggler col-start-2 max-lg:hidden",
					togglerClass
				)}
				htmlFor="layout-expand"
				title="Toggle sidebar"
				role="button"
			>
				<svg
					className="inline-block size-[1em] fill-current"
					role="img"
				>
					<use xlinkHref="#bi-list" />
				</svg>
			</label>
			<label
				className={clsx("toggler col-start-2 lg:hidden", togglerClass)}
				htmlFor="layout-drawer"
				title="Toggle sidebar"
				role="button"
			>
				<svg
					className="inline-block size-[1em] fill-current"
					role="img"
				>
					<use xlinkHref="#bi-list" />
				</svg>
			</label>
			<header className="header col-start-3 col-end-5">Header</header>
			<div
				className={clsx(
					"side overflow-auto peer-checked/expand:lg:col-start-2 peer-checked/expand:lg:col-end-4",
					"max-lg:-translate-x-full max-lg:peer-checked/drawer:fixed max-lg:peer-checked/drawer:translate-x-0",
					"max-lg:min-h-full max-lg:w-80 max-lg:peer-checked/drawer:z-1",
					sideClass
				)}
			>
				{sideChildren}
			</div>
			<main
				className={clsx(
					"main overflow-auto",
					"col-start-2 col-end-5 peer-checked/expand:lg:col-start-4",
					contentClass
				)}
			>
				{children}
			</main>
			<label
				aria-label="close sidebar"
				htmlFor="layout-drawer"
				className={clsx(
					"overlay fixed inset-0 hidden max-lg:peer-checked/drawer:block",
					drawerClass
				)}
			/>
		</div>
	)
}
