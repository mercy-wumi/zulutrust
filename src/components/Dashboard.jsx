import Search from '../assets/images/Search.png'
import Zulu from '../assets/images/Zulu trust.png'
import home from '../assets/images/home.png'
import history from '../assets/images/history.png'
import notification from '../assets/images/notification.png'
import purchases from '../assets/images/purchases.png'
import setting from '../assets/images/setting.png'
import person from '../assets/images/person.png'
import getHelp from '../assets/images/getHelp.png'
import disputes from '../assets/images/disputes.png'
import copy from '../assets/images/copy.png'
import wallet from '../assets/images/wallet.png'
import arrowDown from '../assets/images/arrowdown.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <div className="sidebar">
                <div className="logoZulu">
                    <Link to='/'>
                        <img src={Zulu} alt="Zulu Trust logo" />
                    </Link>
                </div>
                <ul className="menu-one">
                    <li className="active">
                        <img src={home} alt="dashboard icon" />
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <img src={history} alt="history icon" />
                        <a href="#">Transaction History</a>
                    </li>
                    <li>
                        <img src={disputes} alt="disputes icon" />
                        <a href="#">Disputes</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={getHelp} alt="get help icon" />
                        <a href="#">Get Help</a>
                    </li>
                    <li>
                        <img src={setting} alt="settings icon" />
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <nav className="navbar">
                    <div className="nav">
                        <div className="searchContainer">
                            <img src={Search} alt="serach icon" />
                            <input type="text" placeholder="Search for anything" className="search" />
                        </div>
                        <div className="profileContainer">
                            <img src={notification} alt="notification icon" />
                            <div className="profile">
                                <img src={person} alt="profile" />
                                <img src={arrowDown} alt="arrow down icon" />
                            </div>
                        </div>
                    </div>
                </nav>
                <main>
                    <div className="summary">
                        <div className="bal">
                            <span>My Balance</span>
                            <div className="bit-figure">
                                <span className="bold-figures">19,49673139</span>
                                <span className="bitcoin-btn">BTC</span>
                            </div>
                            <span>$932,128.00 USD</span>
                        </div>
                        <div className="all-trans">
                            <div className="purchase-sale">
                                <img src={purchases} alt="purchase icon" className="img" />
                                <span>All Purchases</span>
                            </div>
                            <span className="bold-figures">200</span>
                        </div>
                        <div className="all-trans">
                            <div className="purchase-sale">
                                <img src={wallet} alt="sales icon" className="img" />
                                <span>All sales</span>
                            </div>
                            <span className="bold-figures">10</span>
                        </div>
                        <div className="btns">
                            <button className="buy-btn">Buy</button>
                            <button className="sell-btn">Sell</button>
                        </div>
                    </div>
                    <div className="transactions">
                        <p className="recent">Recent Transactions</p>
                        <table>
                            <thead>
                                <tr className="row">
                                    <th>Transaction type</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Buyer address</th>
                                    <th>Seller address</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row">
                                    <td>Purchase</td>
                                    <td>2022-02-23</td>
                                    <td>3.87 BTC</td>
                                    <td>
                                        <div className="copy">
                                            <span>0xr...ar45</span>
                                            <img src={copy} alt="click to copy" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="copy">
                                            <span>0xr...ar45</span>
                                            <img src={copy} alt="click to copy" />
                                        </div>
                                    </td>
                                    <td className="success">Success</td>
                                </tr>
                                <tr>
                                    <td>Purchase</td>
                                    <td>2022-02-23</td>
                                    <td>3.87 BTC</td>
                                    <td>
                                        <img src={copy} alt="click to copy" />
                                        <span>0xr...ar45</span>
                                    </td>
                                    <td>
                                        <img src={copy} alt="click to copy" />
                                        <span>0xr...ar45</span>
                                    </td>
                                    <td className="success">Success</td>
                                </tr>
                                <tr>
                                    <td>Purchase</td>
                                    <td>2022-02-23</td>
                                    <td>3.87 BTC</td>
                                    <td>
                                        <img src={copy} alt="click to copy" />
                                        <span>0xr...ar45</span>
                                    </td>
                                    <td>
                                        <img src={copy} alt="click to copy" />
                                        <span>0xr...ar45</span>
                                    </td>
                                    <td className="success">Success</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard