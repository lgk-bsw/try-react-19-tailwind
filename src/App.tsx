import Button from "./components/button"
import Heading from "./components/heading"
import Layout from "./components/layout"

function App() {
    return (
        <Layout>
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
        </Layout>
    )
}

export default App
