import React from "react";

export default function Status() {
  return (
    <>
      <div className="bg-gray-100 h-fit w-full border border-2 border-zinc-300">
        <section class="bg-blue-600 text-white py-10">
          <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <h2 class="text-6xl font-bold">200+</h2>
              <p class="mt-2 text-lg">Clients Served!</p>
            </div>
            <div>
              <h2 class="text-6xl font-bold">5+</h2>
              <p class="mt-2 text-lg">Years of Web Development</p>
            </div>
            <div>
              <h2 class="text-6xl font-bold">1000+</h2>
              <p class="mt-2 text-lg">Hours of Brainstorming</p>
            </div>
            <div>
              <h2 class="text-6xl font-bold">99+</h2>
              <p class="mt-2 text-lg">% Satisfaction Guaranteed!</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
