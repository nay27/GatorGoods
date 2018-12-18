/*
*   For the About page
*/
import ReactGA from 'react-ga';
import styled from 'styled-components';

const Name = styled.h3`
  color: ${props => props.theme.yellow};
`;

export default () => (
  <div>
  <h2>About page for Team15/Global team</h2>
      <Name >Jonas Kühle</Name>
        <p>
          Current Status: Masters Student
          Bachelors Degree: Applied Computer Science with Specialization in Embedded Systems at University of Applied Sciences Fulda
          This site was built for CSC 648, Software Engineering at San Francisco State University
        </p>
      <Name>Eric Groom</Name>
        <p>
          I'm currently a fourth-year student at SFSU majoring in Computer Science.
          Throughout this project I'm looking forward to learning about what it's like to
          build a battle-tested webapp as a team. Aside from programming, some of my hobbies
          include: rock climbing, foreign languages, reading and video games. I've lived in
          California for my entire life but I'm originally from Sacramento and moved to the
          Bay Area when I started at SFSU. It's really exciting being able to learn about
          software development in the center in the most-prominent location for it around the
          world.
        </p>
      <Name>Mariko Sampaga</Name>
        <p>
          I am in my senior year at SFSU majoring in Computer Engineering. This page was built as a project for CSC648
        </p>
      <Name>Naylin Min</Name>
        <p>
          My name is Naylin Min. I'm a sernior at SFSU majoring in CS. I will be graduating this semester (hopefully).
          I have experience in Java but would like to expend my knowledge regarding the process of building a website.
        </p>
      <Name>Abdullah Al Zakir Hossain</Name>
        <p>
          I'm primarily backend experience, I have been working as a Senior Full-Stack Developer in Berlin since 2014
          with Django-Python with MySQL, also worked with Symfony-Php originally, coming from Bangladesh.
        </p>
      <Name>Muhammad Vaaceph Khan</Name>
        <p>
          I'm primarily frontend developer with experiences in Angular and some familiarity with Java EE from Pakistan.
        </p>
      <Name>Chukwuebuka N. Ezelu</Name>
        <p>
          I'm mainly Android app developer with Java experiene from Nigeria.
        </p>
  </div>
);

