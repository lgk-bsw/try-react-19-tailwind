import Heading from "./components/heading"
import Layout from "./components/layout"

function App() {
    return (
        <Layout>
            <div className="p-4 md:container md:mx-auto">
                <Heading level={1} pageHeader>
                    Hello World
                </Heading>
            </div>
        </Layout>
    )
}

export default App
