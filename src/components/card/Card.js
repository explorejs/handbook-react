import React from 'react'
import styled from "styled-components"

// Components
import Bookmark from "./Bookmark"
import Tag from "./Tag"
import Rating from "./Rating"
import Comments from "./Comments"

const Card = ({ favorite, resource, theme, toggleFavorite }) => {
    const tags = resource.tags;
    const fName = resource.author.name_first
    const lName = resource.author.name_last
    
    let formattedDate = new Date(resource.ts);
    formattedDate = formattedDate.toString()
    let m = formattedDate.substring(4, 7)
    let d = formattedDate.substring(8, 10)
    let y = formattedDate.substring(11, 15) 

    
    return (
        <Wrapper key={resource._id}>
            <Flexbox> 
                <a href={resource.url} target="_blank"><h3>{resource.title}</h3></a>
                <Bookmark favorite={favorite} toggleFavorite={toggleFavorite} resource={resource}/>
            </Flexbox>
            <div>
                <p><span>{m} {d},  {y}</span></p>
                <p><span>Author: <Author>{fName} {lName}</Author></span></p>
            </div>
            <p>{resource.desc}</p>
            <Flexbox flexStart>
                {tags.map( tag => (
                    <Tag content={tag} />
                ))}
            </Flexbox>
            {/* <Flexbox flexStart>
                <Rating />
                <Comments />
            </Flexbox> */}
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.bgSide};
    padding: 40px 50px;
    margin: 30px 0px;
    border-radius: 16px;
    box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.5%);
    transition: all 0.4s ease;

    &:hover{
        box-shadow: 1px 1px 13px 8px rgba(0, 0, 0, 1%);
    }

    div {
        margin: 10px 0px;
    }

    p {
        font-size: 18px;
        color: ${ props => props.theme.mainText};
        line-height: 1.3;
    }

    span {
        font-size: 14px;
        color: ${ props => props.theme.smallText};
    }
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    justify-content: ${ props => props.flexStart && "flex-start"};
    transition: all 0.3s ease-in;

    h3 {
        color: ${ props => props.theme.headingBlue};
        font-size: 22px;
        transition: all 0.3s ease;

        &:hover {
            color:  ${ props => props.theme.blueHover };
        }
    }
`

const Author = styled.a` 
    font-size: 14px;
    color: ${ props => props.theme.headingBlue};

    /* &:hover {
        color:  ${ props => props.theme.blueHover };
    } */
`