import React from 'react';
import styled from 'styled-components';

export interface ProjectItemArgs {
    id?: number;
    title: string;
    body: Body;
}
type Img = {
    img: string;
};
type Body = {
    stack: string;
    descript: string;
    img: string;
    url?: string;
    memo?: string;
};
const ProjectItem = ({ title, body }: ProjectItemArgs) => {
    return (
        <ItemBlock>
            <ItemImage img={body.img} />
            <ItemText title={title} body={body} />
        </ItemBlock>
    );
};

const ItemImage = ({ img }: Img) => {
    return (
        <img
            src={img}
            style={{
                width: '100%',
                border: '1px solid #eee',
            }}
            alt="img"
        />
    );
};
const ItemText = ({ title, body }: ProjectItemArgs) => {
    return (
        <div style={{ paddingLeft: 10, fontSize: 12 }}>
            <h3>[{title}]</h3>
            <b>Tech Stack</b>
            <div>{body.stack}</div>
            <br />
            <b>주요 기능</b>
            <div> {body.descript}</div>
            {body.url && (
                <a href={body.url} style={{ textDecoration: 'none', color: 'green' }}>
                    <br />
                    동작 영상 보기
                </a>
            )}
            {body.memo && <p>{body.memo}</p>}
        </div>
    );
};

export default ProjectItem;

const ItemBlock = styled.div`
    border: 1px solid ${props => props.theme.textColor};
    box-sizing: border-box;
    margin: 1rem;
    padding: 0.8rem;
    display: flex;
    width: 30%;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
    @media screen and (max-width: 1000px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`;
