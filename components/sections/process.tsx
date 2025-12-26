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
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-black text-[#000000] mb-4 text-balance"
              style={{ fontFamily: "Oswald" }}
            >
              Our Process
            </h2>
            <p className="text-lg text-[#161312]">A proven methodology for delivering exceptional results</p>
          </div>
        </FadeIn>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative h-full">
                <div className="p-8 bg-[#f9f8f9] rounded border-l-4 border-[#cc5500] h-full hover:shadow-lg transition-shadow">
                  <p className="text-5xl font-black text-[#cc5500] mb-4" style={{ fontFamily: "Oswald" }}>
                    {step.number}
                  </p>
                  <h3 className="text-xl font-bold text-[#000000] mb-3">{step.title}</h3>
                  <p className="text-[#161312] text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#cc5500] rounded-full border-2 border-[#f9f8f9]"></div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
