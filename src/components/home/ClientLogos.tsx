import Marquee from "react-fast-marquee";

export default function ClientLogos() {
  return (
    <section className="py-12">
      <Marquee speed={50}>
        <div className="mx-10">Google</div>
        <div className="mx-10">Microsoft</div>
        <div className="mx-10">AWS</div>
        <div className="mx-10">OpenAI</div>
        <div className="mx-10">Firebase</div>
      </Marquee>
    </section>
  );
}