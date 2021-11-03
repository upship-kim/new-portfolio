import React, { useEffect, useState } from 'react';

import ContentWrapper from '../../Atoms/ContentWrapper/ContentWrapper';
import Image from '../../Atoms/Image/Image';
import { introIntroduce } from '../../../data/dataForm';
import memotion from '../../../asset/picture/meicon2.png';
import styled from 'styled-components';

const Intro = () => {
    const [text, setText] = useState<any[]>([]);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText([...text, introIntroduce[count]]);
            setCount(() => count + 1); // 개수 만큼 체크
        }, 500);
        if (count === introIntroduce.length) {
            // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    });
    return (
        <ContentWrapper>
            <PicBlock>
                <Image src={memotion} alt={'미모티콘'} width={18} />
            </PicBlock>
            <InfoBlock>
                <IntroducBox>
                    {text.map((item: any) => (
                        <SpanText>{item}</SpanText>
                    ))}
                </IntroducBox>
            </InfoBlock>
        </ContentWrapper>
    );
};

export default Intro;

const PicBlock = styled.div`
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 768px) {
        img {
            display: none;
        }
    }
`;
const InfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;
const IntroducBox = styled.div`
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: flex-start;
    color: #a1a1a1;
    @media screen and (max-width: 768px) {
        height: 100%;
        margin-top: 1rem;
    }
`;
const SpanText = styled.span`
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;
