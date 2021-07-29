import React, {useState} from 'react';
import PostContentMain from "./PostContentMain";
import PostDate from "./PostDate";
import Editor from "./Editor";

const Post = ({title, text, img, tags, highlight, date}) => {
    const [editor, setEditor] = useState(false)
    // console.log(title, text, img, tags, highlight)
    return (
        <div className={highlight ? "post highlighted" : "post"}>

            {!editor &&
            <Editor title={title} tags={tags} text={text} date={date} img={img}/>}
            {editor &&
            <>
                <div className="post-content">
                    <PostContentMain title={title} tags={tags} text={text}/>
                    <PostDate date={date}/>
                </div>
                <img src={img} alt="title" className='post-img'/>
                </>}
            <button className="btn btn-edit">Edytuj</button>
        </div>
    );
};

export default Post