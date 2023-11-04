"use client";
import { LandingContent } from '../../components/LandingContent';
import { LandingHero } from '../../components/LandingHero';
import { DataProvider } from '../../context/DataContext';

const LangingPage = () => {
  return (<>
    <DataProvider>
      <LandingHero />
      <LandingContent />
    </DataProvider>
  </>);
};

export default LangingPage;