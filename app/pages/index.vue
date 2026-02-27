<template>
  <article class="w-full overflow-x-hidden bg-figma-bg font-sans px-4 md:px-2.5">
    <!-- Hero: 50/50 desktop, stacked mobile. Badge centered between divs on all screens -->
    <section class="bg-figma-beige relative flex flex-col md:flex-row min-h-0 md:h-[420px] items-stretch overflow-visible border-t-[2px] border-b-[2px] border-black">
      <!-- Image: fixed height on mobile, fills half on desktop -->
      <div class="relative w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-full flex-shrink-0 overflow-hidden order-1">
        <img
          src="/img/hero-section.jpg"
          alt="Bon Bon gift boxes on silver tray"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <!-- Text: flows below image on mobile, half width on desktop, smaller & centered -->
      <div class="flex flex-col justify-center items-center text-center flex-1 md:w-1/2 px-6 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-10 md:py-16 order-2">
        <p class="text-[11px] sm:text-[12px] md:text-[13px] text-figma-muted tracking-[0.5px] uppercase mb-2 sm:mb-3 md:mb-4">The Sweet Wrap: Custom Packaging</p>
        <h1 class="font-['Playfair_Display',serif] text-xl sm:text-2xl md:text-[40px] leading-tight md:leading-[1.2] text-figma-text font-normal">
          For Bonbon NYC<br />By Half Price Packaging
        </h1>
      </div>
      <!-- Bon Bon logo: centered at bottom, overlapping both divs (mix-blend removes black bg) -->
      <div
        class="absolute z-10 left-1/2 -translate-x-1/2 bottom-0 translate-y-[30px] flex justify-center items-end"
      >
        <img
          src="/img/bonbon-logo.svg"
          alt="Bon Bon - A Swedish Candy Co."
          class="w-[340px] h-[340px] md:w-[420px] md:h-[420px] object-contain object-bottom drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        />
      </div>
    </section>

    <!-- Clients Feedback: Image first on mobile, tall rectangle in its own section -->
    <section class="py-8 md:py-[7px] px-4 md:px-12">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-5 md:gap-10 md:items-stretch">
        <div class="flex-1 order-2 md:order-1 w-full flex flex-col justify-center">
          <h2 class="font-['Playfair_Display',serif] text-2xl md:text-[44px] text-figma-text font-normal mb-2 md:mb-4">Clients Feedback</h2>
          <div class="flex justify-start mb-3">
            <img
              src="https://www.figma.com/api/mcp/asset/7610a415-eb01-4cbf-a58f-da8c99b3ac8d"
              alt="Quote"
              class="w-14 h-14"
              width="56"
              height="56"
            />
          </div>
          <p class="text-[15px] leading-6 text-figma-gray mb-3 md:mb-5 max-w-[512px]">
            Half Price Packaging did an amazing job helping us present our brand in a way that truly reflects the quality and taste we offer to any candy lover in NYC. Their custom, detailed designs and premium finishes immediately let our customers know they're experiencing the very best. Their packaging helps us present and deliver our sweet delicacies with even more love and care.
          </p>
          <p class="text-[15px] font-medium text-figma-text">Robert Persson, Leonard Schaltz, and Selim Adira</p>
          <p class="text-[14px] text-figma-muted">Partners & Founders Of Bon Bon</p>
        </div>
        <!-- Image: tall rectangle, fills its div within section -->
        <div class="relative flex-1 w-full min-h-[100px] md:min-h-[160px] overflow-hidden order-1 md:order-2">
          <img
            src="/img/client-review.jpg"
            alt="Bon Bon gift boxes"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>

    <!-- Challenges and Solution -->
    <section class="bg-[#F5F0E1] py-12 md:py-[70px] px-4 md:px-12 border-t-[2px] border-b-[2px] border-black">
      <div class="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-6 md:gap-12">
        <!-- Challenges card -->
        <div class="flex-1 bg-[#FDF8ED] border border-[#2a2a2a] pt-8 md:pt-12 pb-8 md:pb-12 px-5 md:px-10">
          <h3 class="font-['Playfair_Display',serif] text-2xl md:text-[36px] text-figma-text font-normal text-center mb-4">Challenges</h3>
          <div class="w-[75%] h-[1px] bg-[#2a2a2a] mx-auto mb-8"></div>
          <ul class="space-y-5">
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-[#2a2a2a]"><path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-text">Finding ethical materials that matched vegan and sustainable values required careful effort.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-[#2a2a2a]"><path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-text">To use vegetable-based inks challenged traditional printing techniques, all while promoting recyclability.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-[#2a2a2a]"><path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-text">Sourcing natural colorants required sharp design while ensuring eco-friendly and sustainable standards.</span>
            </li>
          </ul>
        </div>
        <!-- Solution card -->
        <div class="flex-1 bg-[#FDF8ED] border border-[#2a2a2a] pt-8 md:pt-12 pb-8 md:pb-12 px-5 md:px-10">
          <h3 class="font-['Playfair_Display',serif] text-2xl md:text-[36px] text-figma-text font-normal text-center mb-4">Solution</h3>
          <div class="w-[75%] h-[1px] bg-[#2a2a2a] mx-auto mb-8"></div>
          <ul class="space-y-5">
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-[#2a2a2a]"><path d="M2 5l2 2 4-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-text">We used eco-friendly soy-based ink to make Bon Bon's branding stand out.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-[#2a2a2a]"><path d="M2 5l2 2 4-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-text">Chemical-free inks created a glossy embossed logo while preserving sustainability.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-[#2a2a2a]"><path d="M2 5l2 2 4-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-text">Natural colorants maintained bold aesthetics without compromising eco-standards.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- The Journey of Bonbon: Collage left, text & icons right. White bg. -->
    <section class="bg-white py-8 md:py-6 px-4 md:px-12">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6 md:gap-16 md:items-stretch">
        <!-- Left: Image -->
        <div class="flex-1 order-1 md:order-1 w-full max-w-[500px] mx-auto md:mx-0 md:max-w-none flex items-center">
          <img
            src="/img/the-journey-of-bonbon.png"
            alt="Bon Bon candies and store display"
            class="w-full max-h-[280px] md:max-h-[520px] object-contain object-center rounded-lg"
          />
        </div>
        <!-- Right: Heading, icons (Instagram, Web, Message), text -->
        <div class="flex-1 order-2 md:order-2 w-full flex flex-col justify-center">
          <h2 class="font-['Playfair_Display',serif] text-2xl md:text-[44px] text-figma-text font-bold mb-4">The Journey of Bonbon</h2>
          <div class="flex gap-4 mb-4">
            <a href="#" class="w-14 h-14 rounded-full bg-figma-pink flex items-center justify-center text-white shrink-0 hover:opacity-90 transition-opacity" aria-label="Instagram">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" class="w-14 h-14 rounded-full bg-figma-pink flex items-center justify-center text-white shrink-0 hover:opacity-90 transition-opacity" aria-label="Website">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>
            </a>
            <a href="#" class="w-14 h-14 rounded-full bg-figma-pink flex items-center justify-center text-white shrink-0 hover:opacity-90 transition-opacity" aria-label="Message">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </a>
          </div>
          <p class="text-[15px] leading-6 text-figma-text mb-4 max-w-[507px]">
            BonBon is a Swedish candy brand bringing classic sweet delicacies to the U.S. When three friends couldn't find a piece of their home here, they brought it themselves in the form of BonBon. By importing directly from Sweden, BonBon ensures the same quality, fun, and taste found in traditional Scandinavian sweets.
          </p>
          <p class="text-[15px] leading-6 text-figma-text max-w-[473px]">
            Founded in 2017, BonBon is inclusive at heart, offering many sweet treats that are vegan and gluten-free, so everyone can satisfy their sweet cravings.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA: Your Challenge, Our Packaging Expertise -->
    <section
      class="py-12 md:py-[70px] px-4 md:px-12 flex items-center justify-center border-t-[2px] border-b-[2px] border-black bg-[#F5F0E1]"
      style="background-image: url('/img/pattern.png'); background-repeat: repeat; background-size: auto;"
    >
      <div class="flex justify-center w-full">
        <div class="bg-white max-w-[600px] w-full py-12 md:py-12 px-6 md:px-10 text-center" style="box-shadow: inset 0 0 0 1px black">
          <h2 class="font-['Playfair_Display',serif] text-2xl md:text-[44px] leading-tight md:leading-[57px] text-figma-text font-normal mb-5 md:mb-6">
            Your Challenge, Our<br />Packaging Expertise
          </h2>
          <div class="w-full max-w-[85%] h-px bg-black mx-auto mb-6 md:mb-8"></div>
          <button
            type="button"
            class="bg-[#cab5a2] text-[#f7efe6] text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 rounded-full font-normal inline-flex items-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center border-0 outline-none focus:ring-0 focus:outline-none min-h-[44px] md:min-h-0"
          >
            State Your Challenge
            <svg class="w-5 h-5 opacity-80" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Packaging We Came Up With: Image first on mobile, specs below -->
    <section class="bg-white py-10 md:py-[80px] pt-10 md:pt-[50px] px-4 md:px-12">
      <div class="max-w-[1200px] mx-auto">
        <h2 class="font-['Playfair_Display',serif] text-2xl md:text-[44px] text-figma-text font-bold mb-5 md:mb-8">Packaging We Came Up With</h2>
        <div class="flex flex-col md:flex-row gap-6 md:gap-20">
          <div class="flex-1 order-2 md:order-1 overflow-x-auto">
            <div class="flex flex-col sm:flex-row sm:items-start border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Box Type</span>
              </div>
              <div class="flex-1 text-right sm:text-right">
                <span class="text-[14px] md:text-[15px] text-figma-text">Tuck Box</span>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-start border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Dimensions</span>
              </div>
              <div class="flex-1 flex items-start justify-end gap-2">
                <span class="text-[14px] md:text-[15px] text-figma-text leading-[20px] md:leading-[22px] text-right max-w-[260px] md:max-w-[280px]">Internal size: 200 × 120 × 80 mm External size: 205 × 125 × 85 mm</span>
                <svg class="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5H7z"/></svg>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Material Specifications</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Printing Specifications</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Finishing & Surface Treatment</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Special Features</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Branding Placement</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center border-b border-[#c94c4c] py-2 md:py-2.5 gap-1 sm:gap-0">
              <div class="sm:w-[180px] flex-shrink-0">
                <span class="text-[14px] md:text-[15px] text-figma-text">Weight & Load Capacity</span>
              </div>
              <div class="flex-1"></div>
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center order-1 md:order-2 overflow-hidden">
            <img
              src="/img/packaging-we-came-up-with.png"
              alt="Bon Bon gift box"
              class="max-w-[520px] max-h-[320px] md:max-h-[400px] w-full object-contain border-0 outline-none"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bringing It All Together: Left image, Right text - same height -->
    <section class="flex flex-col md:flex-row border-t-[2px] border-b-[2px] border-black">
      <!-- Left: Image fills full height (~35% width), no background -->
      <div class="w-full md:w-[35%] h-[300px] md:h-[420px] flex-shrink-0 overflow-hidden order-1">
        <img
          src="/img/bringing-it-all-together.jpg"
          alt="Bon Bon packaging display - stack of pastel boxes on pink bag"
          class="w-full h-full object-cover"
          style="object-position: center 35%"
        />
      </div>
      <!-- Right: Same height as left, light beige background -->
      <div class="w-full md:w-[65%] min-h-[300px] md:h-[420px] md:min-h-0 flex flex-col justify-center bg-[#f7efe6] order-2 relative border-l border-[#e8ddd0] overflow-visible md:overflow-hidden">
        <div class="px-6 md:px-12 lg:px-14 py-5 md:py-6">
          <h2 class="font-['Playfair_Display',serif] text-xl md:text-[36px] text-figma-text font-normal mb-3 md:mb-4 text-left">Bringing It All Together</h2>
          <p class="text-[13px] md:text-[14px] leading-[1.5] text-figma-text mb-3 md:mb-4">
            The partnership between Bon Bon and Half Price Packaging shows what happens when values and design come together. Since the beginning, the two teams had a simple objective: design packaging that is both beautiful and premium while remaining ethical. The result stood out on shelves and demonstrated Bon Bon's commitment to sustainability and care.
          </p>
          <p class="text-[13px] md:text-[14px] leading-[1.5] text-figma-text mb-3 md:mb-4">
            Seeing their vision come to life was a proud moment for everyone involved. The packaging captured attention, strengthened brand identity, and delivered exactly what Bon Bon imagined, without compromise.
          </p>
          <p class="text-[13px] md:text-[14px] leading-[1.5] text-figma-text">
            If you run a bakery or sweets brand and feel your packaging does not fully represent who you are, we can help you change that. Our team turns ideas into packaging that feels authentic and memorable.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <CaseStudyFooter />
  </article>
</template>

<script setup lang="ts">
useHead({
  title: 'Bon Bon NYC – Client Success Story | Half Price Packaging',
  meta: [
    {
      name: 'description',
      content: 'How Half Price Packaging helped Bon Bon NYC create custom, sustainable packaging for their Swedish candy brand.'
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
