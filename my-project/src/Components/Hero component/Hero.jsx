// src/components/Hero.js
export default function Hero() {
  return (
    <section className="hero flex items-center justify-between">
      {/* Left side text */}
      <div className="text">
        <h1 className="text-5xl font-bold">Welcome to SmartGrade School</h1>
        <p className="mt-4">
          Join us to get the best education for your future!
        </p>
        {/* ...other text elements */}
      </div>
      {/* Right side image */}
      <div className="image">
        <img
          src="/src/assets/react.svg"
          alt="Learning"
          className="animate-[animation-name]"
        />
      </div>
    </section>
  );
}
