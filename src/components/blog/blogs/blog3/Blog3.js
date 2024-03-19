// Copyright(c) 2024 Berk Kirtay

import web2vsweb3 from "./web2vsweb3.png";
import eth from "./eth.jpg"

const Blog3 = () => {
    return (
        <div>
            <p>
                In recent years Web3 is gaining more and more popularity and there has been a debate going on about how applicable and reliable web3 is. While some people talk about its decentralized aspect, some others talk about reliability of web. We all know that transition between web1 and web2 was quick; people started interacting with web pages. Clients suddenly started communicating with centralized servers. With this change, we were also introduced to cookies, user session data and so on. Most of the web service providers collect user data and use it for their business or they can even sell it in some cases. So, the mentality here is that most of those web services are free but users are products, and they pay their fees with their private data.
            </p>
            <img src={web2vsweb3} alt="web2vsweb3" width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />
            <p>
                What about web3? With web3 there will not be service owners or data collectors, therefore we, as internet users, are expected to gain more privacy on our personal data. In a sense, we will own our data and services. Basically, on a web3 website, we only use our wallet as our identity, and since it's a peer-to-peer system there is not any centeralized service provider that can control users. It's very promising and so many people are working on blockchain systems today.
            </p>
            <h4>As a person who works on decentralized applications, I want to talk about the potential risks of web3, therefore blockchain services:</h4>
            <ul>
                <li style={{ margin: "8px" }}>
                    Blockchain technology is quite transparent, so exploring transactions of peers are so easy. It is not private at all. So, this fact invalidates the claim of anonymity. Also, we can't ignore the fact that there would be some dedicated corporates who try to scrap data from blockchains. But we can't say there is a significant amount of private data exposure of users. I think transparency of blockchains is ok. This fact directly invalidates the criticism about illegal activities on decentralized finance systems. So, blockchains still doesn't protect our privacy totally but it is way much better than what web2 offers.
                </li>
                <li style={{ margin: "8px" }}>
                    High gas or maintenance fees, this is an ongoing problem on Ethereum blockchain and it is an undesired aspect of a blockchain; nobody would want to pay hundreds of dollars to just send a text over network.
                </li>
                <li style={{ margin: "8px" }}>
                    The amount of energy being used by miners to handle peer transactions; recently this is a huge debate about how much energy proof-of-work method wastes.
                </li>
                <li style={{ margin: "8px" }}>
                    Possible threats against blockchains, we know how the original ETH (now it's called ETC) had to be forked when the whole Ethereum blockchain was hacked with rare 51% hack. There can be other vulnerabilities that we would face in the future. This is truly a negative aspect of blockchains but can be overcome with experience and precautions.
                </li>
                <li style={{ margin: "8px" }}>
                    A universal blockchain service is not possible, let's assume humanity colonized mars and assume cryptocurrencies are very commonly used. What if someone from mars wants to send a transaction to earth? This will take at least 2 hours to process transaction and return the results to the sender because of the distance between earth and mars. This can be an obstacle for future.
                </li>
                <li style={{ margin: "8px" }}>
                    Web3 would remove databases from existence because of the nature of web3. This is a possibility, but highly unlikely under current circumstances.
                </li>
            </ul>

            <p>
                So, there are tradeoffs of using web3 in the long term. I personally wonder if this transition will happen or not. Perhaps we will see a better system than the current state of web3. Also, it seems that web3 services can't reach to high-end users successfully. Concepts such as, DeFi, NFTs, metaverse are the current trends but we still don't use web3 services in our daily life. Cryptocurrencies aren't even adapted in most of the countries.
            </p>
            <p>
                I started with negative aspects of web3. But why? I wanted to point out the fact that those risks exist, and they should be solved if web3 is going to be adapted totally.
            </p>
            <h3>What web3 can achieve?</h3>
            <p>
                For sure cryptocurrencies are very promising and they showed us many times how useful they can be. For example, so many coins are donated to Ukraine from all over the world to help Ukrainians. There are many other charity examples like that.
            </p>

            <p>
                In the long term, I believe that blockchain technology will be quite more applicable and useful for our daily lives. Indeed, it has many usage areas. Imagine a voting system that uses a properly implemented blockchain system; a system that never miscounts votes and prevents any fraud attempt. Or think about immutability aspect of blockchains, all the transactions will be in the blockchain without any change; so, this fact assures all the peers about reliability of the system.
            </p>
            <p>
                Blockchain technology will impact many areas and it will firstly change the finance system we know today. We can easily see this happening by looking at how much the total value of cryptocurrencies has been increased.
            </p>
            <h3>How to improve it?</h3>
            <p>
                A blockchain is based on cryptography and math. Basically, on a standard blockchain system, we use hashing algorithms, public key cryptography standards and some sweet data structures.
            </p>
            <p>
                So, with those brilliant mathematical concepts we create such an amazing system. But as we mentioned earlier, maintaining this system is costly, wasteful, and inefficient.
            </p>
            <h4>
                There are two main concepts that a blockchain can use.
            </h4>
            <ul>
                <li style={{ margin: "8px" }}>
                    <h4>Proof of Work:</h4>
                    This method is based on how much work is done by a peer. In a blockchain system, miners always try to find a desired hash result. They just keep going until they find a result and gain the reward. This method is highly inefficient since it constantly uses processor power and causes high amount of energy waste.
                </li>
                <li style={{ margin: "8px" }}>
                    <h4>Proof of Stake:</h4>
                    This method is based on creating a consensus by stakeholders. In a blockchain system that uses proof-of-stake concept, every action gets permitted by stakeholders (validators). The more you stake, the more authority you have on the system. This method is quite efficient compared to proof-of-work concept. First, you stake some number of coins and gain the trust of other peers. Second, in those systems if a validator tries to cheat then he will be banned from the chain and lose his stakes. Third, this method guards blockchain against some hacking threats. Overall, it's much better than the old method and is the current trend.
                </li>
            </ul>

            <p>
                So, there is an efficient way to use those mathematical concepts and it is already being implemented on some blockchains (For example, Ethereum will update to ETH 2.0 soon which uses proof-of-stake instead of proof-of-work).
            </p>
            <img src={eth} alt="eth" width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />
            <p>
                The main question is, are we going to choose web3 over web2 or keep using both at the same time? Nobody can answer this for now. My opinion is that both will exist, and people will use the systems that they trust most as always. Is web3 going to gain the trust of people? I don't know. Is web3 going to provide enough privacy for the users? Yes!
            </p>
            <p>
                We talked about the feasibility about those systems, and I think we should consider one more question. Is web3 really decentralized? Can we trust very big stakeholders? I think web3 can be truly decentralized if we build it properly and create a perfectly balanced consensus. This can be the new age of internet or can be a futile attempt or can be an improved system; it is all up to the people.
            </p>
        </div>
    )
}

export default Blog3
