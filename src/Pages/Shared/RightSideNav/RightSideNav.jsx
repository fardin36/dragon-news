import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className='px-2 space-y-3 mb-6'>
                <h2 className="text-xl font-semibold">Login with</h2>
                <button className="btn btn-outline btn-block">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline btn-block">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='px-2 font-medium mb-5'>
                <h2 className="text-xl font-semibold">Find us on</h2>
                <a href="" className='p-4 flex gap-2 items-center border border-[#E7E7E7] rounded-t'>
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href="" className='p-4 flex gap-2 items-center border-x border-[#E7E7E7]'>
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href="" className='p-4 flex gap-2 items-center border border-[#E7E7E7] rounded-b'>
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='px-2 space-y-3 mb-5'>
                <h2 className="text-xl font-semibold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;