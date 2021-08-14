import React from 'react';
import '../styles/destinations.css';

const Destinations = () => {
    return (
        <>
            <div class="container destination-container">
                <div className="w-100 py-5 my-3 destination-banner">
                    <h1 className='text-center'>Welcome to my Destinations page</h1>
                </div>
                <div class="row">
                    <div class="col-sm-4 mb-4">
                        <div class="card shadow">
                            <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e3794a0b646d638627afb626bf9ee46f472feb1/big-0bb2a2bea537c680f141d40cb484d888.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1 className="card-title">Greece</h1>
                                <p class="card-text">Greece: where historic ruins, volcanic cliffs, and friendly locals meet the blue Mediterranean Sea.
          Incredible beaches, authentic villages, clear blue waters, great food, amazing landscapes, history, culture…. the list goes on!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card shadow">
                            <img src="https://static.mansionglobal.com/production/media/article-images/9a381c147fd1e8c58f4d933ca2562214/large_GettyImages-4788217942.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1 className="card-title">Los Angeles</h1>
                                <p class="card-text">Los Angeles is a huge city that unsurprisingly attracts millions of visitors a year. I mean, it makes sense with the non-stop summer weather, gorgeous beaches, hip and happening neighborhoods, iconic landmarks (Hollywood Sign and Santa Monica Pier), and of course, the glitz and glam of the entertainment industry.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card shadow">
                            <img src="https://portal.ehawaii.gov/assets/webp/page/government/counties/honolulu.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h1 className="card-title">Hawaii</h1>
                                <p class="card-text">It’s a popular getaway for surfers, hikers, and anyone looking to slow down and enjoy the slower pace of island life. The beauty of Hawaii lies in the land (or Aina), people, and indigenous culture. As a visitor, it’s essential to understand Hawai’i’s complex and painful history and, as with all places, treat this place with an abundance of respect.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card shadow">
                            <img src="https://g.foolcdn.com/editorial/images/600161/las-vegas-sign-at-dusk.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1 className="card-title">Las Vegas</h1>
                                <p class="card-text">If there's one thing that Las Vegas is known for, it's the endless supply of unforgettable nightlife experiences, most of which take place at some of the most dazzling and luxurious nightclubs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card shadow">
                            <img src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1 className="card-title">Paris</h1>
                                <p class="card-text">Paris is one of the most desirable and popular travel destinations in the world thanks to its stunning architecture, its wealth of art and culture and its exquisite gastronomy that will leave you feeling blissful .</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card shadow">
                            <img src="https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1 className="card-title">Venice</h1>
                                <p class="card-text">Known as the ‘City of Canals’ there are many things Venice is famous for including its beautiful bridges, gondola rides, atmospheric streets and carnival celebrations. Built over 118 islands, Venice and its lagoon is one of the most unique cities in the world. .</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Destinations;