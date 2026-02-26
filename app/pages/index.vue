<template>
  <article class="w-full overflow-x-hidden bg-figma-bg font-sans px-2.5">
    <!-- Hero: Image left, Text right on figma-beige -->
    <section class="bg-figma-beige relative flex flex-col md:flex-row min-h-[420px] items-center">
      <div class="relative w-full md:w-[660px] h-[320px] md:h-[420px] flex-shrink-0 overflow-hidden">
        <img
          src="https://www.figma.com/api/mcp/asset/b4e5b1e0-0a65-4b93-bff0-446a8253ceba"
          alt="Bonbon NYC packaging"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="flex flex-col items-center justify-center flex-1 px-12 md:px-16 py-12 md:py-16">
        <p class="text-[13px] text-figma-muted tracking-[0.5px] uppercase mb-4">The Sweet Wrap: Custom Packaging</p>
        <h1 class="text-[56px] leading-[67px] text-figma-text text-center font-normal max-w-[635px]">
          For Bonbon NYC<br />By Half Price Packaging
        </h1>
      </div>
      <!-- Bon Bon logo centered on the seam between image and text -->
      <div
        class="absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[320px] md:left-[660px] md:top-auto md:bottom-0 md:translate-y-0"
      >
        <div class="bg-white rounded-[70px] p-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
          <div class="border-2 border-dashed border-figma-pink-border rounded-[62px] p-[7px]">
            <img
              src="https://www.figma.com/api/mcp/asset/ec3d52a0-5bdd-4b15-9240-e1d427065140"
              alt="Bonbon logo"
              class="w-[110px] h-[110px] rounded-[55px] object-cover block"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Feedback -->
    <section class="py-[60px] md:py-[70px] px-6 md:px-12">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div class="flex-1">
          <h2 class="text-[44px] text-figma-text font-normal mb-6">Clients Feedback</h2>
          <div class="flex justify-start mb-6">
            <img
              src="https://www.figma.com/api/mcp/asset/7610a415-eb01-4cbf-a58f-da8c99b3ac8d"
              alt="Quote"
              class="w-14 h-14"
              width="56"
              height="56"
            />
          </div>
          <p class="text-[15px] leading-6 text-figma-gray mb-8 max-w-[512px]">
            Half Price Packaging did an amazing job helping us present our brand in a way that truly reflects the quality and taste we offer to any candy lover in NYC. Their custom, detailed designs and premium finishes immediately let our customers know they're experiencing the very best. Their packaging helps us present and deliver our sweet delicacies with even more love and care.
          </p>
          <p class="text-[15px] font-medium text-figma-text">Robert Persson, Leonard Schaltz, and Selim Adira</p>
          <p class="text-[14px] text-figma-muted">Partners & Founders Of Bon Bon</p>
        </div>
        <div class="bg-figma-pink flex-1 h-[360px] flex items-center justify-center min-h-[260px]">
          <img
            src="https://www.figma.com/api/mcp/asset/c04fc052-4155-4c59-a950-91bdfcb3f658"
            alt="Bon Bon gift boxes"
            class="max-h-[299px] max-w-[410px] w-full object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>

    <!-- Challenges and Solution -->
    <section class="bg-figma-beige py-[70px] px-6 md:px-12">
      <div class="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-8">
        <div class="flex-1 bg-white border border-black/5 rounded-lg pb-10 pt-[50px] px-8">
          <h3 class="text-[36px] text-figma-text font-normal text-center pb-6 border-b-2 border-figma-pink-accent">Challenges</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-figma-dot flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white"><path d="M3 7h8M7 3v8" stroke="currentColor" stroke-width="2"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-gray">Finding ethical materials that matched vegan and sustainable values required careful effort.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-figma-dot flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white"><path d="M3 7h8M7 3v8" stroke="currentColor" stroke-width="2"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-gray">To use vegetable-based inks challenged traditional printing techniques, all while promoting recyclability.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-figma-dot flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white"><path d="M3 7h8M7 3v8" stroke="currentColor" stroke-width="2"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-gray">Sourcing natural colorants required sharp design while ensuring eco-friendly and sustainable standards.</span>
            </li>
          </ul>
        </div>
        <div class="flex-1 bg-white border border-black/5 rounded-lg pb-12 pt-[50px] px-8">
          <h3 class="text-[36px] text-figma-text font-normal text-center pb-6 border-b-2 border-figma-pink-accent">Solution</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-figma-dot flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white"><path d="M2 7l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-gray">We used eco-friendly soy-based ink to make Bon Bon's branding stand out.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-figma-dot flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white"><path d="M2 7l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-gray">Chemical-free inks created a glossy embossed logo while preserving sustainability.</span>
            </li>
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-figma-dot flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white"><path d="M2 7l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-[15px] leading-6 text-figma-gray">Natural colorants maintained bold aesthetics without compromising eco-standards.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- The Journey of Bonbon -->
    <section class="py-[70px] px-6 md:px-12">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div class="flex-1 order-2 md:order-1">
          <img
            src="https://www.figma.com/api/mcp/asset/9254d057-97ae-45e2-bf8a-469ee82e01af"
            alt="Bon Bon candies"
            class="w-full max-w-[500px] aspect-square object-cover rounded-lg"
          />
        </div>
        <div class="flex-1 order-1 md:order-2">
          <h2 class="text-[44px] text-figma-text font-normal mb-6">The Journey of Bonbon</h2>
          <div class="flex gap-5 mb-6">
            <div class="w-14 h-14 rounded-full border border-figma-pink-border flex items-center justify-center">📦</div>
            <div class="w-14 h-14 rounded-full border border-figma-pink-border flex items-center justify-center">✈</div>
            <div class="w-14 h-14 rounded-full border border-figma-pink-border flex items-center justify-center">🏪</div>
          </div>
          <p class="text-[15px] leading-6 text-figma-gray mb-6 max-w-[507px]">
            BonBon is a Swedish candy brand bringing classic sweet delicacies to the U.S. When three friends couldn't find a piece of their home here, they brought it themselves in the form of BonBon. By importing directly from Sweden, BonBon ensures the same quality, fun, and taste found in traditional Scandinavian sweets.
          </p>
          <p class="text-[15px] leading-6 text-figma-gray max-w-[473px]">
            Founded in 2017, BonBon is inclusive at heart, offering many sweet treats that are vegan and gluten-free, so everyone can satisfy their sweet cravings.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA: Your Challenge, Our Packaging Expertise -->
    <section
      class="py-[70px] px-6 md:px-12"
      style="background: linear-gradient(90deg, #f7efe6 0%, #f7efe6 4.17%, #eeb8b8 4.17%, #eeb8b8 5.56%)"
    >
      <div class="flex justify-center">
        <div class="bg-white border border-black/5 rounded-lg shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)] max-w-[600px] w-full py-10 pt-14 px-10 text-center">
          <h2 class="text-[44px] leading-[57px] text-figma-text font-normal mb-6">
            Your Challenge, Our<br />Packaging Expertise
          </h2>
          <button
            type="button"
            class="bg-figma-button text-white text-base px-10 py-4 rounded-[32px] font-normal inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Start Your Challenge &gt;
          </button>
        </div>
      </div>
    </section>

    <!-- Packaging We Came Up With -->
    <section class="py-[70px] pt-[90px] px-6 md:px-12">
      <div class="max-w-[1200px] mx-auto">
        <h2 class="text-[44px] text-figma-text font-normal mb-10">Packaging We Came Up With</h2>
        <div class="flex flex-col md:flex-row gap-12 md:gap-20">
          <div class="flex-1 border-t-2 border-figma-pink-accent">
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Box Type</span>
              </div>
              <div class="flex-1">
                <span class="text-[15px] text-figma-text">Gift Box</span>
              </div>
            </div>
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Dimensions</span>
              </div>
              <div class="flex-1">
                <span class="text-[15px] text-figma-text leading-[22px]">150 × 150 × 50 mm</span>
              </div>
            </div>
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Material & GSM</span>
              </div>
              <div class="flex-1">
                <span class="text-[15px] text-figma-text">Kraft board, 350 GSM</span>
              </div>
            </div>
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Printing Specifications</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Finishing & Surface Treatment</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Special Features</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex border-t border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Branding Placement</span>
              </div>
              <div class="flex-1"></div>
            </div>
            <div class="flex border-t border-b border-figma-pink-accent py-4">
              <div class="w-[280px] flex-shrink-0">
                <span class="text-[15px] text-figma-gray">Weight & Load Capacity</span>
              </div>
              <div class="flex-1"></div>
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <img
              src="https://www.figma.com/api/mcp/asset/dc02b89d-cac2-440a-9c53-58182e67d645"
              alt="Bon Bon gift box"
              class="max-w-[461px] max-h-[336px] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bringing It All Together -->
    <section class="bg-white flex flex-col md:flex-row min-h-[420px]">
      <div class="w-full md:w-[50%] h-[320px] md:h-[420px] flex-shrink-0 overflow-hidden">
        <img
          src="https://www.figma.com/api/mcp/asset/a287a609-19de-46a7-9851-eaaf5d0ae440"
          alt="Bon Bon packaging display - stack of pastel boxes"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="flex-1 flex flex-col justify-center px-8 md:px-16 py-10 md:py-14 bg-white">
        <h2 class="text-[44px] text-figma-text font-normal mb-6">Bringing It All Together</h2>
        <p class="text-[15px] leading-6 text-figma-gray mb-4">
          The partnership between Bon Bon and Half Price Packaging shows what happens when values and design come together. Since the beginning, the two teams had a simple objective: design packaging that is both beautiful and premium while remaining ethical. The result stood out on shelves and demonstrated Bon Bon's commitment to sustainability and care.
        </p>
        <p class="text-[15px] leading-6 text-figma-gray mb-4">
          Seeing their vision come to life was a proud moment for everyone involved. The packaging captured attention, strengthened brand identity, and delivered exactly what Bon Bon imagined, without compromise.
        </p>
        <p class="text-[15px] leading-6 text-figma-gray">
          If you run a bakery or sweets brand and feel your packaging does not fully represent who you are, we can help you change that. Our team turns ideas into packaging that feels authentic and memorable.
        </p>
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
    }
  ]
})
</script>
