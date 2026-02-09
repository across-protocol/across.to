'use client'

import BridgeGuideSection from './_components/bridge-guide-section'
import { EcosystemSection } from './_components/ecosystem-section'
import { FeaturesSection } from './_components/features-section'
import { HeroSection } from './_components/hero-section'
import { CreativeCta } from './_components/creative-cta'

export default function MegaEthLanding() {
  return (
    <div className="relative isolate overflow-hidden bg-[#151518] text-light-200">
      <HeroSection />
      <FeaturesSection />
      <BridgeGuideSection />
      <EcosystemSection />
      <CreativeCta />
    </div>
  )
}
