import { MotionConfig } from 'framer-motion'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProgramsSection from './components/sections/ProgramsSection'
import StatsSection from './components/sections/StatsSection'
import CampusSection from './components/sections/CampusSection'
import SportsSection from './components/sections/SportsSection'
import RankingsSection from './components/sections/RankingsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import StepsSection from './components/sections/StepsSection'
import FaqSection from './components/sections/FaqSection'
import CtaBanner from './components/sections/CtaBanner'
import StickyCta from './components/layout/StickyCta'
import EnquirySection from './components/sections/EnquirySection'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <StickyCta />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <StatsSection />
        <CampusSection />
        <SportsSection />
        <RankingsSection />
        <TestimonialsSection />
        <StepsSection />
        <EnquirySection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </MotionConfig>
  )
}
