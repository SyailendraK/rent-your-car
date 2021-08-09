import React, { Suspense } from 'react';
import styled from 'styled-components'
import tw from 'twin.macro';
// const styled = React.lazy(() => import('styled-components').then((styled) => ({ default: styled })));

// import { BookCard } from '../../components/bookCard';
// import { Marginer } from '../../components/marginer';
// import { NavBar } from '../../components/navbar';
// import { AboutUs } from './aboutUs';
// import { BookingSteps } from './bookingSteps';
// import { TopCars } from './topCars';
// import { TopSection } from './topSection';
// import { Footer } from '../../components/footer';
const BookCard = React.lazy(() => import('../../components/bookCard').then(({ BookCard }) => ({ default: BookCard })));
const Marginer = React.lazy(() => import('../../components/marginer').then(({ Marginer }) => ({ default: Marginer })));
const NavBar = React.lazy(() => import('../../components/navbar').then(({ NavBar }) => ({ default: NavBar })));
const AboutUs = React.lazy(() => import('./aboutUs').then(({ AboutUs }) => ({ default: AboutUs })));
const BookingSteps = React.lazy(() => import('./bookingSteps').then(({ BookingSteps }) => ({ default: BookingSteps })));
const TopCars = React.lazy(() => import('./topCars').then(({ TopCars }) => ({ default: TopCars })));
const TopSection = React.lazy(() => import('./topSection').then(({TopSection }) => ({ default:TopSection })));
const Footer = React.lazy(() => import('../../components/footer').then(({ Footer }) => ({ default: Footer })));

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage(){
  return <PageContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </Suspense>
  </PageContainer>
}