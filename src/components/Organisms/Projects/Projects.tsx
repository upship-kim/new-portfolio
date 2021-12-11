import ProjectItem, {
    ProjectItemArgs,
} from '../../Atoms/ProjectItem/ProjectItem';

import ContentWrapper from '../../Atoms/ContentWrapper/ContentWrapper';
import { ProjectData } from '../../../data/dataForm';
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
    return (
        <ContentWrapper>
            <PortfolioList>
                {ProjectData.map((item: ProjectItemArgs) => (
                    <ProjectItem title={item.title} body={item.body} />
                ))}
            </PortfolioList>
        </ContentWrapper>
    );
};

export default Projects;


const PortfolioList = styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    justify-content: flex-start;
    
    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        overflow-x: hidden;
    }
`;
