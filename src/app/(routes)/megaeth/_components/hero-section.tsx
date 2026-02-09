import Image from 'next/image'

import { AcrossIcon, VerifiedCheckmarkCircleIcon } from '@/app/_components/icons'
import megaEthSrc from '@/app/_assets/logos/megaeth-light.svg'

import { BridgeNowLink, bridgeAppBaseUrl } from '@/app/_components/bridge-now-link'
import { primaryButtonClass, sectionSpacing } from './styles'
import heroBackground from '../_assets/hero.svg'

const heroHighlights = [
  { label: '$35B+ volume bridged', Icon: VerifiedCheckmarkCircleIcon },
  { label: 'ZERO EXPLOITS', Icon: VerifiedCheckmarkCircleIcon },
  { label: 'USED BY TOP PROTOCOLS', Icon: VerifiedCheckmarkCircleIcon },
]

export function HeroSection() {
  return (
    <section
      className={`relative overflow-clip ${sectionSpacing} pb-16 pt-10 sm:pt-14 bg-cover sm:bg-contain bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    >
        <Image src={heroBackground} alt="" className="absolute -z-30  hidden md:flex  top-0 left-0" priority />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full">
              <AcrossIcon className="h-12 w-12 text-white" />
            </div>
            <div className='h-8 w-0.5 rounded-xl  bg-[#e0f3ff42]' />
            <Image src={megaEthSrc} alt="MegaETH logo" width={52} height={56} priority />
          </div>

          <div className="space-y-4">
            <h1 className="font-medium bg-clip-text text-transparent leading-tight text-heading-1 bg-gradient-to-r from-[#E0F3FF66] via-[#E0F3FF] to-[#E0F3FF66] inline-block">
              Bridge to MegaETH with Across
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-grey-400 sm:text-heading-4">
              Fast, secure bridging for MegaETH mainnet — Day-1 support for USDT, WBTC, and ETH.
            </p>
          </div>

          <BridgeNowLink section="marketingHero" className={primaryButtonClass} href={`${bridgeAppBaseUrl}/megaeth`}>
            Bridge to MegaETH
          </BridgeNowLink>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-x-8 gap-y-3 pt-32">
            {heroHighlights.flatMap(({ label, Icon }, index) => [
              <div key={label} className="flex items-center gap-2">
                <span className="flex shrink-0 items-center justify-center rounded-full ">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-[#e0f3ffc1]">
                  {label}
                </span>
              </div>,
              ...(index < heroHighlights.length - 1
                ? [
                    <span
                      key={`sep-${label}`}
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30"
                    />,
                  ]
                : []),
            ])}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
