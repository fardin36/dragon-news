import PropTypes from 'prop-types';
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {

    // console.log(news);

    return (
        <div>
            <div className='flex justify-between items-center p-5'>
                <div className='flex items-center gap-3'>
                    <label className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={news?.author?.img} />
                        </div>
                    </label>
                    <div className='flex flex-col justify-center'>
                        <span className='font-semibold text-base'>{news?.author?.name}</span>
                        <span className='font-normal text-sm'>{news?.author?.published_date}</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <BsBookmark></BsBookmark>
                    <BsShare></BsShare>
                </div>
            </div>
            <div></div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;