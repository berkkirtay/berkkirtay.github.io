import { Link } from 'react-router-dom';

import BlogFooter from "../../blogComponentes/BlogFooter"

import dna from "./dna.jpg"
import crossingover from "./crossing-over.jpg"

const Blog1 = ({ blog }) => {
    return (
        <div className='blog'>
            <h1 style={{ display: "inline" }}>{blog.title}</h1>

            <Link to="/blogs" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }} ><button className="button">Go back</button></Link>
            <hr />
            <div className='blogBlock' style={{ padding: "1%" }}>
                <p>
                    Nowadays, everyone talks about artificial intelligence. We can say AI is almost the most hyped area of computer science. What about how AI works? What kind of algorithms do we use to make our computers perform those intelligent things? The current state of AI is composed of several major concepts. The one I want to talk about is genetic algorithms. As its name says, it refers to the basic evolution mechanisms. There are different types and implementations of genetic algorithms. In fact, implementations can differ based on the scenario and model.
                </p>
                <img src={dna} alt="Cryptography Image" width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />
                <h3>A Simple Description:</h3>
                <p>
                    Conceptually, we use mechanisms of evolution theory to implement this algorithm. Let's think of a program which tries to find the most feasible and fastest way to transport between two cities. Our program will use the natural selection mechanism so that it will generate two random paths between two given cities. We can call those paths initial population. This natural generation must be indeterministic, so we would not observe similar series of generations. This is also important to emulate real-life scenarios; just like all the humans have totally different DNA sequences. So, we can say that we simply map our model parameters to electronic gene sequence. After we generate our initial population, our program will perform a breeding loop with them. After breeding, we will have a new population (paths). We can call those child population.
                </p>
                <img src={crossingover} alt="Cryptography Image" width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />
                <p>
                    But how does breeding work? During breeding, we use the method of crossing over; parents exchange their genes to create their children. It basically works like that in the picture above. In our case, instead of chromosomes, program parameters are being exchanged. At this moment of the program, we will select the better genes and continue our breeding cycles. So, this is the point that natural selection concept is being used. Most adaptable genes are selected against worse ones.
                </p>
                <p>
                    But how can we get random genes out of breeding cycles? We cannot observe different parameters with only crossing over. We need mutation! Mutation is the only way for evolution! This means we can have different parameters out of nowhere on our program. We can implement mutations to our breeding cycles to get variation between parent and child nodes. With this way after several times of breeding cycles, we will have different types of paths. Our program has a unique way to check if a path is a better solution or not. So, after a specified amount of time, we will end up having the most adaptable genes (most feasible path) in our program loop.
                </p>

                <h3>An Evolved Antenna:</h3>
                <div style={{ margin: "auto" }}>
                    <div style={{ float: "left" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/St_5-xband-antenna.jpg" alt="Wiki img" width="50%" height="50%" style={{ display: "block", margin: "auto", padding: "1%" }} />
                    </div>
                    <div style={{ marginBottom: "16%", paddingTop: "13%" }}>
                        <i className="italic" >"The 2006 NASA ST5 spacecraft antenna. This complicated shape was found by an evolutionary computer design program to create the best radiation pattern. It is known as an evolved antenna." (Wikipedia)</i>
                    </div>
                </div>

                <p>
                    This was a quick way to explain how a genetic algorithm would work. We can use or apply different techniques or other mechanisms based on our model or purposes. From the software perspective, a genetic algorithm would make an object work like an animal who constantly tries to survive in wild. There is a constant fight between all species or among same species in nature. There is a saying that the one most adaptable to change will survive. This is the most significant concept about evolution and nature.
                    In software we change the term adaptability with optimality. There is never a perfect solution. It is pretty much like nature; there is no perfect DNA sequence, but there will always be one which is the most adaptable. When we implement genetic algorithms, we follow this essential rule of evolution. Our programs will not try to find the global optimal (perfect) solution, rather they will try to estimate it.
                </p>

                <p>
                    So, why do we use genetic algorithms in the first place? Don't we need an optimal solution instead of an estimated one? The reasons for this can be lack of computational power or lack of information about models. Even if we entirely know our model and when we try to find an optimal solution using an exact algorithm, we would need to wait for a long amount of time because an exact algorithm will try every single possibility for our model. But those algorithms do not work in polynomial time complexity. They can have exponential time complexities and therefore consume too much computational power and until we found an optimal solution with them. Genetic algorithms, on the other hand, will estimate a solution in a very short time. Genetic algorithms are also called as stochastic search heuristics. They are faster, more feasible, but they do not give an optimal solution.
                </p>

                <p>
                    Why genetic algorithms are important? Can we apply them to all the problems we face? How feasible would it be to use a genetic algorithm on a problem? Well, we can apply them to the problems where we have many parameters. It is very similar to the DNA and gene sequence; DNAs can have different parameters and different patterns and genes can form different kinds of DNA structures to be more adaptable. So, in software, programs where we use genetic algorithms constantly try to evolve in a better state. If we have bunch of different parameters and need to find a good enough but non-perfect solution, then genetic algorithms are life saver!
                </p>

                <p>
                    Think about TSP problem; the salesman would have many paths to finish traveling every node in the graph. This means there are so many parameters indicates a path for this problem. A genetic algorithm approach would work for this problem very well! Knapsack problem can be also solved gracefully with this algorithm!
                </p>

                <h3>A picture from my own implementation: </h3>
                <img src="https://raw.githubusercontent.com/berkkirtay/geneticalgorithms/main/examples/Knapsack.PNG" alt="Example Image" width="100%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />

                <p>
                    As we can see, population evolves through breeding cycles. We can understand we are closer to the optimal solution when cycles have similar outputs. When our population struggles to evolve in a better state, then we can suppose program reached to the most adaptable state. In the picture, we can observe that the last found scores are so close to each other. So, that's the point we can stop the algorithm and observe the results.
                </p>
                <p> You can get additional info from the following repository link:</p>

                <a style={{ color: "rgb(16, 133, 76)", paddingLeft: "5%" }} href="https://github.com/berkkirtay/geneticalgorithms" target="_blank" rel="noopener noreferrer">My own implementation of genetic algorithms</a>

                <p>
                    Genetic algorithms are so useful for trainable models or real-life applications. It has a good use in robotics; basically, we can train robots, so that their prediction rate for good decisions will increase drastically.
                </p>

                <p>
                    So, I think genetic algorithm method will be used for so a long time in computer science until we find a better approach. I would say that this algorithm reflect
                    the nature's methods and the way how it solves the problems is very elegant. After all, nature has a huge amount of experience, and we only try to use its ways.
                </p>

                <hr />
                <BlogFooter blog={blog} />
            </div>
        </div>
    )
}

export default Blog1