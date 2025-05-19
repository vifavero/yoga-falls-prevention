import React from 'react';

const DangerSection = () => {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16 bg-violet-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-violet-800 mb-6">
            After months spent in pain and feeling sorry for myself, imagine how I felt when my Physiotherapist told me: All of This Could Have Been Avoided if I Had Taken Simple Steps to 'Fall-Proof' My Body
          </h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-lg md:text-xl font-bold text-violet-800 mb-4">
              My physiotherapist went on to explain:
            </h3>

            <p className="text-md md:text-lg text-gray-700 mb-4 font-semibold">
              Physio:
            </p>
            <p className="text-md md:text-lg text-gray-700 mb-4 italic">
              "Tripping and falling is inevitable at times. There will always be uneven pavement, an unseen obstacle, a stray cord, or a small child running underfoot. There may be times that a medication you're taking makes you unsteady or general fatigue has you dragging your feet. It happens to EVERYONE - and it WILL happen to you."
            </p>

            <p className="text-md md:text-lg text-gray-700 mb-4 font-semibold">
              So, If the risk of falling is always there, how could I protect myself?
            </p>

            <p className="text-md md:text-lg text-gray-700 mb-4 font-semibold">
              Physio:
            </p>
            <p className="text-md md:text-lg text-gray-700 mb-4 italic">
              "The difference is how your body responds to these small stumbles. This can be the difference between a minor slip, where you slightly stumble and continuing on with your day...
              Or a dangerous fall that lands you in a hospital bed... or even worse... YOUR DEATHBED."
            </p>
          </div>

          <p className="text-md md:text-lg text-gray-700 mb-4">
            I thought I had been doing all the right things. I had maintained a healthy lifestyle, watched my weight, and stayed active. I wore sensible footwear and avoided potentially risky environments whenever possible.
          </p>

          <p className="text-md md:text-lg text-gray-700 mb-4">
            Maybe you've done the same?
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <ul className="list-disc pl-6 mb-4">
              <li className="text-md md:text-lg text-gray-700 mb-2">
                You thought you could do a few sit ups - do a few stretches, and you would be good to go.
              </li>
              <li className="text-md md:text-lg text-gray-700 mb-2">
                You start going through some simple exercises at home using videos you found on Youtube.
              </li>
              <li className="text-md md:text-lg text-gray-700 mb-2">
                You attend some beginner or Seniors fitness classes at your local Rec Center.
              </li>
              <li className="text-md md:text-lg text-gray-700 mb-2">
                Maybe you bought an expensive membership at your local Yoga studio and attended classes regularly.
              </li>
            </ul>

            <p className="text-md md:text-lg text-gray-700 mb-4 italic">
              In my heart, I knew none of this could 'fall proof' my body and keep me safe.
            </p>
            <p className="text-md md:text-lg text-gray-700 mb-4 italic">
              I was at a loss - how could I protect Myself? What could I do?
            </p>
            <p className="text-md md:text-lg text-gray-700 italic">
              I was tired of pouring money down the drain on supposed solutions that simply did not help! I started looking for answers, and what I discovered has changed my life!
            </p>
          </div>

          <h4 className="text-lg md:text-xl font-medium text-center text-violet-800 mb-6">
            The Facts About Falling are STAGGERING!
          </h4>

          <p className="text-md md:text-lg text-gray-700 mb-6">
            The risk for older adults simply cannot be ignored. According to the World Health Organization (WHO), While everyone can, and likely will fall from time to time:
          </p>

          <div className="bg-violet-100 p-6 rounded-lg mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-center text-violet-800 mb-6">
              For Seniors, the data surrounding the dangers of falling is downright bleak!
            </h3>

            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                <img
                  src="https://ext.same-assets.com/4288299207/2048302449.png"
                  alt="Caution Sign"
                  className="max-w-[100px] h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <ul className="list-disc pl-6">
                  <li className="text-md md:text-lg text-gray-700 mb-3">
                    The New York Times reports that 1 in 3 seniors will fall this year
                  </li>
                  <li className="text-md md:text-lg text-gray-700 mb-3">
                    Research from the University of Toronto shows that 2 out of 5 Seniors with fractured hips will die within 6 months of their injury.
                  </li>
                  <li className="text-md md:text-lg text-gray-700 mb-3">
                    The Center for Disease Control and Prevention predicts 3 million older Americans will visit the E.R. for a fall this year... 300,000 of those will break their hip...
                  </li>
                  <li className="text-md md:text-lg text-gray-700">
                    CBS News reports that each year, 29 million Americans fall... and that: "Older adult falls are increasing and, sadly, [causing] the end of independence". And its getting worse...
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-md md:text-lg text-gray-700 mb-10">
            This information scared me more than I can Express. I couldn't stop imagining the worst. Just the thought of losing my independence - or my life - had me rethinking everything I thought I knew about my personal safety!
          </p>

          <div className="text-center mb-8">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-md">
              Get My Fall-Proof Yoga Program Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DangerSection;
