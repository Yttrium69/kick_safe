import React from 'react';
import '../App.scss'

interface tag_props{
    background_color:string;
    font_color:string;
    img_src:string;
    title: string;
}


function Tag(tag_props:tag_props): JSX.Element {
    const back_style:object = {
        "padding": "0.4rem 1rem", backgroundColor:tag_props.background_color, borderRadius:"10rem", display:"inline-flex", columnGap:"0.5rem", width:"fit-content"
    }
    const font_style:object = {
        color: tag_props.font_color
    }
    const icon_style:object = {
        width: "0.75rem", height: "0.75rem"
    }
    return (
        <div style={back_style} className="comp_tag">
            <div className="img_container" style={icon_style}>
                <img style={{width:"100%", height:"100%"}} alt="icon" src={tag_props.img_src}/>
            </div>
            <div style={font_style}>{tag_props.title}</div>
        </div>
    );
}

export default Tag;