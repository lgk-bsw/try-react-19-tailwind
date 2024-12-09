import Button from "./components/button"
import Heading from "./components/heading"
// import Layout from "./components/layout"

import "./wc/layout"

function App() {
    return (
        <my-layout>
            <div slot="side" className="h-dvh bg-amber-300 shadow-2xl">
                Side
            </div>

            <div className="p-4 md:container md:mx-auto">
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
        </my-layout>
    )
}

export default App
