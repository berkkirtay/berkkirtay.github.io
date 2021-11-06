import { useParams, Link } from 'react-router-dom';

import cryptoimg from "./cryptography.jpg"
import sha2img from "./sha2.png"
import enigma_machine from "./enigma_machine.png"

const Blog1 = ({ blog }) => {
    return (
        <div className='blog'>
            <h1 style={{ display: "inline" }}>On Cryptography</h1>

            <Link to="/blogs" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }} ><button className="button">Go back</button></Link>
            <hr />
            <div className='blogBlock' style={{ padding: "1%" }}>
                <p>
                    Cryptography has a long history. The story starts with Caesar's himself. He created the first known encryption method called Caesar Cipher.
                    He used this method to send secret messages to his legions in the battlefield. Long story short, you can say his method was so easily breakable but at that time it was such a brilliant idea for the war doctrines. This amazing idea gave him a huge advantage! But so soon humanity needed better methods to secure their messages. So, this is the beginning of Cryptography in our history.
                </p>
                <img src={cryptoimg} alt="Cryptography Image" width="80%" height="30%" style={{ display: "block", margin: "auto", padding: "1%" }} />
                <p>
                    As number theory was being worked on, the encryption algorithms were also getting more advanced. Before we invented computers, basic ciphers were enough to secure our messages. Back then you could not brute force those algorithms on the paper. With the huge computational power we have today, we can break them instantly. After a long time, Germans invented enigma machine to encrypt their messages during World War 2. They were so assured; they thought their machine was unbreakable. Soon after, a genius named Alan Turing invented a machine called Turing machine and broke it and all other weak encryption methods once and for all.
                </p>
                <h4>An Enigma machine with four rotors:</h4>
                <img src={enigma_machine} alt="Enigma Machine" width="80%" height="50%" style={{ display: "block", margin: "auto", padding: "1%" }} />
                <p>
                    The reason why enigma machine has a weak encryption method is it only substitutes one character for another. It does not use a block cipher method, so today it can be considered as weak as Caesar Cipher.</p>
                <p>
                    It's interesting that cryptography was the reason for the computers to show up. It is obvious that we needed a huge amount of computational power to strengthen our encryption methods. With the quick advance on processors, many concepts in number theory were possible to test and observe. This advance created a big jump on cryptography as well. Today we have very powerful cryptographic algorithms. You can secure any data, and nobody will ever know what it means unless you allow them to know. This is so amazingly fascinating! From easy as pie Caesar Cipher to unbreakable asynchronous encryption algorithms. I also have to mention block cipher since it is not convenient to use time consuming asynchronous with big files or networking. We have AES
                    algorithms for this case and they work very well!
                </p>
                <p>
                    It amazes me how much hashing algorithms were improved in the last three decades. It's basically impossible to observe a collision for SHA256 algorithm. The most stupid idea in the world can be more possible. The collision chance for SHA256 algorithm is 10^-53. This number is enormously small so that I still can't comprehend how small it is. I love this side of computer science a lot and I think we are not done with cryptography yet. There were many ways to crack very recent encryption algorithms and all of them were countered with better practices after years. Let me give you an example, the only way to break an RSA key pair which generated with big enough prime numbers is brute force. And as you can think, it's conceptually impossible to break RSA algorithm with brute force. Because we really can't find the divisors of a really big number. There would be only one exception for this, it is quantum computers.
                </p>
                <h4>A representation for SHA2 algorithm:</h4>
                <img src={sha2img} alt="SHA2 Image" width="70%" height="30%" style={{ display: "block", margin: "auto", padding: "1%" }} />
                <p>
                    Scientists say quantum computers will be millions of times faster than the computers we have today. If this is true, then quantum processors can simply brute force our ``powerful and unbreakable`` encryption algorithms. Well in that case we can use this huge amount of computational power to generate stronger methods. The simplest example could be increasing the size of RSA key pairs. Today a size of 2048 bits key pair is seen as impossible to break. Well, we can generate a much bigger numbers and primes with our quantum computers. So, my guess is we will have our algorithms and methods around even after the creation of a true quantum computer.
                </p>
                <p>
                    I also think that this is not a threat for the decentralized systems. We will not lose our decentralized systems as long as they keep up with the race. I can't say anything about our current blockchain systems. I really don't know what would happen to bitcoin when a beast quantum computer takes over the internet. I think all the decentralized systems we have now will adapt before those things happen and we won't see any dramatical result in our technology. I am still only amazed by this concept: some mathematicians and computer scientists do their best to improve this state-of-the-art technology and we can't do anything but wait to see what is going to happen in our next struggle.
                </p>
                <hr />
                <p style={{ textAlign: "right", margin: "0.5%" }}>{blog.date}</p>
            </div>
        </div>
    )
}

export default Blog1
