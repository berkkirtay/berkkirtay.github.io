// Copyright(c) 2022 Berk Kırtay

import telmac1800 from "./Telmac1800.jpg"
import c64 from "./c64.png"
import 'highlight.js/styles/github-dark.css';
import hljs from "highlight.js";
import { useEffect } from "react";

const Blog4 = () => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const code = `void Chip8::emulateNextCycle()
{
    //FETCH step:
    fetch();

    // DECODE step:
    decode();

    // EXECUTE step:
    (this->*instructionMap[opcode])();

    // Handle timer and blockers:
    calculateTimersAndBlock();
}`;

    return (
        <div>
            <p>
                Today, many of us use emulators for various reasons. Some of us use them to access the old hardware
                and some others use them to be able to play the retro games that their host platform does not support. But what is
                an emulation? Well, actually there can be two different answers to this question: We usually say that
                emulating is a virtualization method of a hardware in a software environment. But this statement can be also described
                as: Emulating is a virtualization of a machine. Here, the term machine can be interpreted as a hardware or a software system.
                Software emulations are also called virtual machines.
            </p>
            <p>
                In an engineering perspective, when one wants to get into emulation development world, they will probably start with
                emulating a CHIP-8 which is an interpreted language developed by Joseph Weisbecker used on the COSMAC VIP and Telmac 1800
                8-bit microcomputers in the 70s. It is a virtual machine which can run 36 different instructions with a small memory capacity.
                It has only 2048-kb main memory along with small number of registers. An implementation of CHIP-8 emulator
                can be realized in any programming language in a relatively short time. So, this is why many developers start their
                emulator adventure with CHIP-8.
            </p>

            <h3>A picture of Telmac 1800 Microcomputer which CHIP-8 runs on [3]</h3>
            <img src={telmac1800} alt="telmac1800" width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />

            <p>
                Before diving into the technical details of CHIP-8, I want to talk about a very famous computer in the history, Commodore64 (C64).
                Commercially speaking, C64 achieved an enormous reputation and even today many retro computer fans and collectors still make a use of it.
                It was quite a milestone of home computers. Technically, C64 uses a 6502 CPU (MOS Technology 6502) which has 56 different
                instructions and 16-bit addressing mode. C64 has a 64 KB main memory and can support multicolor sprites along with better
                audio performance than his predecessors.
            </p>
            <h3>A picture of Commodore64 (C64) [4]</h3>
            <img src={c64} alt="telmac1800" width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "1%" }} />

            <p>
                An emulator enthusiastic may take their hobby one step forward by developing a C64 emulator.
                C64 is a lot more complicated than CHIP-8. It is a hardware and it supports interrupts. It
                has multiple chips to handle more complex graphics and sound. Those mechanisms can be
                challenging for someone who tries to implement an emulator of C64.
            </p>

            <p>
                I personally started the development of my own C64 emulator and I already implemented a CHIP-8 emulator in C++
                language. So, I think I learned about the workflow during a development of an emulator. If we want to
                develop an emulator for any hardware or virtual machine, we can follow the steps below:
            </p>

            <ul>
                <li style={{ margin: "8px" }}>
                    Deciding a suitable target machine based on your skills and experience. This is non-technical advice but
                    if we aim to develop a very complex system without enough experience, then we can waste some valuable time.
                    So, we can take our time to think of the most suitable target system.
                </li>

                <li style={{ margin: "8px" }}>
                    Extensive research about technical architecture of the system we want to emulate. This step requires some
                    general knowledge about computer organization as well. One must know how a CPU clock cycle and subroutines works and how instructions
                    are decoded. Even more, one must know how interrupts and polling work. Secondly, extensive research will help us to understand the
                    features of the target system we want to emulate; the components such as, display, audio, processing, and many more
                    other features can be understood this way.
                </li>

                <li style={{ margin: "8px" }}>
                    Building an abstract code base for your emulator. Abstracting the components (an object-oriented approach would work beautifully!)
                    of the target system you want to build will cut your work into pieces, and therefore the progress will be more subtle.
                </li>

                <li style={{ margin: "8px" }}>
                    Choosing the graphics and event engines that you feel most confident with.
                </li>

                <li style={{ margin: "8px" }}>
                    A testing/debugging tool or ROM for the target system. Debugging will help a lot to observe whether the components work properly or not.
                    This will save anyone from a high amount of struggle and keep their ambition at its finest!
                </li>

                <li style={{ margin: "8px" }}>
                    Enjoying the results of the emulator! Trying different kinds of ROMs on your emulator, or even programming your own ROMs!
                </li>
            </ul>

            <p>
                Surely, I am in no position to create a framework of emulator development. I just want to show the workflow I follow.
                There can be wrong assumptions and approaches in those steps above, but it is always better to read from multiple resources and
                taking ideas from different people!
            </p>

            <h2>A CHIP-8 (berk-8) Emulator with C++ and SDL2</h2>
            <p>
                Here, I want to give a short detailed explanation about CHIP-8. You can also access this
                page and source code by visiting <a style={{ color: "rgb(16, 133, 76)" }} href="https://github.com/berkkirtay/berk-8">github.com/berkkirtay/berk-8</a>.
            </p>

            <p>
                berk-8 uses general features of CHIP-8 interpreter. The development of berk-8 has an object-oriented approach
                and the code can be examined in a straightforward way. SDL2 library is used for the development of both graphics and
                sound. More detailed information and emulator execution examples can be found below.
            </p>

            <h3>Architecture of CHIP-8</h3>

            <h4>CHIP-8 Processor provides:</h4>
            <ul>
                <li style={{ margin: "8px" }}>
                    A 2048 kb main memory with 8-bit word size
                </li>
                <li style={{ margin: "8px" }}>
                    16 8-bit registers (V)
                </li>
                <li style={{ margin: "8px" }}>
                    16 16-bit stack registers for recursive subroutine calls
                </li>
                <li style={{ margin: "8px" }}>
                    16 8-bit key registers for keypad I/O
                </li>
                <li style={{ margin: "8px" }}>
                    I 2 byte register for storing memory addresses
                </li>
                <li style={{ margin: "8px" }}>
                    PC, SP, a draw flag, delay and sound timers
                </li>
                <li style={{ margin: "8px" }}>
                    36 different 16-bit long instructions
                </li>
            </ul>

            <h4>CHIP-8 Instruction Set Architecture:</h4>
            <p>
                As it is mentioned earlier, CHIP-8 has 36 different instructions and size of the instructions are 16-bit long.
                The instructions are in big-endian format, and they cover 2 contiguous memory areas per instruction.
                CHIP-8 has various types of instructions, such as arithmetic and logic operations, simple branching and jumping,
                subroutine calls and returns, polling and waiting, and graphics manipulation.
            </p>

            <p>
                All the instructions follow the general flow of a state machine approach.
                This can be observed in the emulateNextCycle function below.
            </p>

            <pre>
                <code className="language-cpp">{code}</code>
            </pre>

            <h4>CHIP-8 Display and Graphics:</h4>
            <p>
                CHIP-8 uses a 4 byte long 64*32 pixel monochrome display. Graphics is handled  with a basic sprite drawing instruction
                (Dxyn - DRW Vx, Vy, n). CHIP-8 has some built-in font set, and they are located in the first areas of main memory. Every
                font requires up to 5-bytes memory and new fonts can be programmed this way. Whenever a draw instruction is completed,
                the draw flag lets the graphics device know that it can render the display. So, this is how display works on CHIP-8.
            </p>


            <h4>CHIP-8 I/O:</h4>
            <p>
                Available I/O device types are display, keypad, and sound.
                There are polling and waiting instructions for I/O. For example,
                polling instructions checks the state of the keypad continuously and waiting instruction
                waits for a key to be pressed from the keypad. Sound and display also works
                with polling instructions. The timers also work at a constant rate of 60Hz.
            </p>

            <p>
                So, we can see that CHIP-8 has a very basic architecture and does not rely on complex interrupts or huge number
                of various instructions. The size of the memory and the registers are small, and display is handled with a basic
                sprite drawing instruction. An emulator for this interpreter can be easily implemented for many other platforms as well.
            </p>

            <h3>Examples from berk-8</h3>
            <ul>
                <li style={{ margin: "8px" }}>
                    Space Invaders
                    <p align="center">
                        <img src="https://raw.githubusercontent.com/berkkirtay/berk-8/main/examples/space_invaders_with_berk8.gif"
                            alt="spaceinvaders" width="90%" height="40%" />
                    </p>
                </li>

                <li style={{ margin: "8px" }}>
                    Testing tool for the instruction set of CHIP-8
                    <p align="center">
                        <img src="https://raw.githubusercontent.com/berkkirtay/berk-8/main/examples/test_1.png"
                            alt="testingtool" width="90%" height="40%" />
                    </p>
                </li>
            </ul>

            <h2>What about C64?</h2>

            <p>
                C64 is my next target machine for emulation, and I am willing to share my experiences in this blog. Once I finish the development of the C64 emulator,
                I will share a short detailed explanation about C64 architecture and example pictures from the emulator.
            </p>

            <p>
                The emulation journey is not over yet. In fact, this area of computing will be more related as the time goes on!
            </p>

            <h2>References</h2>
            <p>[1] https://en.wikipedia.org/wiki/CHIP-8</p>
            <p>[2] http://devernay.free.fr/hacks/chip8/C8TECH10.HTM</p>
            <p>[3] Telmac 1800 <a style={{ color: "rgb(16, 133, 76)" }} href="https://en.wikipedia.org/wiki/Telmac_1800#/media/File:Telmac1800.jpg">
                en.wikipedia.org/wiki/Telmac_1800#/media/File:Telmac1800.jpg</a>
            </p>
            <p>[4] Commodore64 <a style={{ color: "rgb(16, 133, 76)" }} href="https://en.wikipedia.org/wiki/Commodore_64#/media/File:Commodore-64-Computer-FL.jpg">
                en.wikipedia.org/wiki/Commodore_64#/media/File:Commodore-64-Computer-FL.jpg</a>
            </p>

        </div>
    )
}

export default Blog4
