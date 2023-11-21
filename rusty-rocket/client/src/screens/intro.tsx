import { createSignal } from "solid-js";

export default function Intro() {
  const [name, setName] = createSignal("");

  return (
    <div class="flex justify-center w-full p-4">
      <div class="w-full max-w-xl flex flex-col items-center justify-center gap-4">
        <p class="text-lg text-center">
          Your routine journey through the cosmos has come to a bit of stop. Not
          the fun kind of stop at an Intergalactic Truck Stop for some
          genetically engineered beef jerky and soylent soda. No, more of the
          rapid deconstruction of your vessel as it entered the atmosphere of
          rogue planet kind of stop.
        </p>

        <p class="text-lg text-center">
          You find yourself in the wreckage of your escape pod - miraculously
          uninjured thanks to your{" "}
          <em class="text-rust">Personal Safety Reducer</em>
          <sup class="text-xs text-rust">TM</sup>. Your ship, however, has not
          been so lucky. Fortunately, the ship's{" "}
          <em class="text-rust">Xerox 6d75736b20736164</em> (please always
          address it as such) has managed to survive the collision.
        </p>

        <p class="text-lg text-center">
          It won't be a pretty job, but the AI can help you rebuild the ship and
          get you back on your way. Unfortunately, the{" "}
          <em class="text-rust">Xerox 6d75736b20736164</em> lacks the power to
          remove rust from the ship's components. Looks like you'll be stuck
          with a
        </p>

        <h1 class="font-audiowide text-5xl text-rust pt-12">Rusty Rocket</h1>

        <input
          onInput={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Enter your name or Viget Express Employee ID"
          class="w-full p-2 rounded-2xl border-2 border-rust focus:outline-none focus:border-rust focus:ring-2 focus:ring-rust bg-transparent placeholder:text-rust mt-4"
        />
        <button
          disabled={name().length < 1}
          class="bg-rust rounded-2xl text-black w-full p-2 font-audiowide focus:outline-none focus:bg-[#84a07c] hover:bg-[#84a07c] disabled:bg-[#8c1c13] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Begin (re)Building
        </button>
      </div>
    </div>
  );
}
