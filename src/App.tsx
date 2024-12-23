import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css'
import { Logo } from './icons/Logo';
import { Cart } from './icons/Cart';
import { Burger } from './icons/Burger';
import { CrossMenu } from './icons/CrossMenu';
import { Button } from './components/button';
import { Title, Text } from './components/text';

const App: React.FC = () => {
    return <>
        <header className="header">
            <div className="header-wrapper">
                <Logo className="logo" />
                <nav className="navigation">
                    <ul className="navigation-menu">
                        <span className="menu-item">Home</span>
                        <li className="menu-item">Products</li>
                        <li className="menu-item">
                            <Cart className="cart" />
                        </li>
                    </ul>
                    <button className='navigation-burger'>
                        <Burger className='navigation-burger__icon' />
                        <CrossMenu className='navigation-burger__icon' />
                    </button>
                </nav>
            </div>
        </header>
        <section className="banner">
            <div className="banner-wrapper">
                <div className="banner-description">
                    <Title className='banner-title'>Discover the vast expanses of <span className="highlight">space</span></Title>
                    <Title type='secondary' className='banner-text'>Where the possibilities are <span className="highlight">endless!</span></Title>
                    <Button className='banner-button' type="contrast" >
                        <Text className='banner-button__text'>Learn more</Text>
                    </Button>
                </div>
                <img className="banner-img" src="assets/images/earth.png" alt="Banner Image"/>
            </div>
        </section>
        <main className="main">
            <div className="main-wrapper">
                <section className="offers">
                    <h1>Offers</h1>
                    <div className="offers-grid">
                        <div className="offer offer-1">
                            <Title type='secondary' className='offer-title'>Move the borders of reality!</Title>
                            <Text className='offer-text'>Go on a space adventure - it's possible with us!</Text>
                            <Button className='offer-button'>
                                <Text className='offer-button__text'>Learn more</Text>
                            </Button>
                        </div>
                        <div className="offer offer-2">
                            <Title type='secondary' className='offer-title'>Space is not just stars and planets</Title>
                            <Text className='offer-text'>Go on a space adventure</Text>
                            <Button className='offer-button'>
                                <Text className='offer-button__text'>Learn more</Text>
                            </Button>
                        </div>
                        <div className="offer offer-3">
                            <Title type='secondary' className='offer-title'>For those who dream of stars</Title>
                            <Text className='offer-text'>Our offer: make your dream come true</Text>
                            <Button className='offer-button'>
                                <Text className='offer-button__text'>Learn more</Text>
                            </Button>
                        </div>
                        <div className="offer offer-4">
                            <Title type='secondary' className='offer-title'>Fulfill your fantastic dreams</Title>
                            <Text className='offer-text'>Space has never been so close</Text>
                            <Button className='offer-button'>
                                <Text className='offer-button__text'>Learn more</Text>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="description">
                    <Title type='secondary' className='description-title'>Embark on a space journey</Title>
                    <Text type='paragraph' className='description-text'>
                        Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
                        {'\n'} {'\n'} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin orci id nulla posuere fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras varius, urna sit amet aliquet accumsan, felis nulla euismod leo, in faucibus ipsum enim non nibh. Nunc vitae tellus sed est convallis finibus. Fusce et sapien pretium, blandit neque et, accumsan urna. Etiam at sem laoreet, euismod lectus sed, mattis lectus. Vivamus in diam sapien. Maecenas a semper orci.
                    </Text>
                    <button className='description-button'>
                        <Text className='description-button__text'>Read more</Text>
                    </button>
                </section>
            </div>
        </main>
        <footer className="footer">
            <img src="assets/images/rocket.png" alt="Rocket Icon"/>
            <Text className="footer-message">Exciting space adventure!</Text>
        </footer>
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)