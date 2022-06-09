
import React, { useState , useEffect} from 'react';
import { useMoralis } from 'react-moralis'
import Login from './Login';
import MagicGallery from '../MagicGallery';
import Header from './screens//homePage/Header';
import WelcomeUser from './WelcomeUser';
import WalletAddress from './WalletAddress';
import ChangeUsername from './ChangeUsername';

function PlutoPigsPureHTML() {
    
    const {
        isAuthenticated,
        authenticate,
        user,
        logout,
        isLoggingOut,
        setUserData,
        isAuthenticating,
        isUserUpdating,
    } = useMoralis()
    
    const localWallet = JSON.parse(localStorage.getItem('wallet-type'));
    
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState(localWallet ||'eth')
    
    useEffect(() => {
        localStorage.setItem('wallet-type', JSON.stringify(selectValue))
      },[selectValue]);
      const handleLogout = () => {
        localStorage.removeItem('wallet-type')
        logout();
      }
    
    if (!isAuthenticated) {
        return (
            <div className="App">
                <div id="background"></div>
                <header className="column-c-c">
                    <Login
                    user={user}
                    selectValue={selectValue}
                    authenticate={authenticate}
                    setSelectValue={setSelectValue}
                    isAuthenticating={isAuthenticating}
                    />
                    <Header
                        user={user}
                        selectValue={selectValue}
                        authenticate={authenticate}
                        setSelectValue={setSelectValue}
                        isAuthenticating={isAuthenticating}
                    />
                    <div id="intro-container" className="column-se-c">
                        <div id="intro-logo" className="intro">
                            <img src="https://static.wixstatic.com/media/ceb916_c2e64543bcd945baa31df6faff4a51fc~mv2.png/v1/fill/w_237,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PlutoSign.png" alt="PlutoSign.png" style={{ width: "237px", height: '237px', objectFit: 'cover', objectPosition: '50% 50%' }} />
                        </div>
                        <div className="intro-gif" >
                            <img id="plutoGif" src="../assets/images/JET_ANIMATION_NON_REPEAT.gif" className="none" alt='plutoGif' />
                        </div>
                        <div id="countdown-h1" className="intro"></div>
                        <div className="countdown">
                            <ul id="countdown"
                                className="countDown"
                                data-date="Jun 22, 2022 4:00:00 PM UTC">
                                <li className="clock-item">
                                    <span className="count-number days">?</span>
                                    <p className="count-text">Days</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number hours">?</span>
                                    <p className="count-text">Hour</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number minutes">?</span>
                                    <p className="count-text">Min</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number seconds">?</span>
                                    <p className="count-text">Sec</p>
                                </li>
                            </ul>
                        </div>
                        <div id="social-links-container-mobile" className="row-c-c">
                            <a rel="noreferrer" href="https://discord.com/invite/dQEMFTVWx2" className="link-btn discord-btn" target="_blank">{}</a>
                            <a rel="noreferrer" href="https://magiceden.io/marketplace/justape" className="link-btn magic-eden-btn" target="_blank">{}</a>
                            <a rel="noreferrer" href="https://twitter.com/plutopigsnft" className="link-btn twitter-btn" target="_blank">{}</a>
                        </div>
                    </div>
                </header>
                <main className="column-c-c">
                    <div className="info-container row-c-c">
                        <div className="info-text">
                            <h1 className="txt-40">What are PlutoPigs?</h1>
                            <p className="txt-24 bold">PlutoPigs are a collection of 8888 unique and hand drawn pixel art NFT's.

                                This is a project of community. Our vision is to build a big and bonded community while providing interaction and future features.
                
                                Not only while minting and selling out but also after that.
                
                                We do it because we love doing this and not only to make money, like a lot of projects out there who promise you the whole world and than its just crickets in the bush.</p>
                        </div>
                        <MagicGallery />
                    </div>
                    <hr className="hr-line" />
                    <div className="info-container row-c-c">
                        <div className="yeti-container">
                        </div>
                        <div className="roadmap-text">
                            <h1 className="txt-40">What are PlutoPigs?</h1>
                            <br />
                            <p className="txt-24 bold">PlutoPigs are a collection of 8088 unique and hand drawn pixel art NFT's.
        
                                This is a project of community. Our vision is to build a big and bonded community while providing interaction and future features.
                  
                                Not only while minting and selling out but also after that.
                  
                            </p>
                        </div>
                    </div>
                </main>
                <hr className="hr-line" />
                <section className="faq-container">
                    <div className="faq-one">
                        <h1 className="faq-page faq-one-page">Roadmap</h1>
                        <div className="faq-body">
                            <div className="faq-one">
                                <h1 className="faq-page-none-click faq-one-page">Phase 1: Community is KEY! 🤗</h1>
                                <div className="faq-body-none-click">
                                    <p>So before anything in life or like any other project, it is important to have a supporting community! 100 Discord Members is required to know and understand that we can launch, we don't do empty spaceships of pigs.  Of course, the 1st 100 Discord Members will receive an Automatic Whitelist Status!
                                        <br />
                                        <br />
                                        Haven't joined our Discord yet? The icon is on the Top right corner of the website 😉</p>
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 2: Blast Off! 🚀</h1>
                            <div className="faq-body-none-click">
                                <p>Priority seats on our PP Spacecraft to Pluto for our Whitelist members! Minting commences on MagicEden.io on the Solana Blockchain at 0.2 SOL for Whitelist Members only!</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 3: 100 PP Sold Out! 🐷</h1>
                            <div className="faq-body-none-click">
                                <p>All WL Members have minted their PP. To celebrate the launch, we will be giving away 10 PP NFT's on our Discord Channel.</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 4: **Pluto on route 🤑</h1>
                            <div className="faq-body-none-click">
                                <p>
                                    <b>We will be minting the remainder of the collection sending the rest of our spacecrafts on destination, Pluto.</b> First Come, First Serve** -ain't nobody got time to wait.* <b>The jealous and curious will be able to mint their PP NFT for 2 SOL</b>.
                                </p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 5: Pigs will be pigs 🐖</h1>
                            <div className="faq-body-none-click">
                                <p>100% of all PP are <b>Sold Out!</b> - If you're reading this, and you haven't minted yet, it isn't too late.<b>To giveback to the community that believed in us, we will be giving 5% of generated SOL to 10 Lucky Winners on our Discord Channel</b>(Holders of PP Only).</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 6: What wrong's with games? 👾</h1>
                            <div className="faq-body-none-click">
                                <p>We understand and experienced ourselves NFT Projects where they promise you the world but you get nothing in return.
        
                                    We don't believe in rug pulls, as of now we already have our concept for our second project - yes, anyone holding a PP NFT will receive perks and automatically be part of our second project.
                        
                                    Our Dev Dpt. are planning  a Multiplayer-based game integrated with your owned PP NFT's.
                        
                                    That's all we can say now. Little secret though? It's related to Phase 8 too!</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 7: Share the Bacon! 🥓</h1>
                            <div className="faq-body-none-click">
                                <p>Our very own, official Crypto Token will be launched on the Solana blockchain and airdropped via giveaway on Discord to everyone in our sty.
        
                                    Furthermore, our Crypto Token will be launched on a couple of highly respected Cryptocurrency Platforms for your disposal and investment - literally Play-To-Earn.</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 8: ???</h1>
                            <div className="faq-body-none-click">
                                <p>
                                    What is the fun of telling you more about our next project from now?
                                    <br />
                                    You're going to be a part if it anyways.
                                    <br />
                                    More SUPRISES & GIVEAWAYS to be expected.
                                    <br />
                                    Oh, and we guarantee to surprise the oink out of you!</p>
                            </div>
                        </div>            </div>
                </section>
                <hr className="hr-line" />
                <section className="faq-container">
                    <div className="faq-one">
                        <h1 className="faq-page faq-one-page">The Team Behind</h1>
                        <div className="faq-body">
            
                            <div className="faq-one">
                                <h1 className="faq-page faq-one-page">The Founder</h1>
                                <div className="faq-body">
                                    <p>So before anything in life or like any other project, it is important to have a supporting community! 100 Discord Members is required to know and understand that we can launch, we don't do empty spaceships of pigs.  Of course, the 1st 100 Discord Members will receive an Automatic Whitelist Status!
                                        <br />
                                        <br />
                                        Haven't joined our Discord yet? The icon is on the Top right corner of the website 😉</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">The Artist</h1>
                                <div className="faq-body">
                                    <p>Priority seats on our PP Spacecraft to Pluto for our Whitelist members! Minting commences on MagicEden.io on the Solana Blockchain at 0.2 SOL for Whitelist Members only!</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">The Web Dev</h1>
                                <div className="faq-body">
                                    <p>All WL Members have minted their PP. To celebrate the launch, we will be giving away 10 PP NFT's on our Discord Channel.</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">The Ninja</h1>
                                <div className="faq-body">
                                    <p><b>We will be minting the remainder of the collection sending the rest of our spacecrafts on destination, Pluto.</b> First Come, First Serve** -ain't nobody got time to wait.* <b>The jealous and curious will be able to mint their PP NFT for 2 SOL</b>.
        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="hr-line" />
                <section className="faq-container">
                    <div className="faq-one">
                        <h1 className="faq-page faq-one-page">Frequently asked questions</h1>
                        <div className="faq-body">
            
                            <div className="faq-one">
                                <h1 className="faq-page faq-one-page">Phase 1: Community is KEY! 🤗</h1>
                                <div className="faq-body">
                                    <p>So before anything in life or like any other project, it is important to have a supporting community! 100 Discord Members is required to know and understand that we can launch, we don't do empty spaceships of pigs.  Of course, the 1st 100 Discord Members will receive an Automatic Whitelist Status!
                                        <br />
                                        <br />
                                        Haven't joined our Discord yet? The icon is on the Top right corner of the website 😉</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 2: Blast Off! 🚀</h1>
                                <div className="faq-body">
                                    <p>Priority seats on our PP Spacecraft to Pluto for our Whitelist members! Minting commences on MagicEden.io on the Solana Blockchain at 0.2 SOL for Whitelist Members only!</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 3: 100 PP Sold Out! 🐷</h1>
                                <div className="faq-body">
                                    <p>All WL Members have minted their PP. To celebrate the launch, we will be giving away 10 PP NFT's on our Discord Channel.</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 4: **Pluto on route 🤑</h1>
                                <div className="faq-body">
                                    <p><b>We will be minting the remainder of the collection sending the rest of our spacecrafts on destination, Pluto.</b> First Come, First Serve** -ain't nobody got time to wait.* <b>The jealous and curious will be able to mint their PP NFT for 2 SOL</b>.
        
                                    </p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 5: Pigs will be pigs 🐖</h1>
                                <div className="faq-body">
                                    <p>100% of all PP are <b>Sold Out!</b> - If you're reading this, and you haven't minted yet, it isn't too late.<b>To giveback to the community that believed in us, we will be giving 5% of generated SOL to 10 Lucky Winners on our Discord Channel</b>(Holders of PP Only).</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 6: What wrong's with games? 👾</h1>
                                <div className="faq-body">
                                    <p>We understand and experienced ourselves NFT Projects where they promise you the world but you get nothing in return.
        
                                        We don't believe in rug pulls, as of now we already have our concept for our second project - yes, anyone holding a PP NFT will receive perks and automatically be part of our second project.
                        
                                        Our Dev Dpt. are planning  a Multiplayer-based game integrated with your owned PP NFT's.
                        
                                        That's all we can say now. Little secret though? It's related to Phase 8 too!</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 7: Share the Bacon! 🥓</h1>
                                <div className="faq-body">
                                    <p>Our very own, official Crypto Token will be launched on the Solana blockchain and airdropped via giveaway on Discord to everyone in our sty.
        
                                        Furthermore, our Crypto Token will be launched on a couple of highly respected Cryptocurrency Platforms for your disposal and investment - literally Play-To-Earn.</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 8: ???</h1>
                                <div className="faq-body">
                                    <p>
                                        What is the fun of telling you more about our next project from now?
                                        <br />
                                        You're going to be a part if it anyways.
                                        <br />
                                        More SUPRISES & GIVEAWAYS to be expected.
                                        <br />
                                        Oh, and we guarantee to surprise the oink out of you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="rights">PlutoPigs © 2022, All RIghts Reserved</h2>
            </div>
        );
    }else return (
        <div className="App">
            <div id="background"></div>
            <header className="column-c-c">
                <div className="header-welcome column-c-fs">
                    <WelcomeUser user={user} isLoggingOut={isLoggingOut}  handleLogout={handleLogout} />
                    <WalletAddress user={user} selectValue={selectValue} />
                </div>
                    <Header
                        user={user}
                        selectValue={selectValue}
                        authenticate={authenticate}
                        setSelectValue={setSelectValue}
                        isAuthenticating={isAuthenticating}
                     />
                    <div id="intro-container" className="column-se-c">
                        <div id="intro-logo" className="intro">
                            <img src="https://static.wixstatic.com/media/ceb916_c2e64543bcd945baa31df6faff4a51fc~mv2.png/v1/fill/w_237,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PlutoSign.png" alt="PlutoSign.png" style={{ width: "237px", height: '237px', objectFit: 'cover', objectPosition: '50% 50%' }} />
                        </div>
                        <div className="intro-gif" >
                            <img id="plutoGif" src="../assets/images/JET_ANIMATION_NON_REPEAT.gif" className="none" alt='PlutoGif' />
                        </div>
                        <div id="countdown-h1" className="intro"></div>
                        <div className="countdown">
                            <ul id="countdown"
                                className="countDown"
                                data-date="Jun 22, 2022 4:00:00 PM UTC">
                                <li className="clock-item">
                                    <span className="count-number days">?</span>
                                    <p className="count-text">Days</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number hours">?</span>
                                    <p className="count-text">Hour</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number minutes">?</span>
                                    <p className="count-text">Min</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number seconds">?</span>
                                    <p className="count-text">Sec</p>
                                </li>
                            </ul>
                        </div>
                        <div id="social-links-container-mobile" className="row-c-c">
                        <a rel="noreferrer" href="https://discord.com/invite/dQEMFTVWx2" className="link-btn discord-btn" target="_blank">{}</a>
                            <a rel="noreferrer" href="https://magiceden.io/marketplace/justape" className="link-btn magic-eden-btn" target="_blank">{}</a>
                            <a rel="noreferrer" href="https://twitter.com/plutopigsnft" className="link-btn twitter-btn" target="_blank">{}</a>
                        </div>
                    </div>
                </header>
                <main className="column-c-c">
                    <div className="info-container row-c-c">
                        <div className="info-text">
                            <h1 className="txt-40">What are PlutoPigs?</h1>
                            <p className="txt-24 bold">PlutoPigs are a collection of 8888 unique and hand drawn pixel art NFT's.

                                This is a project of community. Our vision is to build a big and bonded community while providing interaction and future features.
                
                                Not only while minting and selling out but also after that.
                
                                We do it because we love doing this and not only to make money, like a lot of projects out there who promise you the whole world and than its just crickets in the bush.</p>
                        </div>
                        <MagicGallery />
                    </div>
                    <hr className="hr-line" />
                    <div className="info-container row-c-c">
                        <div className="yeti-container">
                        </div>
                        <div className="roadmap-text">
                            <h1 className="txt-40">What are PlutoPigs?</h1>
                            <br />
                            <p className="txt-24 bold">PlutoPigs are a collection of 8088 unique and hand drawn pixel art NFT's.
        
                                This is a project of community. Our vision is to build a big and bonded community while providing interaction and future features.
                  
                                Not only while minting and selling out but also after that.
                  
                            </p>
                        </div>
                    </div>
                </main>
                <hr className="hr-line" />
                <section className="faq-container">
                    <div className="faq-one">
                        <h1 className="faq-page faq-one-page">Roadmap</h1>
                        <div className="faq-body">
                            <div className="faq-one">
                                <h1 className="faq-page-none-click faq-one-page">Phase 1: Community is KEY! 🤗</h1>
                                <div className="faq-body-none-click">
                                    <p>So before anything in life or like any other project, it is important to have a supporting community! 100 Discord Members is required to know and understand that we can launch, we don't do empty spaceships of pigs.  Of course, the 1st 100 Discord Members will receive an Automatic Whitelist Status!
                                        <br />
                                        <br />
                                        Haven't joined our Discord yet? The icon is on the Top right corner of the website 😉</p>
                                </div>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 2: Blast Off! 🚀</h1>
                            <div className="faq-body-none-click">
                                <p>Priority seats on our PP Spacecraft to Pluto for our Whitelist members! Minting commences on MagicEden.io on the Solana Blockchain at 0.2 SOL for Whitelist Members only!</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 3: 100 PP Sold Out! 🐷</h1>
                            <div className="faq-body-none-click">
                                <p>All WL Members have minted their PP. To celebrate the launch, we will be giving away 10 PP NFT's on our Discord Channel.</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 4: **Pluto on route 🤑</h1>
                            <div className="faq-body-none-click">
                                <p>
                                    <b>We will be minting the remainder of the collection sending the rest of our spacecrafts on destination, Pluto.</b> First Come, First Serve** -ain't nobody got time to wait.* <b>The jealous and curious will be able to mint their PP NFT for 2 SOL</b>.
                                </p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 5: Pigs will be pigs 🐖</h1>
                            <div className="faq-body-none-click">
                                <p>100% of all PP are <b>Sold Out!</b> - If you're reading this, and you haven't minted yet, it isn't too late.<b>To giveback to the community that believed in us, we will be giving 5% of generated SOL to 10 Lucky Winners on our Discord Channel</b>(Holders of PP Only).</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 6: What wrong's with games? 👾</h1>
                            <div className="faq-body-none-click">
                                <p>We understand and experienced ourselves NFT Projects where they promise you the world but you get nothing in return.
        
                                    We don't believe in rug pulls, as of now we already have our concept for our second project - yes, anyone holding a PP NFT will receive perks and automatically be part of our second project.
                        
                                    Our Dev Dpt. are planning  a Multiplayer-based game integrated with your owned PP NFT's.
                        
                                    That's all we can say now. Little secret though? It's related to Phase 8 too!</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 7: Share the Bacon! 🥓</h1>
                            <div className="faq-body-none-click">
                                <p>Our very own, official Crypto Token will be launched on the Solana blockchain and airdropped via giveaway on Discord to everyone in our sty.
        
                                    Furthermore, our Crypto Token will be launched on a couple of highly respected Cryptocurrency Platforms for your disposal and investment - literally Play-To-Earn.</p>
                            </div>
                        </div>
                        <hr className="hr-line" />
                        <div className="faq-two">
                            <h1 className="faq-page-none-click">Phase 8: ???</h1>
                            <div className="faq-body-none-click">
                                <p>
                                    What is the fun of telling you more about our next project from now?
                                    <br />
                                    You're going to be a part if it anyways.
                                    <br />
                                    More SUPRISES & GIVEAWAYS to be expected.
                                    <br />
                                    Oh, and we guarantee to surprise the oink out of you!</p>
                            </div>
                        </div>            </div>
                </section>
                <hr className="hr-line" />
                <section className="faq-container">
                    <div className="faq-one">
                        <h1 className="faq-page faq-one-page">The Team Behind</h1>
                        <div className="faq-body">
            
                            <div className="faq-one">
                                <h1 className="faq-page faq-one-page">The Founder</h1>
                                <div className="faq-body">
                                    <p>So before anything in life or like any other project, it is important to have a supporting community! 100 Discord Members is required to know and understand that we can launch, we don't do empty spaceships of pigs.  Of course, the 1st 100 Discord Members will receive an Automatic Whitelist Status!
                                        <br />
                                        <br />
                                        Haven't joined our Discord yet? The icon is on the Top right corner of the website 😉</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">The Artist</h1>
                                <div className="faq-body">
                                    <p>Priority seats on our PP Spacecraft to Pluto for our Whitelist members! Minting commences on MagicEden.io on the Solana Blockchain at 0.2 SOL for Whitelist Members only!</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">The Web Dev</h1>
                                <div className="faq-body">
                                    <p>All WL Members have minted their PP. To celebrate the launch, we will be giving away 10 PP NFT's on our Discord Channel.</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">The Ninja</h1>
                                <div className="faq-body">
                                    <p><b>We will be minting the remainder of the collection sending the rest of our spacecrafts on destination, Pluto.</b> First Come, First Serve** -ain't nobody got time to wait.* <b>The jealous and curious will be able to mint their PP NFT for 2 SOL</b>.
        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="hr-line" />
                <section className="faq-container">
                    <div className="faq-one">
                        <h1 className="faq-page faq-one-page">Frequently asked questions</h1>
                        <div className="faq-body">
            
                            <div className="faq-one">
                                <h1 className="faq-page faq-one-page">Phase 1: Community is KEY! 🤗</h1>
                                <div className="faq-body">
                                    <p>So before anything in life or like any other project, it is important to have a supporting community! 100 Discord Members is required to know and understand that we can launch, we don't do empty spaceships of pigs.  Of course, the 1st 100 Discord Members will receive an Automatic Whitelist Status!
                                        <br />
                                        <br />
                                        Haven't joined our Discord yet? The icon is on the Top right corner of the website 😉</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 2: Blast Off! 🚀</h1>
                                <div className="faq-body">
                                    <p>Priority seats on our PP Spacecraft to Pluto for our Whitelist members! Minting commences on MagicEden.io on the Solana Blockchain at 0.2 SOL for Whitelist Members only!</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 3: 100 PP Sold Out! 🐷</h1>
                                <div className="faq-body">
                                    <p>All WL Members have minted their PP. To celebrate the launch, we will be giving away 10 PP NFT's on our Discord Channel.</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 4: **Pluto on route 🤑</h1>
                                <div className="faq-body">
                                    <p><b>We will be minting the remainder of the collection sending the rest of our spacecrafts on destination, Pluto.</b> First Come, First Serve** -ain't nobody got time to wait.* <b>The jealous and curious will be able to mint their PP NFT for 2 SOL</b>.
        
                                    </p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 5: Pigs will be pigs 🐖</h1>
                                <div className="faq-body">
                                    <p>100% of all PP are <b>Sold Out!</b> - If you're reading this, and you haven't minted yet, it isn't too late.<b>To giveback to the community that believed in us, we will be giving 5% of generated SOL to 10 Lucky Winners on our Discord Channel</b>(Holders of PP Only).</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 6: What wrong's with games? 👾</h1>
                                <div className="faq-body">
                                    <p>We understand and experienced ourselves NFT Projects where they promise you the world but you get nothing in return.
        
                                        We don't believe in rug pulls, as of now we already have our concept for our second project - yes, anyone holding a PP NFT will receive perks and automatically be part of our second project.
                        
                                        Our Dev Dpt. are planning  a Multiplayer-based game integrated with your owned PP NFT's.
                        
                                        That's all we can say now. Little secret though? It's related to Phase 8 too!</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 7: Share the Bacon! 🥓</h1>
                                <div className="faq-body">
                                    <p>Our very own, official Crypto Token will be launched on the Solana blockchain and airdropped via giveaway on Discord to everyone in our sty.
        
                                        Furthermore, our Crypto Token will be launched on a couple of highly respected Cryptocurrency Platforms for your disposal and investment - literally Play-To-Earn.</p>
                                </div>
                            </div>
                            <hr className="hr-line" />
                            <div className="faq-two">
                                <h1 className="faq-page">Phase 8: ???</h1>
                                <div className="faq-body">
                                    <p>
                                        What is the fun of telling you more about our next project from now?
                                        <br />
                                        You're going to be a part if it anyways.
                                        <br />
                                        More SUPRISES & GIVEAWAYS to be expected.
                                        <br />
                                        Oh, and we guarantee to surprise the oink out of you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="rights">PlutoPigs © 2022, All RIghts Reserved</h2>
<ChangeUsername inputValue={inputValue} setUserData={setUserData} setInputValue={setInputValue} isUserUpdating={isUserUpdating} user={user} />                   
            </div>
    )
}

export default PlutoPigsPureHTML;
