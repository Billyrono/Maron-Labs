import { FadeIn } from "@/components/scroll-animations"

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business, goals, and target audience through in-depth consultation.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Developing a comprehensive digital strategy tailored to your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Creating beautiful, functional solutions that balance aesthetics with performance.",
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "Deploying your solution and continuously optimizing for maximum results and ROI.",
    },
  ]

  return (
    <section id="process" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#cc5500] mb-4">
              How We Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#161312] tracking-tight mb-6">
              Our Process
            </h2>
            <div className="w-16 h-[1px] bg-[#cc5500] mx-auto mb-6" />
            <p className="text-base text-[#979696] tracking-wide">A proven methodology for delivering exceptional results</p>
          </div>
        </FadeIn>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative h-full group">
                <div className="p-10 border-r border-[#161312]/5 last:border-r-0 h-full transition-all duration-500 group-hover:bg-[#161312] text-center">
                  <p className="font-serif text-6xl text-[#cc5500]/20 mb-6 group-hover:text-[#cc5500]/40 transition-colors duration-500">
                    {step.number}
                  </p>
                  <h3 className="font-serif text-xl text-[#161312] mb-4 tracking-wide group-hover:text-[#f9f8f9] transition-colors duration-500">{step.title}</h3>
                  <div className="w-8 h-[1px] bg-[#cc5500] mx-auto mb-4" />
                  <p className="text-sm text-[#979696] leading-[1.8] group-hover:text-[#f9f8f9]/60 transition-colors duration-500">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
