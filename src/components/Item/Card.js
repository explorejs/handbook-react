import React from 'react'
import styled from 'styled-components'
import bookmark from '../../images/bookmark.svg'
import comment from '../../images/comment.svg'


// Components
import Rating from './Rating'
import Tag from './Tag'


const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.bgSide};
    padding: 2rem 3rem;
    margin: 20px 0px;
    border-radius: 16px;
    box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 1%);
    transition: all 0.4s ease;

    &:hover{
        transform: scale(1.01, 1.01);
        cursor: pointer;
        box-shadow: 1px 1px 13px 8px rgba(0, 0, 0, 2%);
    }

    div {
        padding-bottom: 0.8rem;
    }
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.spaceBetween && 'space-between'};
    justify-content: ${props => props.flexStart && 'flex-start'};
    justify-content: ${props => props.jusCenter && 'center'};
    align-items: space-between;
    margin-left: ${props => props.ml && '2rem'};
    margin-top: ${props => props.mt && '0.5rem'};
`

const SVG = styled.svg`
    width: 15px;
    fill: gray;
`
const Icon = styled.img`
    width: 15px;
    height: 15px;
    height: ${props => props.autoH && 'auto'};

    width: ${props => props.bookmark && '18px'};
    height: ${props => props.bookmark && 'auto'};
    cursor: pointer;
    margin-right: ${props => props.mR && '0.7rem'};
`


const Text = styled.p`
  color: ${props => props.small && 'gray'};
  font-size: ${props => props.small && '11px'};
  line-height: 1.2;
`

const Card = ({ favorite, resource, theme, toggleFavorite }) => {
    console.log(resource)

    return (
        <Wrapper key={resource._id}>
            <Flexbox spaceBetween>
                <a href={resource.url}><h3>{resource.title}</h3> </a>
                <Icon autoH bookmark src={bookmark} />
            </Flexbox>
            <div>
                <Text small>March 23, 2021</Text>
                <Text small>Shared by Nick Folden</Text>
            </div>

            {/* <Flexbox flexStart>
                <Flexbox>
                    <Rating />
                    <Text small>203 reviews</Text> 
                </Flexbox>
                <Flexbox ml>
                    <Icon mR src={comment} />
                    <Text small>109 comments</Text>
                </Flexbox>
            </Flexbox> */}
            <Text>Best platform to practice your skills, solve problems, get mentor feedback, and learn more about testing.</Text>

            <Flexbox mt flexStart>
                <Tag content="javascript" />
                <Tag content="css" />
                <Tag content="html" />
            </Flexbox>
        </Wrapper>
    )
}

export default Card
