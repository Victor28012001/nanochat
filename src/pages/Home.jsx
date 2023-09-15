import imgVector from '../Images/Vector1.png';
import assetImg from '../Images/asset.png';
import layer1 from '../Images/Layer1.png';
import layer2 from '../Images/Layer2.png';
import layer3 from '../Images/Layer3.png';
import layer4 from '../Images/Layer4.png';
import audio from '../Images/audio.png';
import clients from '../Images/Clients.png';
import logo1 from '../Images/logo1.png';
import logo2 from '../Images/logo2.png';
import logo3 from '../Images/logo3.png';
import logo4 from '../Images/logo4.png';
import logo5 from '../Images/logo5.png';
import Communicate from '../component/Communicate';
import Layout from '../component/Layout';
import backgroundImage from '../Images/Background.png';


function Home() {
    return (

        <Layout>
            <Communicate />
            <div className="  bg-cover bg-center h-100 w-100" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <section className='flex items-center justify-around flex-wrap  max-[768px]:justify-center'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='text-[#17106B] text-2xl font-extrabold max-[600px]:text-xl'>
                            <h3>Understand Your Client <br />
                                Needs in Real Time</h3>
                        </div>
                        <div className='text-[#3592FF] text-center'>
                            <p>Lorem ipsum dolor sit amet,  consectetur adipisicing elit.</p>
                            <p> Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum  </p>
                            <p> explicabo reprehenderit optio amet ab temporibus asperiores</p>
                        </div>
                    </div>
                    <img src={assetImg} alt='assetImage' className='' />
                </section>

                <section className='px-5'>
                    <div className='grid grid-rows-2 justify-center place-items-center content-center mb-10 mt-10 px-20 '>
                        <p className='text-2xl max-[768px]:text-xl'><span className='text-[#17106B]' > Why Nano</span> <span className='text-[#3592FF]'>Chat?</span></p>
                        <img src={imgVector} className='w-32 max-[768px]:w-24' alt='vector1' />
                    </div>
                    <div className='flex flex-wrap justify-around max-[768px]:gap-[3rem]'>
                        <div className='grid grid-rows-2 justify-center place-items-center content-center'>
                            <img src={layer1} className='w-20 h-20' alt='layer1' />
                            <div>
                                <p>Lorem ipsum dolor sit amet,  consectetur.</p>
                                <p> Eligendi non quis exercitationem culpa </p>
                                <p> explicabo reprehenderit optio amet ab </p>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 justify-center place-items-center content-center'>
                            <img src={layer2} className='w-20 h-20 ' alt='layer2' />
                            <div>
                                <p>Lorem ipsum dolor sit amet,  consectetur.</p>
                                <p> Eligendi non quis exercitationem culpa</p>
                                <p> explicabo reprehenderit optio amet ab</p>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 justify-center place-items-center content-center'>
                            <img src={layer3} className='w-20 h-20' alt='layer3' />
                            <div>
                                <p>Lorem ipsum dolor sit amet,  consectetur.</p>
                                <p> Eligendi non quis exercitationem culpa</p>
                                <p> explicabo reprehenderit optio amet ab</p>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 justify-center place-items-center content-center'>
                            <img src={layer4} className='w-20 h-20' alt='layer4' />
                            <div>
                                <p>Lorem ipsum dolor sit amet,  consectetur.</p>
                                <p> Eligendi non quis exercitationem culpa </p>
                                <p> explicabo reprehenderit optio amet ab</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mt-24'>
                    <div className='flex items-center justify-around mb-10 flex-wrap max-[600px]:justify-center' >
                        <img src={audio} alt="audioImg" className='h-96 w-96' />
                        <ul>
                            <ul className='grid grid-rows-2 place-items-center'>
                                <li><span className='text-[#17106B] text-2xl max-[768px]:text-xl font-extrabold'>How to use Nano</span> <span className='text-[#3592FF] text-2xl font-extrabold'> Chat</span></li>
                                <li><img src={imgVector} className='w-32 max-[768px]:w-24' alt='vector1' /></li>
                            </ul>
                            <ul className='text-center'>
                                <li>Lorem ipsum dolor sit amet,consectetur explicabo reprehenderit explicabo reprehenderit</li>
                                <li> Eligendi non quis exercitationem culpa explicabo reprehenderit explicabo reprehenderit</li>
                                <li> explicabo reprehenderit optio amet ab explicabo reprehenderit explicabo reprehenderit</li>
                                <li> explicabo reprehenderit optio amet ab explicabo reprehenderit explicabo reprehenderit</li>
                                <li> explicabo reprehenderit optio amet ab explicabo reprehenderit explicabo reprehenderit</li>
                                <li> explicabo reprehenderit optio amet ab explicabo reprehenderit explicabo reprehenderit</li>
                                <li className='mt-5 text-center'><a href="" className="text-white  text-lg font-bold max-[600px]:text-base px-3 py-2 bg-[#3592FF] rounded-lg">Get Started</a></li>
                            </ul>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className='flex flex-col h-64 justify-center items-center mt-48 mb-48 gap-10 max-[768px]:mt-24 max-[768px]:mb-20'>
                        <div className=''><h3 className='text-[#3592FF] font-extrabold text-2xl  max-[768px]:text-xl text-center'>Communicate with Clients Anywhere in <br />
                            the World</h3>
                        </div>
                        <img src={clients} alt="clients" className='w-9/12 align-center' />
                    </div>
                </section>

                <section className=''>
                    <div className='grid place-items-center grid-cols-1 grid-rows-2 mb-5'>
                        <h3 className='text-2xl  max-[768px]:text-xl'>Our Clients</h3>
                        <img src={imgVector} className='w-32  max-[768px]:w-24' alt='vector1' />
                    </div>
                    <div className='flex justify-around'>
                        <img src={logo1} alt="" className='h-10 w-24 max-[768px]:h-5 max-[768px]:w-12' />
                        <img src={logo2} alt="" className='h-10 w-24  max-[768px]:h-5 max-[768px]:w-12' />
                        <img src={logo3} alt="" className='h-10 w-24  max-[768px]:h-5 max-[768px]:w-12' />
                        <img src={logo4} alt="" className='h-10 w-24  max-[768px]:h-5 max-[768px]:w-12' />
                        <img src={logo5} alt="" className='h-5 w-24  max-[768px]:h-5 max-[768px]:w-12' />
                    </div>
                </section>



            </div>
        </Layout>

    );
}

export default Home;