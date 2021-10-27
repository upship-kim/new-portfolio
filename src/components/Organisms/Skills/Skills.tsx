import '../../../App.css';

import ContentWrapper from '../../Atoms/ContentWrapper/ContentWrapper';
import React from 'react';
import SkillTag from '../../Atoms/SkillTag/SkillTag';
import reactLogo from '../../../asset/logo/react.png';
import { skillsDatas } from '../../../data/dataForm';
import styled from 'styled-components';

const Skills = () => {
    return (
        <ContentWrapper>
            <LogoContainer>
                <ImgStyled
                    src={reactLogo}
                    alt={'react'}
                    className={'App-logo'}
                />
            </LogoContainer>
            <Container>
                <Block>
                    <SubTitle>💫 Language</SubTitle>
                    <SkillsBlock>
                        {skillsDatas.language.map((item: any) => (
                            <SkillTag text={item} />
                        ))}
                    </SkillsBlock>
                </Block>
                <Block>
                    <SubTitle>💫 Front Development Library</SubTitle>
                    <SkillsBlock>
                        {skillsDatas.library.map((item: any) => (
                            <SkillTag text={item} />
                        ))}
                    </SkillsBlock>
                </Block>
                <Block>
                    <SubTitle>💫 Etc Tools</SubTitle>
                    <SkillsBlock>
                        {skillsDatas.etc.map((item: any) => (
                            <SkillTag text={item} />
                        ))}
                    </SkillsBlock>
                </Block>
            </Container>
        </ContentWrapper>
    );
};

export default Skills;

const LogoContainer = styled.div`
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: center;
`;
const ImgStyled = styled.img``;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
`;
const Block = styled.div`
    display: flex;
    flex-direction: column;
`;
const SkillsBlock = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
`;
const SubTitle = styled.h3``;
