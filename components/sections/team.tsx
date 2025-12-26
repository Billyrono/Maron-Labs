import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "Billy Mark Rono",
    role: "Founder & Lead Designer",
    bio: "Visionary creative director with a passion for transforming ideas into exceptional digital experiences. Drives the creative vision and strategic direction of Maron Labs.",
    initials: "BR",
    color: "from-[#cc5500] to-[#a83f00]",
  },
  {
    name: "Emmanuel Kibet",
    role: "Senior Web Developer",
    bio: "Full-stack developer specializing in scalable, high-performance web applications. Expert in modern frameworks and cutting-edge development practices.",
    initials: "EK",
    color: "from-[#161312] to-[#000000]",
  },
  {
    name: "Tiffany Nyawira",
    role: "Senior Software Developer",
    bio: "Expert in building robust backend systems and cloud-native solutions. Ensures technical excellence and system reliability across all projects.",
    initials: "TN",
    color: "from-[#cc5500] to-[#fee2b2]",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f9f8f9]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#cc5500] mb-4 font-medium" style={{ fontFamily: "Yellowtail" }}>
            The People Behind Maron Labs
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#000000] mb-4 text-balance"
            style={{ fontFamily: "Oswald" }}
          >
            Meet Our Team
          </h2>
          <p className="text-lg text-[#161312] max-w-2xl mx-auto">
            Talented professionals dedicated to your success. Our multidisciplinary team combines creativity with technical expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              {/* Avatar */}
              <div className={`bg-gradient-to-br ${member.color} aspect-square rounded-lg mb-6 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                <div className="text-center text-[#f9f8f9] z-10">
                  <p className="text-6xl font-black" style={{ fontFamily: "Oswald" }}>
                    {member.initials}
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#000000]/0 group-hover:bg-[#000000]/20 transition-all duration-300" />
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#000000] mb-1">{member.name}</h3>
                <p className="text-[#cc5500] font-bold mb-3">{member.role}</p>
                <p className="text-[#161312] leading-relaxed mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#f9f8f9] border border-[#979696]/30 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#f9f8f9] border border-[#979696]/30 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:hello@maronlabs.com"
                    className="w-10 h-10 rounded-full bg-[#f9f8f9] border border-[#979696]/30 flex items-center justify-center hover:bg-[#cc5500] hover:border-[#cc5500] hover:text-[#f9f8f9] text-[#161312] transition-all"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="mt-16 text-center p-8 bg-[#ffffff] rounded-lg border border-[#979696]/20">
          <h3 className="text-2xl font-bold text-[#000000] mb-2">Want to Join Our Team?</h3>
          <p className="text-[#161312] mb-6">We're always looking for talented individuals who share our passion for digital excellence.</p>
          <a
            href="mailto:hello@maronlabs.com?subject=Career%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#cc5500] text-[#cc5500] rounded font-bold hover:bg-[#cc5500] hover:text-[#f9f8f9] transition"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
