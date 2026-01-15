import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-primary/10 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Create AI Powered
            <span className="text-primary block">Video Courses</span>
            in Minutes
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Generate complete course outlines, lessons, and scripts using AI.
            Perfect for teachers, creators, and online educators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 pt-6">
            <div className="flex items-center gap-2">
              ⚡ No credit card required
            </div>
            <div className="flex items-center gap-2">🎥 AI Video Scripts</div>
            <div className="flex items-center gap-2">📚 Course Builder</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <Image
            src="/hero.png"
            alt="AI Course Generator"
            width={600}
            height={500}
            className="relative z-10 rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
