import VideoFrame from "../VideoFrame";
import ShowreelButton from "../ShowreelButton";

// A full-bleed strip of footage in cinema scope, with black letterbox bars above and below,
// like the moment the lights go down
export default function ReelBand() {
  return (
    <section className="bg-screen py-6 text-paper sm:py-10 lg:py-14">
      <div data-reveal className="relative">
        <VideoFrame id={22994} className="aspect-[4/3] sm:aspect-[2.39/1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-screen/70 via-screen/10 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-368 flex-col justify-end gap-6 px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
          <p className="display max-w-[16ch] text-[clamp(2rem,4vw,3.75rem)]">On set, in the edit, on screen.</p>
          <ShowreelButton className="text-paper" />
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-368 justify-between px-5 text-[13px] text-paper/50 sm:px-8 lg:px-12">
        <span>Ilaaka Studios</span>
        <span>Behind the scenes, Mumbai</span>
      </div>
    </section>
  );
}
