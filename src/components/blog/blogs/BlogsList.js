// This file can be used as a blog storage for static version.

import crypto from "crypto";
import Blog1 from "./blog1/Blog1";
import Blog2 from "./blog2/Blog2";
import Blog3 from "./blog3/Blog3";
import Blog4 from "./blog4/Blog4";

const Blog1Metadata = {
    _id: crypto.createHash("SHA1").update("On Cryptography").digest("hex"),
    title: "On Cryptography",
    content: <Blog1 />,
    date: "November 04, 2021",
    text: "Cryptography has a long history. The story starts with Caesar himself. He created the first known encryption method called Caesar Cipher. He used this method to send secret messages to his legions on the battlefield. Long story short, you can say his method was so easily breakable"
}

const Blog2Metadata = {
    _id: crypto.createHash("SHA1").update("My Thoughts on Genetic Algorithms").digest('hex'),
    title: "My Thoughts on Genetic Algorithms",
    content: <Blog2 />,
    date: "November 19, 2021",
    text: "Nowadays, everyone talks about artificial intelligence. We can say AI is almost the most hyped area of computer science. What about how AI works? What kind of algorithms do we use to make our computers perform those intelligent things?"
}

const Blog3Metadata = {
    _id: crypto.createHash("SHA1").update("Web2 vs Web3 and Privacy").digest('hex'),
    title: "Web2 vs Web3 and Privacy",
    content: <Blog3 />,
    date: "March 08, 2022",
    text: "Now Web3 is gaining more and more popularity, there is a debate going on about how applicable and reliable web3 is. While some people talk about its decentralized aspect, some others talk about"
}

const Blog4Metadata = {
    _id: crypto.createHash("SHA1").update("Emulator 101 and Beyond").digest('hex'),
    title: "Emulator 101 and Beyond",
    content: <Blog4 />,
    date: "Jan 09, 2023",
    text: "Today, many of us use emulators for various reasons. Some of us use them to access the old hardware and some others use them to be able to play the games that their platform does not support.But what is an emulation?"
}


export const BlogList = [Blog1Metadata, Blog2Metadata, Blog3Metadata, Blog4Metadata];

export default BlogList;