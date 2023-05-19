import React from 'react'
import Adams from '../assets/images/Adams.jpg'
import Zulu from '../assets/images/Zulu trust.png'
import Angel from '../assets/images/Angel.jpg'
import Elizabeth from '../assets/images/Elizabeth.jpg'
import Joy from '../assets/images/Joy.jpg'
import Modupe from '../assets/images/Modupe.jpg'
import Peters from '../assets/images/Peters.jpg'
import Umuhazu from '../assets/images/Umuhazu.jpg'
import CEO from '../assets/images/CEO.jpg'
import Ritaa from '../assets/images/ritaa.jpg'

const Home = () => {
    return (
        <>
            <nav>
                <div className="containe">
                    <div className="containerflex">
                        <div style={{ lineHeight: 3.5 }} className="navLogo">
                            <img style={{ width: '250px' }} className="logo" src={Zulu} alt=" zulu" />
                        </div>

                        <div className="navList-container">
                            <div className="navList">
                                <div className="home"><a className="home" href="#">Home</a></div>
                                <div><a className="work-mobile" href="#">How it works</a></div>
                                <div className="team"><a className="team" href="#">The team</a>
                                </div>
                            </div>
                        </div>

                        <div className="wallet">
                            <button className="wallet-desktop" type="button" id='open-mobile' >Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className="container future">
                    <div className="containe online-transaction">
                        <h1>The Future Of Online Transactions</h1>
                    </div>

                    <div className="buy-and-sell">
                        <p>
                            Buy And Sell With Confidence Knowing That Our Innovative Escrow
                            System Secures Your Transactions And <br />
                            Funds. Wether You're A Buyer Or a Seller,Our Platform Guarantees A
                            Safe And Seamless Experience.
                        </p>
                    </div>

                    <div className="click">
                        <button type="button"><a href="">Get Started</a></button>
                    </div>
                </div>

                <div className="offering">
                    <div className="what-we-offer">
                        <h1>What we're offering you</h1>
                    </div>

                    <div className="card-container">
                        <div className="card-one">
                            <h1>Decentralized Escrow</h1>
                            <p> With Zulu Trust,you can enjoy the benefits of a decentralized escrow system that eliminates the needs for intermediaries, thereby reducing transaction fees and increasing efficiency.</p>
                        </div>

                        <div className="card-two">
                            <h1>Secure Transactions</h1>
                            <p> With the use of blockchain technology you can be assured that all transactions are secure, transparent, and tamper-proof. Buyers and sellers can now have the peace of mind needed to conduct transactions with confidence.</p>
                        </div>

                        <div className="card-three">
                            <h1>Impartial Dispute Resolution</h1>
                            <p> In the event of a dispute, our platform offers impartial and objective dispute resolution services through the use of third-party arbitrators or mediators.</p>
                        </div>

                        <div className="card-four">
                            <h1>Automated Processes</h1>
                            <p>We make use of smart contract technology that automates the entire escrow process, ensuring that transactions are completed seamlessly and without the need for manual intervention.</p>
                        </div>
                    </div>
                </div>

                <div className="how-does">
                    <div className="how-it-work">
                        <h1>How does this work</h1>
                        <p>Buy And Sell With Confidence Knowing That Our Innovative Escrow System Secures Your Transactions and Funds. Whether <br /> You're A Buyer Or A Seller, Our Platform Guarantees A Safe And Seamless Experience.</p>
                    </div>

                    <div className="work-container">
                        <div className="container-one">
                            <div className="round"><span>1</span></div>
                            <p>The buyer and seller agree on the terms of the transaction, including the price, delivery date, and any other conditions.</p>
                        </div>

                        <div className="container-two">
                            <div className="round-two"><span>2</span></div>
                            <p>The buyer sends the funds to the escrow account, which is held in a Blockchain-based smart contract</p>
                        </div>

                        <div className="container-three">
                            <div className="round-three"><span>3</span></div>
                            <p>Once the funds are receive, the seller delivers the goods or services to the buyer.</p>
                        </div>

                        <div className="container-four">
                            <div className="round-four"><span>4</span></div>
                            <p> The buyer inspects the goods or services and verify that they meet the agreed-upon terms.</p>
                        </div>

                        <div className="container-five">
                            <div className="round-five"><span>5</span></div>
                            <p>If the buyer is satisfied with the transaction, the release the fund to the seller from the escrow account.</p>
                        </div>

                        <div className="container-six">
                            <div className="round-six"><span>6</span></div>
                            <p>In the case of a dispute, a mediator can be appointed to resolve it fairly and impartially.</p>
                        </div>
                    </div>
                </div>

                <div className="team-members">
                    <div className="zulu-trust">
                        <h1>The Humans Behind Zulu Trust</h1>
                    </div>

                    <div className="image-container">
                        <figure className="team-image">
                            <img src={CEO} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Ayomide Akintade</p>
                                <p className="para">CEO/Product Manager</p>
                            </figcaption>
                        </figure>


                        <figure className="team-image">
                            <img src={Umuhazu} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Umuhoza Diane Violine</p>
                                <p className="para">Frontend Developer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Joy} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Egbu Joy Ujunwa</p>
                                <p className="para">Frontend Developer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Elizabeth} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Elizabeth Ogah</p>
                                <p className="para">Solidity Developer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Peters} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Peters Maurice Oluwademilade</p>
                                <p className="para">UI/UX Designer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Adams} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Adams Mercy</p>
                                <p className="para">Frontend Developer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Angel} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Angel Ifechukwu Onyebuchi</p>
                                <p className="para">Technical Writer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Modupe} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Modupe Laosun</p>
                                <p className="para">Product Designer</p>
                            </figcaption>
                        </figure>

                        <figure className="team-image">
                            <img src={Ritaa} alt="This is a photo of team member" />
                            <figcaption>
                                <p>Onwudiwe Rita</p>
                                <p className="para">Product Manager</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-container">
                    <div className="logo">
                        <img style={{ width: '200px' }} src={Zulu} alt="This is a Zulu's logo" />
                    </div>

                    <div className="footer-items">
                        <div>
                            <p><a href="">Home</a></p>
                            <p><a href="">How it works</a></p>
                            <p><a href="">The team</a></p>
                        </div>
                    </div>
                </div>
                <hr style={{ border: '1px solid rgb(58, 46, 80)' }} />


                <div className="rights-reserved">
                    <p>&copy; 2023 ZULU TRUST. All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default Home