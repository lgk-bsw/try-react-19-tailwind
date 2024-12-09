export interface DrawerProps {
	children?: React.ReactNode
	sideChildren?: React.ReactNode
	id: string
}

export default function Drawer({ children, sideChildren, id }: DrawerProps) {
	return (
		<div className="drawer relative grid-cols-[max-content_auto]">
			<input
				id={id}
				type="checkbox"
				className="drawer-toggle peer fixed h-0 w-0 appearance-none opacity-0"
			/>
			<div className="drawer-content col-start-2 row-start-1 min-w-0">
				{children}
			</div>
			<div className="drawer-side pointer-events-none fixed start-0 top-0 col-start-1 row-start-1 grid h-dvh w-full grid-cols-1 grid-rows-1 items-start justify-items-start overflow-x-hidden overflow-y-hidden overscroll-contain *:col-start-1 *:row-start-1 *:not-[.drawer-overlay]:-translate-x-full peer-checked:pointer-events-auto peer-checked:visible peer-checked:overflow-y-auto peer-checked:*:not-[.drawer-overlay]:translate-x-0">
				<label
					htmlFor={id}
					aria-label="close sidebar"
					className="drawer-overlay dark:bg-secondary-900/50 sticky top-0 col-start-1 row-start-1 place-self-stretch bg-white/50 backdrop-blur-xs"
				></label>
				<div className="text-bg-body col-start-1 row-start-1 min-h-full w-80 p-4 shadow-2xl transition-transform duration-300 ease-out will-change-transform">
					{sideChildren}
				</div>
			</div>
		</div>
	)
}
