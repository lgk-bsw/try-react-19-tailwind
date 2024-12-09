import { LayoutSidebar, LayoutSidebarInset } from "react-bootstrap-icons"
import Button from "./components/button"
import Heading from "./components/heading"
import "./wc/side-layout"

const SideLayout = "side-layout" as any

function App() {
	return (
		<SideLayout>
			<div slot="expand-toggler" className="size-full p-1">
				<div className="btn flex size-full items-center justify-center">
					<LayoutSidebar />
				</div>
			</div>
			<div slot="drawer-toggler" className="size-full p-1">
				<div className="btn flex size-full items-center justify-center">
					<LayoutSidebarInset />
				</div>
			</div>

			<div slot="overlay" className="bg-secondary-950/80 size-full" />

			<div
				slot="side"
				className="max-lg:text-secondary-500 max-lg:dark:bg-secondary-800 max-lg:dark:text-secondary-400 h-full max-lg:bg-white"
			>
				Side
			</div>

			<div className="size-full p-1">
				<div className="border-secondary-200 dark:border-secondary-800 size-full overflow-auto rounded-md border p-4">
					<Heading level={1} pageHeader>
						Hello World
					</Heading>

					<Button className="me-2">Click me</Button>

					<Button className="btn-secondary me-2">Click me</Button>

					<Button className="btn-primary me-2">Click me</Button>

					<Button className="btn-primary rounded-xl px-4 py-2">
						Click me
					</Button>
				</div>
			</div>
		</SideLayout>
	)
}

export default App
