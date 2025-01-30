import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-foreground">
            nextflow
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Manage complex middleware chains in your
            next.js codebase
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/oslabs-beta/NextFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="/docs"
              className="px-6 py-3 border border-foreground/20 text-foreground rounded-lg font-medium hover:bg-foreground/5 transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Middleware Visualization",
              description:
                "Specify your top level middleware and nextflow will find the rest",
              icon: "⚡️",
            },
            {
              title: "Performance Metrics",
              description:
                "Identify problem middleware quickly and effectively",
              icon: "🛠️",
            },
            {
              title: "Reduce Learning Curve",
              description:
                "Understand complex middleware relationships with a glance",
              icon: "🚀",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-foreground/10 hover:shadow-lg transition-shadow bg-background"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jun Inton",
                image: "",
                github: "https://github.com/JunInton",
              },
              {
                name: "Anthony Noyola",
                image: "",
                github: "https://github.com/antwonasn",
              },
              {
                name: "Sung Jung",
                image: "",
                github: "https://github.com/sungguk85",
              },
              {
                name: "Carolina Robinson",
                image: "",
                github: "https://github.com/CaroSaFe",
              },
              {
                name: "Brendan Hoskins",
                image: "/IMG_0493.jpeg",
                github: "https://github.com/BrendanHoskins",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 rounded-xl border border-foreground/10 hover:shadow-lg transition-shadow bg-background"
              >
                <div className="w-32 h-32 relative rounded-full overflow-hidden mb-6 bg-foreground/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 128px) 100vw, 128px"
                    style={{
                      objectPosition:
                        member.name === "Brendan Hoskins"
                          ? "center -10px"
                          : "center",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {member.name}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center text-foreground/60">
          <p>Built with ❤️ by the oslabs community</p>
        </footer>
      </main>
    </div>
  );
}
